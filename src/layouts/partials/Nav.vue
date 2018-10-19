<template>
  <nav class="main-nav flex gap-15">

    <g-link to="/info">
      <span>Información</span>
    </g-link>

    <g-link to="/blog">
      <span>Blog</span>
    </g-link>
  </nav>
</template>

<style lang="scss">

  .main-nav svg {
      display: none;
  }

  @media screen and (max-width: 750px) {
    .main-nav {
      position: fixed;
      bottom:0;
      left:0;
      right:0;
      background: #FFF;
      margin-right:0!important;
      justify-content: center;
      box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
      min-height: 60px;
      flex-wrap: nowrap!important;
      padding: 0 var(--space);

      svg {
        display: block;
      }

    }
  }
</style>
