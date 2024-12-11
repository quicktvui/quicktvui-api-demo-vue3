<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`lifecycle/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESPageLifecycleList from "../../components/es-lifecycle/index.js";

export default defineComponent({
  name: '页面生命周期',
  setup() {
    const pageList = Object.keys(ESPageLifecycleList).map(data => ({
      id: data,
      name: ESPageLifecycleList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
