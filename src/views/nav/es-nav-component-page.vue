<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`component/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESComponentPageList from "../../components/es-component";

export default defineComponent({
  name: '组件',
  setup() {
    const pageList = Object.keys(ESComponentPageList).map(data => ({
      id: data,
      name: ESComponentPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
