<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <surface-view class="es-sdk-surface-view-css">
        <div class="es-sdk-surface-inner-view-css"/>
      </surface-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '使用初探',
  setup() {
    return {}
  },
});

</script>

<style>
.es-sdk-surface-view-css {
  width: 800px;
  height: 800px;
  background-color: palevioletred;
}

.es-sdk-surface-inner-view-css {
  width: 400px;
  height: 400px;
  background-color: red;
}
</style>
