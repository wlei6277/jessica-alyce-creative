import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment WysiwygPageFragment on PrismicPageBodyWysiwyg {
    id
    slice_type
    primary {
      custom_class {
        text
      }
      title {
        html
      }
    }
    items {
      content {
        html
      }
      image {
        alt
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
