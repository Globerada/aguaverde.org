<template>
  <Section :dots="false" primary="true" style="padding-bottom: 0px;">
    <div class="container text-center">      
      <h2>¡Mira qué bien nos lo pasamos!</h2>
      <div v-if="showCarousel">
        <Carousel 
          :per-page="1"
          :min-swipe-distance="48"
          :pagination-enabled="true"
          :pagination-padding="5"
          pagination-active-color="#f8188e"
          pagination-color="#c9c9c9"
          :pagination-size="8"
          :navigation-enabled="false"
          ref="carousel"
        >
          <!-- TODO. Refactor slides when gridsome supports <g-image> with dynamic src https://gridsome.org/docs/image -->
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/1.jpg" /></Slide>
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/2.jpg" /></Slide>
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/3.jpg" /></Slide>
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/4.jpg" /></Slide>
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/5.jpg" /></Slide>
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/6.jpg" /></Slide>
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/7.jpg" /></Slide>
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/8.jpg" /></Slide>
          <Slide><g-image @click="modalImage" width="760" src="~/assets/images/carousel/9.jpg" /></Slide>
        </Carousel>
      </div>
    </div>    
  </Section>
</template>

<script>

export default {
  components: {    
    Carousel: () => import('vue-carousel').then(({ Carousel }) => Carousel),
    Slide: () => import('vue-carousel').then(({ Slide }) => Slide)
  },
  data() {
    return {
      showCarousel : false
    }
  },
  methods: {
    modalImage(e) {
      this.$modal.show('image', {image: e.target.src})
    }
  },
  mounted() {
    this.showCarousel = true   
  }
}

</script>


<style lang="scss">
.VueCarousel {
  img {
    border-radius: 10px;
    margin-bottom: 0;
    /* box-shadow: 2px 8px 5px 5px rgba(0, 0, 0, 0.2); */
  }
}
</style>
