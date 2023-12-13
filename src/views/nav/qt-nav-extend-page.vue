<template>
  <qt-view class="es-sdk-root-css">
    <qt-text class="es-sdk-content-title-css">Extend</qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`extend/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import ExtendPageList from "../../components/extend";

export default defineComponent({
  name: 'Extend',
  setup() {
    const pageList = Object.keys(ExtendPageList).map(data => ({
      id: data,
      name: ExtendPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
