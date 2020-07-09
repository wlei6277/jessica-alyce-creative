import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Image } from 'components';
import { Slice } from '../slices/Slice';
import './page.scss';

export const Page = props => {
  const { location, data } = props || {};

  const pageData = data?.prismicPage?.data;

  const { body: sliceData, layout, hero_image: heroImage } = pageData || {};

  const defaultLayout = !layout || layout === 'None';

  return (
    <Layout location={location}>
      <div className={`wrapper ${defaultLayout ? '' : layout.toLowerCase()}`}>
        {heroImage && <Image image={heroImage} className="hero-image" />}
        {sliceData?.map(slice => (
          <Slice key={slice.id} data={slice} location={location} />
        ))}
      </div>
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      data {
        hero_image {
          alt
          localFile {
            childImageSharp {
              fluid(maxWidth: 1800, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
          url
        }
        layout
        body {
          ...WysiwygPageFragment
          ...TaglinePageFragment
          ...CarouselPageFragment
        }
      }
    }
  }
`;
