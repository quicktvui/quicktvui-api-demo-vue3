<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTGradient"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`gradient/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTGradientPageList from "../../components/qt-gradient";

export default defineComponent({
  name: 'QTGradient',
  setup() {
    const pageList = Object.keys(QTGradientPageList).map(data => ({
      id: data,
      name: QTGradientPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
