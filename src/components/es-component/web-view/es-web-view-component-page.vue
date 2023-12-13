<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <es-web-view-component
        ref="webview"
        @on-page-started="onPageStarted"
        class="es-sdk-web-view-css"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {ESIWebView} from "@extscreen/es3-component";

export default defineComponent({
  name: 'es-web-view-component-sample',
  setup() {
    const webview = ref<ESIWebView>()

    function onPageStarted(url) {
    }

    function onESCreate(params) {
      webview.value?.loadUrl('https://juejin.cn')
    }

    return {
      webview,
      onESCreate,
      onPageStarted
    }
  },
});

</script>

<style>
.es-sdk-web-view-css {
  width: 1920px;
  height: 1080px;
}
</style>
