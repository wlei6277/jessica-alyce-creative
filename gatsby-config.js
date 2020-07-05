require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

// Configuration file
const website = require('./config/website');

const { PRISMIC_REPO_NAME } = process.env;

const headerSchema = require('./.prismic/header.json');
const settingsSchema = require('./.prismic/settings.json');
const pageSchema = require('./.prismic/page.json');

module.exports = {
  siteMetadata: {
    title: `Jessica Alyce Creative`,
    description: `Bondi based freelance stylist`,
    author: `Billy Leitch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "resources.scss";',
        includePaths: ['src/sass/base', 'src'],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: '/',
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: PRISMIC_REPO_NAME,
        linkResolver: () => doc => `/${doc.uid}`,
        schemas: { header: headerSchema, settings: settingsSchema, page: pageSchema },
        fetchLinks: ['category.uid'],
        shouldDownloadImage: () => true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
