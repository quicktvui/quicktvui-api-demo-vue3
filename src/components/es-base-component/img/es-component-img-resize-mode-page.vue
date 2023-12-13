<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-column-css">
        <s-text-view-view text="Contain"></s-text-view-view>
        <img
          src="https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/10/15/c342d266-1085-4ec4-8f24-db4571af16b3.png"
          class="image contain"/>
      </div>
      <div class="es-sdk-content-column-css">
        <s-text-view-view text="Cover"></s-text-view-view>
        <img
          src="https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/10/15/c342d266-1085-4ec4-8f24-db4571af16b3.png"
          class="image cover"/>
      </div>
      <div class="es-sdk-content-column-css">
        <s-text-view-view text="Center"></s-text-view-view>
        <img
          src="https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2022/10/15/c342d266-1085-4ec4-8f24-db4571af16b3.png"
          class="image center"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'resize-mode',
  setup() {
    return {}
  },
});

</script>

<style scope>

.image {
  width: 300px;
  height: 180px;
  margin: 30px;
  border-width: 1px;
  border-color: #40b883;
}

.contain {
  resize-mode: contain;
}

.cover {
  resize-mode: cover;
}

.center {
  resize-mode: center;
}
</style>
