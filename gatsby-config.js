const path = require('path')

module.exports = {
  //Permite buscar archivos desde el siste png, jpg, pdf entre otras
  plugins: [
    { resolve: `gatsby-source-filesystem`, 
    options: {
      path: path.join(__dirname, 'src', 'images'),
      name: 'images'
    }
  }, 
    
  //Transformador de imagenes
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,

  //Editor de imagen trabaja en conjunto con plugin-image y tranforme-sharp
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        quality: 50,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      },
    },
  },

  //Creador de rutas para el cliente sobretodo para validacion de usuarios
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/app/*`] },
  },

  //Framework de diseño
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-emotion`,

  //Aplicaciones Progresivas Manifest creando un archivo json en el navegador
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "GatsbyJS",
      short_name: "GatsbyJS",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      icon: "src/images/svg/earth.svg", 
      crossOrigin: `use-credentials`,
    },
  },
  {
    resolve: `gatsby-plugin-offline`, //Permite que la pagina trabaje sin internet despues de aberla cargado una vez es necesario que este despues de plugin-manifest
    options: {
      precachePages: [`/about`],
    },
  },
  ],
}