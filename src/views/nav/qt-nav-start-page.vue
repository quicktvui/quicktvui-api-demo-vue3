<template>
  <qt-view class="es-sdk-root-css">
    <qt-text class="es-sdk-content-title-css">起步</qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-row-css">
      <s-text-view text="Text"></s-text-view>
        <s-text-button text="按钮" @onButtonClicked="onButtonClicked"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "起步",
  setup() {
    function onButtonClicked() {
    }
    return {
      onButtonClicked,
    }
  },
});
</script>

<style scoped>

</style>
