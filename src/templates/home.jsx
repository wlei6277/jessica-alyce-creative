import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Nav, Image } from 'components';

export const Home = ({
  data: {
    prismicHome: {
      data: {
        hero_image: heroImage,
        nav_heading: { text: navHeading },
        nav_sub_heading: { text: navSubHeading },
        body: sliceData,
      },
    },
  },
}) => {
  const navProps = {
    name: navHeading,
    role: navSubHeading,
    anchors: sliceData.filter(({ slice_type: type }) => type === 'anchor'),
  };
  return (
    <Layout navProps={navProps}>
      <div className="wrapper">
        <Image image={heroImage} className="hero-image" />
      </div>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  {
    prismicHome {
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
        nav_heading {
          text
        }
        nav_sub_heading {
          text
        }
        body {
          ...AnchorHomeFragment
        }
      }
    }
  }
`;
