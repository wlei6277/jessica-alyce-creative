const path = require('path');

exports.createPages = async ({ grapqhl, actions }) => {
  const { createPage } = actions;

  const pages = await grapqhl(`
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

  pages.forEach(edge => {
    const uid = edge?.node?.uid;

    return createPage({
      path: uid === 'home' ? '/' : uid,
      template: path.resolve('src/templates/page.jsx'),
      context: { uid },
    });
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-proposal-optional-chaining'),
  });
};
