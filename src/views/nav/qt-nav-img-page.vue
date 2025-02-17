<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="img"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`img/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTImgPageList from "../../components/img";

export default defineComponent({
  name: 'img',
  setup() {
    const pageList = Object.keys(QTImgPageList).map(data => ({
      id: data,
      name: QTImgPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
