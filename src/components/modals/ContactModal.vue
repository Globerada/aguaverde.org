<template>
  <div>
    <AppModal name="contact">
      <template slot="body" slot-scope="{ params }">
        <div class="container-md mb">
          <div class="home-title">
              <span class="home-title__top">Contacta con</span>
              <div class="home-title__main gradient-text">
                Aguaverde
              </div>
          </div>
          <p class="home-intro container-sm">Escríbenos a <a target="_blank" href="mailto:triatlon@aguaverde.org">triatlon@aguaverde.org</a></p>      
          <p class="home-intro container-sm">O manda un WhatsApp al 
            <a target="_blank" href="https://api.whatsapp.com/send?phone=34696923004&text=Hola%20quiero%20info%20Aguaverde">696 923 004</a></p>      
        </div>
      </template>
    </AppModal>
  </div>
</template>

<script>
import AppModal from '../AppModal'
export default {
  data () {
    return {
      social: [        
      ]
    }
  },
  components: {
    AppModal
  },
  methods: {
    signIn () {
      this.$modal.hide('signin')
    }
  }
}
</script>

<style>

</style>
