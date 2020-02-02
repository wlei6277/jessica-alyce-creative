import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment AnchorHomeFragment on PrismicHomeBodyAnchor {
    id
    slice_type
    primary {
      anchor {
        text
      }
      icon {
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
    }
  }
`;
