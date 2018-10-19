<template>
  <Layout>
    <home-intro />
    <home-sponsors />
    <home-testimonials />
    <home-features />
    <home-carousel />
    <home-how-it-works />   
    <home-blog />
  </Layout>
</template>

<script>

import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeHowItWorks from '@/components/home/HomeHowItWorks.vue'
import HomeSponsors from '@/components/home/HomeSponsors'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import HomeCarousel from '@/components/home/HomeCarousel'


export default {
  components: {
    HomeIntro,
    HomeFeatures,
    HomeBlog,
    HomeHowItWorks,
    HomeSponsors,
    HomeTestimonials,
    HomeCarousel
  },


  metaInfo: {
    title: 'Club Triatlón Aguaverde - Madrid',
    titleTemplate: '%s',
    meta: [
      {
        name: 'description',
        content: 'El club de triatlón con más buen rollo de toda España ✅ Entrenamientos triatlón Madrid. Haz clic aquí para...'
      }
    ]
  }
}
</script>
