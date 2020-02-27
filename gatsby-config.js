const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'cwa',
    author: 'kei',
    meta: [
      { name: 'description', content: 'blog' },
      { name: 'keywords', content: 'frontend, javascript, typescript' },
    ],
    description: `Advanced Frontend Engineer`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.tsx'),
          posts: require.resolve('./src/components/PostLayout.tsx'),
        }
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages`,
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'cwa',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      }
    },
    // 'gatsby-plugin-catch-links',
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-prismjs',
    //         options: {
    //           classPrefix: 'language-',
    //           inlineCodeMarker: null,
    //           aliases: {},
    //         }
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 590,
    //         }
    //       }
    //     ]
    //   }
    // },
    
    
    
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-121406525-1',
        head: false,
      }
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [`.mdx`, `.md`],
    //   },
    // },
  ],
  pathPrefix: '/'
};
