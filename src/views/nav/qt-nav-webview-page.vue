<template>
  <qt-view class="es-sdk-root-css">
    <qt-text class="es-sdk-content-title-css">QTWebView</qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTWebViewComponentList from "../../components/qt-web-view";

export default defineComponent({
  name: 'QTWebView',
  setup() {
    const pageList = Object.keys(QTWebViewComponentList).map(data => ({
      id: data,
      name: QTWebViewComponentList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
