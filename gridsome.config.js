module.exports = {
  siteName: "Triatlón Aguaverde en Madrid",
  siteUrl: `https://elated-rosalind-79d1be.netlify.com/`,
  // titleTemplate: "%s - Madrid",
  siteDescription:
    "Triatlón en Madrid con el Club Triatlón Aguaverde ✅ Barato y sin compromisos",
  // pathPrefix: '/new',

  plugins: [
    "@gridsome/plugin-critical",
    {
      use: "@gridsome/source-filesystem",
      options: {
        index: ["README"],
        path: "info/**/*.md",
        typeName: "InfoPage",
        remark: {
          plugins: ["@gridsome/remark-prismjs"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        route: "/blog/:slug+",
        typeName: "BlogPost",
        remark: {
          plugins: ["@gridsome/remark-prismjs"]
        }
      }
    }
  ]
}
