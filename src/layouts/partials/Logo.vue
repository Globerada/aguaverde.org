<template>
  <g-link class="logo" to="/" title="Inicio">
    <AguaverdeLogo alt="Aguaverde.org" />
  </g-link>
</template>

<script>
import AguaverdeLogo from '@/components/logos/aguaverde'
export default {
  components: {
    AguaverdeLogo
  }
}
</script>

<style lang="scss">
 .logo {
  margin-top: 4px;
  
  &:hover {
 		opacity: .8;
 	}
 }
</style>
