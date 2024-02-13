<template>
  <div class="es-sdk-root-css" autoFocus="autoFocus">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="div中的autofocus应用"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, index) in pageList" :key="item.id"
          :text="item.name"
          :autofocus="index === 0"
          :url="`${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import ESFocusPageList from "../../components/es-focus/";

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '页面路由',
  setup() {
    const pageList = Object.keys(ESFocusPageList).map(data => ({
      id: data,
      name: ESFocusPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
