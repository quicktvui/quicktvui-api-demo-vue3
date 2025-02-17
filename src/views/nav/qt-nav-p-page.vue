<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="p"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`p/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTPPageList from "../../components/p";

export default defineComponent({
  name: 'p',
  setup() {
    const pageList = Object.keys(QTPPageList).map(data => ({
      id: data,
      name: QTPPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
