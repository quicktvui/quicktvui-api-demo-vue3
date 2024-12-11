<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="快应用路由"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in routeESPageList" :key="item.id"
          :text="item.name"
          :url="`router/${item.id}`"/>
      </div>
      <s-text-view text="原生路由"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in nativeRoutePageList" :key="item.id"
          :text="item.name"
          :url="`router/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";
import ESRouterESList from "../../components/es-router/es/";
import ESNativeRouterPageList from "../../components/es-router/native";

export default defineComponent({
  name: '页面路由',
  setup() {
    const routeESPageList = Object.keys(ESRouterESList).map(data => ({
      id: data,
      name: ESRouterESList[data].name,
    }))
    const nativeRoutePageList = Object.keys(ESNativeRouterPageList).map(data => ({
      id: data,
      name: ESNativeRouterPageList[data].name,
    }))

    return {
      routeESPageList,
      nativeRoutePageList
    }
  },
});

</script>
<style>
</style>
