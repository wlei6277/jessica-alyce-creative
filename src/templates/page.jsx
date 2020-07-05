import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'components';
import { Slice } from '../slices/Slice';

export const Page = props => {
  const pageData = props?.data.prismicPage?.data;

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

export const query = graphql`
  {
    prismicPage {
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
        }
      }
    }
  }
`;
