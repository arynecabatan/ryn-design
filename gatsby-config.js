module.exports = {
  siteMetadata: {
    title: "Ryn Design",
    siteUrl: "https://ryn.design/",
    titleTemplate: "Ryn Design | %s",
    description: "Ryn Design Portfolio",
    author: "Ryn Cabatan",
    contact: "arynecabatan@gmail.com"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.js"),
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `image`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -72
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
