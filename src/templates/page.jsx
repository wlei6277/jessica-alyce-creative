import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Nav, Image } from 'components';

export const Page = props => {
  const { data } = props;
  return (
    <Layout>
      <div className="wrapper">{/* <Image image={heroImage} className="hero-image" /> */}</div>
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
        # body {
        #   ...AnchorHomeFragment
        # }
      }
    }
  }
`;
