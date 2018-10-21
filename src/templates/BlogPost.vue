<template>
  <Layout>
    <Section class="post" container="md" dots="true" >
      <h1 v-html="$page.post.title"/>
      <div v-if="$page.post.fields.thumbnail" class="post__image">
        <img :src="$page.post.fields.thumbnail" />
      </div>
      <PostMeta :post="$page.post"/>
      <p class="lead" v-html="$page.post.fields.excerpt"/>
      <div v-html="$page.post.content"/>
    </Section>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    fields {
      author
      excerpt
      thumbnail
    }
  }
}
</page-query>

<script>
import PostMeta from '@/components/PostMeta.vue'

export default {
  components: {
    PostMeta
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.fields.excerpt
        }
      ]
    }
  }
}
</script>
<style>
.post__image {
  display: table;
  margin: auto;
  text-align: center;
  max-width: 500px;
  width: 100%;
  height: auto;  
}
</style>
