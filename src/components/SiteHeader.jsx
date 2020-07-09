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
            uid
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

const Tabs = ({ links, location }) => (
  <div className="header-tabs">
    {links?.map(({ link: { uid } }) => (
      <Tab key={shortid.generate()} uid={uid} location={location} />
    ))}
  </div>
);

const Tab = ({ uid: tabUid, location }) => {
  const locationUid = location?.pathname?.replace(/\//g, '');

  const url = tabUid === 'portfolio' ? '/' : `/${tabUid}`;

  const isLandingPage = locationUid === '';

  const isActive = tabUid === locationUid || (isLandingPage && tabUid === 'portfolio');

  const capitalisedUid = `${tabUid[0].toUpperCase()}${tabUid.slice(1)}`;

  return (
    <Link to={url} key={shortid.generate()} className={isActive ? 'tab active' : 'tab'}>
      {capitalisedUid}
    </Link>
  );
};

const SiteHeaderUi = props => {
  const headerData = props?.prismicHeader?.data;

  const location = props?.location;

  if (!headerData) return null;

  const { capabilities, links, title } = headerData;

  const onVisibleProps = { wrappingElement: 'header', id: 'header', className: 'site-header' };

  const tabsProps = { location, links };

  return (
    <OnVisible {...onVisibleProps}>
      <div className="header-wrapper">
        {title && (
          <Link to="/">
            <h1 className="site-title">{title?.text}</h1>
          </Link>
        )}
        {capabilities && <Capabilities capabilities={capabilities} />}
        {links && <Tabs {...tabsProps} />}
      </div>
    </OnVisible>
  );
};

export const SiteHeader = ({ location }) => (
  <StaticQuery query={headerQuery} render={queryData => <SiteHeaderUi {...queryData} location={location} />} />
);
