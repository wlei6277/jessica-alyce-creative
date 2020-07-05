import React from 'react';
import { Header } from 'components';
import '../sass/global/styles.scss';
import 'typeface-lato';
import './Layout.scss';

export const Layout = ({ children }) => (
  <div id="layout">
    <Header />
    <main>{children}</main>
  </div>
);
