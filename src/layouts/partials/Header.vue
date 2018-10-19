<template>
  <header class="flex gap-30 container-full">
    <Logo />

    <Nav class="flex-fit" />
    
    <nav class="header-actions flex">



    </nav>

  
  </header>
</template>

<script>
import Logo from './Logo'
import Nav from './Nav'

export default {
  components: {
    Logo,
    Nav,
  }
}
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top:0;
  min-height: var(--header-height);
  background-color: #FFF;
  border-bottom: 1px solid transparent;
  flex-wrap: nowrap;
  
  .has-sidebar & {
    max-width: 100%;
    border-bottom: 1px solid var(--border-color);
    position: fixed;
    top:0;
  }
}


@media screen and (max-width: 750px) {
  header {
    box-shadow: 0 0 10px 0 rgba(0,0,0,.15);
    .logo {
      margin-right: 0;
    }
  }
  .header-actions {
    margin-left: auto!important;
    font-size: .9rem;
  }
}
</style>
