<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`component/chart/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESChartComponentList from "./index";

export default defineComponent({
  name: 'loading-view',
  setup() {
    const pageList = Object.keys(ESChartComponentList).map(data => ({
      id: data,
      name: ESChartComponentList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
