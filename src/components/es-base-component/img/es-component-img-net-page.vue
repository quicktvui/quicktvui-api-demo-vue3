<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <img
          src="https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/10/15/c342d266-1085-4ec4-8f24-db4571af16b3.png"
          class="es-sdk-img-net-css"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '网络图片',
  setup() {
    return {}
  },
});

</script>
<style scope>

.es-sdk-img-net-css {
  width: 300px;
  height: 180px;
}
</style>
