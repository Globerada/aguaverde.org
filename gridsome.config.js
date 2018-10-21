module.exports = {
  siteName: 'Triatlón Aguaverde',
  siteUrl: `https://elated-rosalind-79d1be.netlify.com/`,
  titleTemplate: '%s - Madrid',
  siteDescription: 'Triatlón en Madrid con el Club Triatlón Aguaverde',
  // pathPrefix: '/new',

  plugins: [
    '@gridsome/plugin-critical',
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'page',
        index: ['README'],
        path: 'info/**/*.md',
        typeName: 'Info',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        type: 'post',
        path: 'blog/*.md',
        route: '/blog/:slug+',
        typeName: 'Blog',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
  ]
}
