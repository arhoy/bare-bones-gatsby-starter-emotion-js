require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Define site URL here
let URL;
if (process.env.NODE_ENV === 'production') {
  URL = 'https://example.com';
} else {
  URL = 'http://localhost:8000';
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Emotion Starter`,
    description: `A simple Gatsby Starter with Emotion and Layout File, Google Analytics and Google Fonts`,
    author: `Alex Quasar`,
    twitterUsername: '@_aquasar',
    image: '/default.png',
    url: URL,
    siteUrl: URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100,300,500,600,700`,
          `Helvetica\:100,300,500,600,700`,
        ],
        display: 'swap',
      },
    },
    // When you have your key, uncomment and add here
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
    //   },
    // },
  ],
};
