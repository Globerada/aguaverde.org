<template>
  <Section :dots="false" class="text-center section--background">
  <div class="container-md mb">
    
    <div class="home-title">
      <h1 class="home-title__top">Triatlón Aguaverde</h1>
      <transition name="rotate">
        <div v-if="currentText == 0" class="home-title__main gradient-text" key="0">
          Barato y cómodo
        </div>
        <div v-else-if="currentText == 1" key="1" class="home-title__main gradient-text">
          Sin compromisos
        </div>
        <div v-else-if="currentText == 2" key="2" class="home-title__main gradient-text">
          Todos los niveles
        </div>
        <div v-else-if="currentText == 3" key="3" class="home-title__main gradient-text">
          Grupo de chicas
        </div>
        <div v-else-if="currentText == 5" key="5" class="home-title__main gradient-text">
          Piscina
        </div>
        <div v-else-if="currentText == 4" key="4" class="home-title__main gradient-text">
         Entrenamientos
        </div>
      </transition>
    </div>

    <p class="home-intro container-sm">
      Descubre las ventajas de entrenar con nosotros
    </p>

    <g-link to="/info" class="button">
      Hazte socio
    </g-link>

    <a href="/foro" class="button plain">
      Foro
    </a>
  </div>

  </Section>
</template>

<script>
export default {
  data() {
    return {
      currentText: 0
    }
  },

  mounted () {
    this._counter = setInterval(() => {
      this.currentText = (this.currentText + 1) % 6
    }, 3500)
  },

  destroyed () {
    clearTimeout(this._counter)
  },
}
</script>

<style lang="scss">
.home-title {
  font-size: 2rem;
  font-weight: bold;
  &__top {
    font-size: 75%;
    margin-bottom: 0;
  }
  &__main {
    font-size: 130%;
  }
}

@media screen and (max-width: 650px) {
  .home-title__top {
    font-size: 55%;
  }
  .home-title__main {
    font-size: 70%;
  }
}


.home-intro {
  font-size: 130%;
}

.section--background {
    background-image: url(https://i.imgur.com/ahkxocT.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;  
}

</style>
