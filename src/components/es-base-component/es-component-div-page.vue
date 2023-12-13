<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-view text="Text"></s-text-view>
      <s-text-button text="按钮" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'div',
  setup() {
    return {}
  },
});

</script>

<style>
</style>
