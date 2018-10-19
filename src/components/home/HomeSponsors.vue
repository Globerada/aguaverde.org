<template>
  <div id="sponsors">
    <div class="inner">
      <h3>Patrocinadores</h3>
        <a v-for="sponsor in sponsors" :key="sponsor.name" :href="campaignUrl(sponsor.url)" target="_blank" style="width: 160px;">
          <img :src="sponsor.logo" :alt="sponsor.name">
        </a>        
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        {
          name: 'Globerada',
          url: 'https://www.globerada.com/',
          logo: 'https://i.imgur.com/3jOgoNv.png'
        },        
        {
          name: 'Althea Fisioterapia',
          url: 'https://altheafisioterapia.com/',
          logo: 'https://i.imgur.com/tvp5GWi.png'
        },       
        {
          name: 'Neovantas',
          url: 'http://www.neovantas.com/home/',
          logo: 'https://i.imgur.com/cjLSUBX.png'
        },                
      ]
    }
  },
  methods: {
    campaignUrl(url) {
      return url + '?utm_source=aguaverde.org&utm_medium=web&utm_campaign=sponsor'
    }
  }
}
</script>

<style lang="scss">
#sponsors {
  text-align: center;
  padding: 35px 40px 45px;
  background-color: #f6f6f6;
}

#sponsors
  .inner {
    max-width: 700px;
    margin: 0px auto;
}

#sponsors a {
    margin: 20px 15px 0;
    position: relative;
}

#sponsors 
  img {
    transition: all 0.3s ease;
    filter: grayscale(100%);
    opacity: 0.66;
    width: 100px;
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    height: 50px;
    &:hover {
      filter: none;
      opacity: 1;      
    }
  }

</style>
