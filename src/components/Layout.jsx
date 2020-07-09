import React from 'react';
import { SiteHeader, Footer } from 'components';
import SEO from './SEO.jsx';
import '../sass/global/styles.scss';
import 'typeface-lato';
import './Layout.scss';

export const Layout = ({ children, location }) => (
  <div id="layout">
    <SiteHeader location={location} />
    <SEO />
    <main>{children}</main>
    <Footer />
  </div>
);
