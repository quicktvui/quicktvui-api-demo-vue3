<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-row class="qt-sdk-content-row-css">
      <div
        class="qt-view-focus-one"
        :focusable="true"
        :enableFocusBorder="true"
        :focusScale="1.1"
        @focus="onFocus"
      />
      <div
        class="qt-view-focus-two"
        :focusable="true"
        :enableFocusBorder="true"
        :focusScale="1.1"
        @focus="onFocus"
      />
    </qt-row>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '焦点背景色',
  setup() {
    const onFocus = (e) => {
      //
    }
    return {
      onFocus,
    }
  },
})
</script>

<style>
.qt-view-focus-one {
  width: 192px;
  height: 108px;
  background-color: darkgoldenrod;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  focus-background-color: #40b883;
}

.qt-view-focus-two {
  width: 192px;
  height: 108px;
  background-color: red;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  focus-background-color: #40b883;
}
</style>
