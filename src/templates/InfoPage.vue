<template>
  <InfoLayout>
    <div class="post" v-html="$page.info.content"></div>
  </InfoLayout>
</template>

<page-query>
query InfoPage ($path: String!) {
  info: infoPage (path: $path) {
    path
    content
    title: headings (depth: h1) {
      value
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    const { title } = this.$page.info;

    return {
      title: title.length ? title[0].value : ""
    };
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        this.alignGridSomeImages();
      });
    }
  },
  methods: {
    alignGridSomeImages() {
      if (typeof window !== "undefined") {
        const images = document.querySelectorAll(".g-image");
        images.forEach(image => {
          image.parentNode.style.textAlign = "center";
        });
      }
    }
  },
  mounted() {
    this.alignGridSomeImages();
  }
};
</script>

