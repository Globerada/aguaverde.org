<template>
  <Section dots="true">
      <h2 class="text-center">
        ¿Qué te aporta el Aguaverde?
      </h2>


      <div class="source-animation flex flex--align-equal flex--space-between">
          <div class="well">
              <div class="well__title">Entrenamientos</div>
              <h4>Natación</h4>
              <p>Entrenamientos presenciales en pleno centro de Madrid</p>

              <h4>Ciclismo</h4>
              <p>Multitud de salidas entre socios de forma semanal</p>

              <h4>Running</h4>
              <p>Entrenamientos presenciales en el Retiro con un grupo de diversos niveles</p>
          </div>
          <div class="dots hide-for-small">
              <svg  width="100%" height="20" viewBox="0 0 60 20" class="dot">
                <path d="M1 9.5H99" />
              </svg>
          </div>

          <div class="dots-vertical show-for-small">
              <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot">
                <path d="M0.5 0L0.500002 37"/>
              </svg>
          </div>

          <div class="well" style="min-height: 400px">
              <div class="well__title">Club</div>
              <div class="layers">
                <div class="layer layer__graphql text-center">
                  <div class="text-wrapper">
                    <div class="text">
                      <eusebia style="color:#fff;" /><br/>
                      Triatlón <br>Aguaverde
                    </div>
                  </div>
                </div>
                <div class="layer layer__vue">
                  <div class="text-wrapper">
                    <div class="text text-center">
                        <strong>Natación</strong><br/>
                        Ciclismo<br/>
                        Carrera a pie<br/>
                    </div>
                 </div>
                 <div class="dots-bg"></div>
                </div>
              </div>
          </div>
          <div class="dots hide-for-small">
             <svg  width="100%" height="20" viewBox="0 0 60 20" class="dot dot--after">
                <path d="M1 9.5H99" />
              </svg>
          </div>

          <div class="dots-vertical show-for-small">
              <svg  width="100%" height="37" viewBox="0 0 1 37" class="dot dot--after">
                <path d="M0.5 0L0.500002 37"/>
              </svg>
          </div>


          <div class="well">
              <div class="well__title">Se traduce en</div>
                <h4>Amigos</h4>
              <p>
                Conocerás a multitud de gente con tus mismas aficiones
              </p>    

              <h4>Salud</h4>
              <p>
                Mejorarás tu salud haciendo un deporte muy completo
              </p>
              <h4>Satisfacción</h4>
              <p>
                Conseguirás las metas que te propones en un ambiente saludable
              </p>              
          </div>
      </div>
  </Section>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped="scoped">

.source-animation {
  overflow: hidden;
  padding-top: 15px
}

.well {
  border: 3px solid var(--primary-bg);
  border-radius: 10px;
  background-color: rgba(255,255,255,.7);
  width: 100%;
  padding: var(--space-x2);
  position: relative;
  flex:1;
  min-width: 280px;
  margin-bottom: var(--space-x2);


  h4{
    margin-bottom: .5rem;
  }

  &__title {
    position: absolute;
    top:-19px;
    left:50%;
    transform: translateX(-50%);
    background: var(--primary-bg);
    padding: 4px 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .or {
    text-transform: uppercase;
    font-size: .8rem;
    margin-top: -1rem;
    margin-bottom: 1rem;
    opacity: .5;
  }
}

.layers {
  position: absolute;
  max-width: 290px;

  width: 85%;
  top: 50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%) rotateX(55deg);


}

.dots {
  width: 50px;
  position: relative;
}

.dots-vertical {
  height: 50px;
  width: 100%;
  text-align: center;
  margin-top: -40px;

  .dot {
    height: 100%;
  }
}

.dot {
  stroke: #E535AB;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-dasharray: 0 20;
  animation: stroke 400ms linear infinite;
  &--after {
    stroke: var(--primary-color);
  }
}

.dots .dot {
  position: absolute;
  top: 42%;
}

.layer {
  color:#FFF;
  border-radius: 10px;
  padding-top: 100%;
  width: 100%;
  transform: rotate(-45deg);

  &__graphql {
    background: linear-gradient(-80deg, #E535AB 0%, rgba(229, 53, 171, 0.49) 100%);
    animation: pulseAlt 2s infinite;
    position: relative;
    padding-top: 80%;
    width: 80%;
    margin-left: 10%;
    z-index: 10;
    margin-bottom: -5%;
  }

  &__vue {
    background: linear-gradient(180deg, #4DBA87 0%, #8FD46A 100%);
    position: relative;
    animation: pulse 2s infinite;
    animation-delay: .3s;

    .dots-bg {
      position: absolute;
      top: 20px;
      left:20px;
      right:20px;
      bottom:20px;
    }
  }

  .text {
    position: absolute;
    font-weight: 600;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 1.4rem;
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
  }

}
</style>
