<template>
  <qt-view class="es-sdk-root-css">
    <qt-waterfall
      ref="waterfallRef"
      class="es-sdk-qt-waterfall-css"
      @onItemClick="onItemClick">
      <template v-slot:item>
        <nav-button-item :type="1"/>
      </template>
    </qt-waterfall>
    <qt-text class="es-sdk-index-content-title-css">QuickTVUI API演示项目</qt-text>
    <qt-view class="es-sdk-index-content-divider-css"/>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {QTIWaterfall, QTWaterfallItem} from "@quicktvui/quicktvui3";
import {ref} from "vue";
import {buildNavSectionList, buildNavWaterfall} from "../nav/NavDataAdapter";
import nav_button_item from './nav-button-item.vue'
import {useESLog} from "@extscreen/es3-core";
import {useESRouter} from "@extscreen/es3-router";

const TAG = 'index'
export default defineComponent({
  name: 'index',
  components: {
    'nav-button-item': nav_button_item
  },
  setup(props, context) {
    const waterfallRef = ref<QTIWaterfall>()
    const log = useESLog()
    const router = useESRouter()

    function onESCreate() {
      waterfallRef.value?.init(buildNavWaterfall())
      waterfallRef.value?.setSectionList(buildNavSectionList())
    }

    function onItemClick(sectionIndex: number, position: number, item: QTWaterfallItem) {
      log.d(TAG, '-------onItemClick-------->>>>' +
        " sectionIndex:" + sectionIndex +
        " position:" + position +
        " item:", item
      )
      router.push({
        name: item._id,
        params: {}
      })
    }

    return {
      waterfallRef,
      onESCreate,
      onItemClick
    }
  },
});
</script>

<style>
.es-sdk-qt-waterfall-css {
  width: 1920px;
  height: 1080px;
  position: absolute;
}

.es-sdk-index-content-title-css {
  width: 1920px;
  color: white;
  height: 80px;
  font-size: 40px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 25px;
  background-color: #26292F;
}

.es-sdk-index-content-divider-css {
  width: 1920px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;
}
</style>

