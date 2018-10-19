<template>
  <Section dots="true" dark="true" class="post">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Amplia experiencia</h3>
        <p>El club fue creado en 2004 y en su mayoría está gestionado y organizado a través de internet. 
          Aunque la mayor parte de nuestros socios están en <strong>Madrid</strong>, siempre podrás unirte a nosotros independientemente de donde seas.
        </p>
      </Feature>

       <Feature>
        <h3>En toda la geografía</h3>
        <p>
          Participamos en competiciones a lo largo de toda la geografía española e incluso más allá de nuestras fronteras en toda clase de pruebas
        </p>
      </Feature>

      <Feature>
        <h3>Todas las disciplinas</h3>
        <p>Desde triatlones sprint hasta IronMan, pasando por duatlones, competiciones de atletismo, travesías de natación o marchas cicloturistas. Será rara la prueba en la que no veas a algún aguaverde en la línea de salida.
        </p>     
      </Feature>


      <Feature>
        <h3>Natación en pleno centro</h3>
        <p>Nadamos juntos los socios que estamos integrados en el grupo de piscina. En pleno centro de Madrid, disfrutarás del medio acuático en compañía
        </p>     
      </Feature>


      <Feature>
        <h3>Entrenadores cualificados</h3>
        <p>En el Aguaverde únicamente contamos con entrenadores de alto prestigio nacional y con titulaciones requeridas por la Federación Española de Triatlón
        </p>
      </Feature>



      <Feature>
        <h3>Cuota mínima</h3>
        <p>No somos un club que venda servicios a los socios. Sólo ofrecemos los servicios propios de un entrenamiento al mejor precio posible y sin ánimo de lucro 
        </p>     
      </Feature>
    </div>
  </Section>
</template>

<script>
export default {
  props: ['icon', 'gradient'],
  computed: {
    iconClasses() {
      let classes = []
      if(this.gradient) classes.push('gradint-' + this.gradient)
      return classes
    }
  }
}
</script>
