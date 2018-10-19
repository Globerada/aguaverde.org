<template>
  <Layout class="has-sidebar" :footer="false">
    <div class="flex gap-60 flex-align-top">
      <div class="sidebar dots-bg">
        
        <!-- <input type="search" placeholder="Search docs..." /> -->

        <div v-for="group in links" :key="group.title">
          <h3>{{ group.title }}</h3>
          <p v-for="item in group.items" :key="item.title">
            <g-link :to="item.link">
              {{ item.title }}
            </g-link>
          </p>
        </div>

      </div>
      <Section class="flex-fit" container="md">
        <slot />
      </Section>
    </div>
  </Layout>
</template>


<script>
import links from '@/data/doc-links.yaml'

export default {
  computed: {
    links () {
      return links
    }
  }
}
</script>
