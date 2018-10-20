<template>
  <Section :dots="false" primary="true" style="padding-bottom: 0px;">
    <div class="container text-center">      
      <h2>¡Mira qué bien nos lo pasamos!</h2>
      <div v-if="showCarousel">
        <Carousel 
          :per-page="1"
          :min-swipe-distance="48"
          :pagination-enabled="true"
          :pagination-padding="12"
          pagination-active-color="#f8188e"
          pagination-color="#c9c9c9"
          :pagination-size="8"
          :navigation-enabled="true"
          ref="carousel"
        >
          <Slide><g-image width="760" src="~/assets/images/carousel/1.jpg" /></Slide>
          <Slide><g-image width="760" src="~/assets/images/carousel/2.jpg" /></Slide>
          <Slide><g-image width="760" src="~/assets/images/carousel/3.jpg" /></Slide>
          <Slide><g-image width="760" src="~/assets/images/carousel/4.jpg" /></Slide>
          <Slide><g-image width="760" src="~/assets/images/carousel/5.jpg" /></Slide>
          <Slide><g-image width="760" src="~/assets/images/carousel/6.jpg" /></Slide>
          <Slide><g-image width="760" src="~/assets/images/carousel/7.jpg" /></Slide>
          <Slide><g-image width="760" src="~/assets/images/carousel/8.jpg" /></Slide>
          <Slide><g-image width="760" src="~/assets/images/carousel/9.jpg" /></Slide>
        </Carousel>
      </div>
    </div>
  </Section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      showCarousel : false
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
    box-shadow: 2px 8px 5px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
