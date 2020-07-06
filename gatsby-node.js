const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const resolveTemplate = templateName => path.resolve(`src/templates/${templateName}.jsx`);

  const destructureEdges = (response, prismicField) => response.data[`${prismicField}`].edges;

  const checkLandingPage = (uid, route) => `${uid === 'home' || uid === route ? '' : uid}`;

  const mapPage = (route, pageType) =>
    createPage({
      path: route,
      component: resolveTemplate(pageType),
    });

  const mapPages = async (res, pageType, prismicField, route) => {
    // Get template component
    const template = resolveTemplate(pageType);
    // Pluck the page data off the graphql response
    const pageData = destructureEdges(res, prismicField);
    // Check if the homepage exists
    if (pageType === 'page' && !pageData.find(edge => edge.node.uid === 'home')) {
      throw Error('Create page with slug home');
    }

    pageData.forEach(edge => {
      const uid = edge?.node?.uid;

      createPage({
        path: `${route}/${checkLandingPage(uid, route)}`,
        component: template,
        context: {
          uid,
        },
      });
    });
  };

  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  mapPages(pages, 'page', 'allPrismicPage', '');
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-proposal-optional-chaining'),
  });
};
