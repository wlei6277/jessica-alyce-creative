import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'components';
import { Slice } from '../slices/Slice';

export const Page = props => {
  const pageData = props?.data.prismicPage?.data;

  // const { body: sliceData, }

  const sliceData = pageData?.body;

  return (
    <Layout>
      <div className="wrapper">
        {sliceData?.map(slice => (
          <Slice key={slice.id} data={slice} />
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
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            extension
          }
          alt
          url
        }
        body {
          ...WysiwygPageFragment
          ...TaglinePageFragment
          ...CarouselPageFragment
        }
      }
    }
  }
`;
