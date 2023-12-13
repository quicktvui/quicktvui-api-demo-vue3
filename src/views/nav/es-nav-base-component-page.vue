<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESBaseComponentList from "../../components/es-base-component";

export default defineComponent({
  name: '基础组件',
  setup() {
    const pageList = Object.keys(ESBaseComponentList).map(data => ({
      id: data,
      name: ESBaseComponentList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
