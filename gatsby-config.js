module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  'gatsby-plugin-postcss',
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // Directory with the strings JSON
      path: `${__dirname}/src/intl`,
      // Supported languages
      languages: [`es`, `en`],
      // Default site language
      defaultLanguage: `en`,
      // Redirects to `/pt` in the route `/`
      redirect: false,
    },
  },
  {
    /**
     * First up is the WordPress source plugin that connects Gatsby
     * to your WordPress site.
     *
     * visit the plugin docs to learn more
     * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
     *
     */
    resolve: `gatsby-source-wordpress`,
    options: {
      // the only required plugin option for WordPress is the GraphQL url.
      url:
        process.env.WPGRAPHQL_URL ||
        `https://dhkitchenco.wpengine.com/graphql`,
    },
  },
  'gatsby-plugin-netlify'

]
};