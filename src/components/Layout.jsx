import React from 'react';
import { SiteHeader, Footer } from 'components';
import '../sass/global/styles.scss';
import 'typeface-lato';
import './Layout.scss';

export const Layout = ({ children }) => (
  <div id="layout">
    <SiteHeader />
    <main>{children}</main>
    <Footer />
  </div>
);
