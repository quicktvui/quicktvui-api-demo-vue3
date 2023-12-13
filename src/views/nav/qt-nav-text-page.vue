<template>
  <qt-view class="es-sdk-root-css">
    <qt-text class="es-sdk-content-title-css">QTText</qt-text>
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
import QTTextPageList from "../../components/qt-text";

export default defineComponent({
  name: 'QTText',
  setup() {
    const pageList = Object.keys(QTTextPageList).map(data => ({
      id: data,
      name: QTTextPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
