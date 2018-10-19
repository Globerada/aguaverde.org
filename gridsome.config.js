module.exports = {
  siteName: 'Triatlón Aguaverde',
  siteUrl: `http://www.aguaverde.org/`,
  titleTemplate: '%s - Madrid',
  siteDescription: 'Triatlón en Madrid con el Club Triatlón Aguaverde',
  pathPrefix: '/new',

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
        path: 'blog/*/index.md',
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
