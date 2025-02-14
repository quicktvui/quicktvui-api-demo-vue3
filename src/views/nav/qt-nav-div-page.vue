<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="div"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`div/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTDivPageList from "../../components/div";

export default defineComponent({
  name: 'div',
  setup() {
    const pageList = Object.keys(QTDivPageList).map(data => ({
      id: data,
      name: QTDivPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
