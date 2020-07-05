import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment CarouselPageFragment on PrismicPageBodyCarousel {
    id
    slice_type
    items {
      image {
        alt
        localFile {
          childImageSharp {
            fluid(maxHeight: 1100, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
        url
      }
    }
  }
`;
