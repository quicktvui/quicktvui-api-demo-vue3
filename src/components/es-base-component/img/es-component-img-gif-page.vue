<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <img
          src="https://qcloudimg-moss.cp47.ott.cibntv.net/data_center/files/2023/08/10/a866621c-f5c8-40b4-9744-0d47419c4f3f.jpg"
          class="es-sdk-img-gif-css"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'GIF',
  setup() {
    return {}
  },
});

</script>

<style scope>

.es-sdk-img-gif-css {
  width: 100px;
  height: 100px;
}
</style>
