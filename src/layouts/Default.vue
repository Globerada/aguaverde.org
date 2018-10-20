<template>
  <div id="app">
    <Header />
    <main>
      <slot />
    </main>
    <contact-modal />
    <Footer v-if="footer !== false" />
  </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'
import ContactModal from '@/components/modals/ContactModal'

export default {
  props: ['footer'],
  components: {
    Header,
    Footer,
    ContactModal
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
}
</style>
