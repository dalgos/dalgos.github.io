module.exports = {
  siteMetadata: {
    title: 'devlogs',
    author: 'dalgos'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
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
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
  pathPrefix: '/'
};
