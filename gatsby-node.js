const path = require('path');
exports.createPages = async ({graphql, actions})=> {
  const result = await graphql(`
  {
      allFile {
        edges {
          node {
            relativePath
            id
          }
        }
      }
    }
  `);
  result.data.allFile.edges.forEach(element => {
    const { node }  = element;
    actions.createPage({
      path:`/image/${node.id}`,
      component: path.resolve(`./src/template/template.js`),
      context:{ 
        relativePath: node.relativePath
       }
    });
  });
};