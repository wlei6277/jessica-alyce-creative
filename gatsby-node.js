const path = require('path');

exports.createPages = async ({ grapqhl, actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/',
    component: path.resolve('src/templates/home.jsx'),
  });
};
