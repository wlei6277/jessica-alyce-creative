import React from 'react';
import OnVisible from 'react-on-visible';
import shortid from 'shortid';
import { Link, StaticQuery, graphql } from 'gatsby';
import './SiteHeader.scss';

const headerQuery = graphql`
  {
    prismicHeader {
      data {
        capabilities {
          capability
        }
        links {
          link {
            url
          }
          link_text {
            text
          }
        }
        title {
          text
        }
      }
    }
  }
`;

const Capabilities = ({ capabilities }) => {
  const capabilitiesLength = capabilities?.length;

  const checkIsLast = index => index === capabilitiesLength - 1;

  return (
    <div className="header-capabilities">
      {capabilities?.map(({ capability }, index) => (
        <div key={shortid.generate()} className="capability-container">
          <span>{capability}</span>
          {!checkIsLast(index) && <span className="capability-spacer">.</span>}
        </div>
      ))}
    </div>
  );
};

const Tabs = ({ links }) => (
  <div className="header-tabs">
    {links?.map(({ link, link_text: text }) => (
      <Link to={link?.url} key={shortid.generate()}>
        {text?.text}
      </Link>
    ))}
  </div>
);

const SiteHeaderUi = props => {
  const headerData = props?.prismicHeader?.data;

  if (!headerData) return null;

  const { capabilities, links, title } = headerData;

  const onVisibleProps = { wrappingElement: 'header', id: 'header', className: 'site-header' };

  return (
    <OnVisible {...onVisibleProps}>
      <div className="header-wrapper">
        {title && (
          <Link to="/">
            <h1 className="site-title">{title?.text}</h1>
          </Link>
        )}
        {capabilities && <Capabilities capabilities={capabilities} />}
        {links && <Tabs links={links} />}
      </div>
    </OnVisible>
  );
};

export const SiteHeader = () => (
  <StaticQuery query={headerQuery} render={queryData => <SiteHeaderUi {...queryData} />} />
);
