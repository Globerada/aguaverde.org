export default {
  metaInfo() {
    const title = this.$page.post.title
    const description =
      this.$page.post.fields.excerpt || this.$page.post.title || ""
    const image = this.$page.post.fields.thumbnail || ""
    const meta = [
      {
        hid: "description",
        name: "description",
        content: description
      }
    ]

    const twitter = {
      card: "summary",
      title,
      site: "@triaguaverde",
      creator: "@triaguaverde",
      description,
      image,
      url: this.$route.path
    }

    const twitterMeta = Object.keys(twitter).map(key => {
      if (key === "image") {
        return { name: `twitter:${key}`, content: twitter[key] }
      }

      return {
        hid: `twitter:${key}`,
        name: `twitter:${key}`,
        content: twitter[key]
      }
    })

    const og = {
      type: "article",
      title,
      description,
      image,
      url: this.$route.path,
      locale: "es_ES"
    }

    const ogMeta = Object.keys(og).map(key => ({
      hid: `og:${key}`,
      name: `og:${key}`,
      content: og[key]
    }))

    return {
      title,
      meta: [].concat(meta, twitterMeta, ogMeta)
    }
  }
}
