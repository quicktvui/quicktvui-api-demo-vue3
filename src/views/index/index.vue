<template>
  <qt-view class="es-sdk-root-css">
    <qt-text class="es-sdk-content-title-css">QuickTVUI 3.x API演示项目</qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-waterfall
      ref="waterfallRef"
      class="qt-waterfall-css">
      <template v-slot:item>
        <nav-button-item :type="1"/>
      </template>
    </qt-waterfall>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {QTIWaterfall} from "@quicktvui/quicktvui3";
import {ref} from "vue";
import {buildNavSectionList, buildNavWaterfall} from "../nav/NavDataAdapter";
import nav_button_item from './nav-button-item.vue'

export default defineComponent({
  name: 'index',
  components: {
    'nav-button-item': nav_button_item
  },
  setup(props, context) {
    const waterfallRef = ref<QTIWaterfall>()

    function onESCreate() {
      waterfallRef.value?.init(buildNavWaterfall())
      waterfallRef.value?.setSectionList(buildNavSectionList())
    }

    return {
      waterfallRef,
      onESCreate
    }
  },
});
</script>

<style>
.qt-waterfall-css {
  width: 1920px;
  height: 850px;
}
</style>

