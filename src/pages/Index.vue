<template>
  <Layout>
    <home-intro />
    <home-sponsors />
    <home-testimonials />
    <home-features />
    <home-carousel />
    <home-how-it-works />   
    <home-blog />
    <image-modal />    
  </Layout>
</template>

<script>
import HomeIntro from "@/components/home/HomeIntro.vue";
import HomeFeatures from "@/components/home/HomeFeatures.vue";
import HomeBlog from "@/components/home/HomeBlog.vue";
import HomeHowItWorks from "@/components/home/HomeHowItWorks.vue";
import HomeSponsors from "@/components/home/HomeSponsors";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeCarousel from "@/components/home/HomeCarousel";
import ImageModal from "@/components/modals/ImageModal";

export default {
  components: {
    HomeIntro,
    HomeFeatures,
    HomeBlog,
    HomeHowItWorks,
    HomeSponsors,
    HomeTestimonials,
    HomeCarousel,
    ImageModal
  },
  metaInfo: {
    title: "Club Triatlón Aguaverde - Madrid",
    titleTemplate: "%s",
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "description",
        content:
          "El club de triatlón con más buen rollo de toda España ✅ Entrenamientos triatlón Madrid. Haz clic aquí para..."
      },
      {
        property: "og:title",
        content: "Club Triatlón Aguaverde"
      },
      {
        property: "og:site_name",
        content: "Club Triatlón Aguaverde"
      },
      {
        property: "og:image",
        content: require("~/assets/images/eusebia.png")
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "http://www.aguaverde.org"
      },
      {
        property: "og:locale",
        content: "es_ES"
      },
      {
        property: "og:description",
        content:
          "El club de triatlón con más buen rollo de toda España ✅ Entrenamientos triatlón Madrid. Haz clic aquí para..."
      },
      {
        name: "twitter:card",
        content: "summary"
      },
      {
        name: "twitter:site",
        content: "@triaguaverde"
      },
      {
        name: "twitter:title",
        content: "Club Triatlón Aguaverde"
      },
      {
        name: "twitter:creator",
        content: "@triaguaverde"
      }
    ]
  }
};
</script>
