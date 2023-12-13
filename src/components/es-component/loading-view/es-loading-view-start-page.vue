<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <loading-view class="es-sdk-loading-view-css"/>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '使用初探',
  setup() {
    return {}
  },
});

</script>

<style>
.es-sdk-loading-view-css {
  width: 200px;
  height: 200px;
  background-color: #40b883;
}
</style>
