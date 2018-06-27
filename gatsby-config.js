module.exports = {
  siteMetadata: {
    title: 'dev.logs',
    author: 'dalgos',
    meta: [
      { name: 'description', content: 'dalgos blog' },
      { name: 'keywords', content: 'frontend, javascript' },
    ],
    description: `The Developer's Guide to the Web`
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
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-121406525-1',
        head: false,
      }
    }
  ],
  pathPrefix: '/'
};
