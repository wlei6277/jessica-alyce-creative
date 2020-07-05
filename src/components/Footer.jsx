import React from 'react';
import OnVisible from 'react-on-visible';
import { StaticQuery, graphql } from 'gatsby';
import { SocialLinks } from 'components';
import './Footer.scss';

const footerQuery = graphql`
  {
    prismicSettings {
      data {
        social_links {
          platform
          link {
            text
          }
        }
      }
    }
  }
`;

const FooterUi = props => {
  const footerData = props?.prismicSettings?.data;

  if (!footerData) return null;

  const { social_links: socialLinks } = footerData;

  const onVisibleProps = { wrappingElement: 'footer', id: 'footer', className: 'site-footer' };

  return (
    <OnVisible {...onVisibleProps}>
      <SocialLinks socialLinks={socialLinks} />
    </OnVisible>
  );
};

export const Footer = () => <StaticQuery query={footerQuery} render={queryData => <FooterUi {...queryData} />} />;
