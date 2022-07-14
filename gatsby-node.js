const path = require('path');

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      })
    );
  });

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const generateProductPages = makeRequest(
    graphql,
    `
        {
            allStrapiServices {
              edges {
                node {
                  id
                  slug
                }
              }
            }
            
            allStrapiCases {
              edges {
                node {
                  id
                  slug  
                }
              }
            }

            allStrapiWorks {
              edges {
                node {
                  id
                  slug  
                }
              }
            }
        }
    `
  ).then((result) => {

    result.data.allStrapiServices.edges.forEach(({ node }) => {
      createPage({
        path: `/services/${node.slug}/`,
        component: path.resolve(`src/template/services-inner.js`),
        context: {
          id: node.id,
        },
      });
    });

    result.data.allStrapiCases.edges.forEach(({ node }) => {
      createPage({
        path: `/fund/${node.slug}/`,
        component: path.resolve(`src/template/case-template.js`),
        context: {
          id: node.id,
        },
      });
    });

    result.data.allStrapiWorks.edges.forEach(({ node }) => {
      createPage({
        path: `/works/${node.slug}/`,
        component: path.resolve(`src/template/works-inner.js`),
        context: {
          id: node.id,
        },
      });
    });
  });



  return Promise.all([generateProductPages]);
};
