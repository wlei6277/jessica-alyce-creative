import React from 'react';
import { Nav } from 'components';
import '../sass/global/styles.scss';
import 'typeface-lato';
import './Layout.scss';

export const Layout = ({ children, navProps }) => (
  <div id="layout">
    <Nav {...navProps} />
    <main>{children}</main>
  </div>
);
