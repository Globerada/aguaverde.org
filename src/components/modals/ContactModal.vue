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
          <p class="home-intro container-sm">Escríbenos a <a target="_blank" :href="mailHref()">{{ mail }}</a></p>      
          <p class="home-intro container-sm">O manda un WhatsApp al 
            <a target="_blank" :href="whatsAppLink('Quiero info del Aguaverde')">{{ beautifulPhone(phone) }}</a>
          </p>      
        </div>
        <hr/>
        <h3>Deja un comentario</h3>
        <vue-disqus
          title="Contacto"
          shortname="aguaverde"
          identifier="modal-contact"
        /> 
      </template>
    </AppModal>
  </div>
</template>

<script>
import AppModal from "../AppModal";
import contact from "@/data/contact-aguaverde.yaml";

export default {
  data() {
    return {
      phone: "",
      mail: ""
    };
  },
  components: {
    AppModal
  },
  methods: {
    whatsAppLink(subject) {
      return `https://api.whatsapp.com/send?phone=34${
        this.phone
      }&text=${encodeURI(subject)}`;
    },
    beautifulPhone(phone) {
      return phone.toString().replace(/(.{3})/g, "$1 ");
    },
    mailHref() {
      return `mailto:${this.mail}`;
    }
  },
  mounted() {
    this.phone = contact.phone;
    this.mail = contact.mail;
  }
};
</script>

<style>
</style>
