<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="打开ES页面"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in routeESPageList" :key="item.id"
          :text="item.name"
          :url="`${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import ESRouterESList from "../../components/es-router/es/";

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '页面路由',
  setup() {
    const routeESPageList = Object.keys(ESRouterESList).map(data => ({
      id: data,
      name: ESRouterESList[data].name,
    }))

    return {
      routeESPageList
    }
  },
});

</script>
<style>
</style>
