<template>
  <div>
    <AppModal name="image" :image="true" :preventBackgroundScrolling="false">
      <template slot="body" slot-scope="{ params }">
        <img :src="params.image" />
      </template>
    </AppModal>
  </div>
</template>

<script>
import AppModal from "../AppModal";
export default {
  components: {
    AppModal
  }
};
</script>

<style lang="scss">
</style>
