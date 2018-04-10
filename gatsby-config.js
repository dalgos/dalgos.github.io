module.exports = {
  siteMetadata: {
    title: 'oror.io',
    author: 'dalgos'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        precision: 8,
      }
    }
  ],
  pathPrefix: '/'
};
