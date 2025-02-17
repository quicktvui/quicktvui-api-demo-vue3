<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-row class="qt-sdk-content-row-css">
      <qt-view class="qt-view-background-css">
        <qt-image class="qt-view-background-img-css"
                  src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"/>
        <qt-text class="qt-view-background-text-css" text="文字文字文字文字文字"></qt-text>
      </qt-view>
    </qt-row>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core'

export default defineComponent({
  name: '背景图片',
})
</script>

<style>
.qt-view-background-css {
  width: 192px;
  height: 108px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.qt-view-background-img-css {
  width: 192px;
  height: 108px;
  position: absolute;
}

.qt-view-background-text-css {
  width: 192px;
  height: 108px;
  color: red;
}
</style>
