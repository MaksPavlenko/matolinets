// const path = require('path');

// const makeRequest = (graphql, request) =>
//   new Promise((resolve, reject) => {
//     resolve(
//       graphql(request).then((result) => {
//         if (result.errors) {
//           reject(result.errors);
//         }
//         return result;
//       })
//     );
//   });

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const generatePages = makeRequest(
//     graphql,
//     `
//         {
//           allContentfulTemplateCases {
//             edges {
//               node {
//                 id
//                 slug
//                 contentful_id
//               }
//             }
//           }
//         }
//     `
//   ).then((result) => {
//     result.data.allContentfulTemplateCases.edges.forEach(({ node }) => {
//       createPage({
//         path: `/${node.slug}/`,
//         component: path.resolve(`src/template/case.js`),
//         context: {
//           id: node.id,
//         },
//       });
//     });
//   });

//   return Promise.all([generatePages]);
// };
