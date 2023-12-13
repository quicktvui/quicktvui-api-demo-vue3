<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`component/surface/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import ESSurfaceViewComponentList from "./index";

export default defineComponent({
  name: 'surface-view',
  setup() {
    const pageList = Object.keys(ESSurfaceViewComponentList).map(data => ({
      id: data,
      name: ESSurfaceViewComponentList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
