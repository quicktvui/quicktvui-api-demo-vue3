<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <img
          :src="require('../../../assets/ad.jpg')"
          class="es-sdk-img-assets-css"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '本地图片',
  setup() {
    return {}
  },
});

</script>

<style scope>

.es-sdk-img-assets-css {
  width: 768px;
  height: 432px;
}
</style>
