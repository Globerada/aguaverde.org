<template>
  <p>
    <small>
      <template v-if="post.fields && post.fields.author">
        Publicado {{ post.date }} por
        <a href="#">{{ post.fields.author }}</a>
        <span v-if="post.timeToRead"> - </span>
      </template>

      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} minuto{{ post.timeToRead > 1 ? 's' : '' }} de lectura</strong>
      </template>
    </small>
  </p>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true }
  }
}
</script>
