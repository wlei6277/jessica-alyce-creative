require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

// Configuration file
const website = require('./config/website');

const headerSchema = require('./.prismic/header.json');
const settingsSchema = require('./.prismic/settings.json');
const pageSchema = require('./.prismic/page.json');

// Path prefix
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

console.log(pathPrefix);

// Environment variables
const {
  IS_STAGING,
  SITE_URL,
  PRISMIC_REPO_NAME,
  API_KEY,
  NODE_ENV,
  gatsby_executing_command: GATSBY_CMD,
} = process.env;

// Env variable check
if (GATSBY_CMD !== 'serve') {
  const requiredEnvVariables = ['SITE_URL', 'PRISMIC_REPO_NAME', 'API_KEY'];
  requiredEnvVariables.map(item => {
    if (!process.env[item]) {
      throw Error(`Set ${item} env variable`);
    }
    return null;
  });
}
module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: SITE_URL + pathPrefix,
    pathPrefix,
    title: website.title,
    description: website.description,
    banner: website.banner,
    siteName: website.siteName,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    prismicRepo: PRISMIC_REPO_NAME,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: null,
        configFile: IS_STAGING ? 'robots-txt.staging.js' : 'robots-txt.production.js',
      },
    },
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
    'gatsby-plugin-sitemap',
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
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: SITE_URL + pathPrefix,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
