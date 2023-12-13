<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <text-view text="文字文字文字文字文字文字文字文字文字文字" class="es-sdk-text-view-css"/>
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
.es-sdk-text-view-css {
  width: 200px;
  height: 200px;
}
</style>
