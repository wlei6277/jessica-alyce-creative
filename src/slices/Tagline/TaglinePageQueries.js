import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment TaglinePageFragment on PrismicPageBodyTagline {
    id
    slice_type
    primary {
      tagline {
        html
      }
    }
  }
`;
