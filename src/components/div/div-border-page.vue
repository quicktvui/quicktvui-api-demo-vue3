<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-row class="qt-sdk-content-row-css">
      <div
        class="qt-view-focus-one"
        :focusable="true"
        :enableFocusBorder="false"
        :focusScale="1.1"
        @focus="onFocus"
      />
      <div
        class="qt-view-focus-two"
        :focusable="true"
        :enableFocusBorder="false"
        :focusScale="1.1"
        @focus="onFocus"
      />
    </qt-row>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '边框',
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
  border-color: blueviolet;
  border-width: 5px;
  border-radius: 40px;
  focus-border-width: 5px;
  focus-border-color: blue;
  focus-border-style: solid;
  focus-border-radius: 40px;
}

.qt-view-focus-two {
  width: 192px;
  height: 108px;
  background-color: red;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-color: purple;
  border-width: 2px;
  border-radius: 20px;
  focus-border-width: 5px;
  focus-border-radius: 40px;
  focus-border-color: blue;
  focus-border-style: solid;
}
</style>
