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
        @click="onClick"
      />
      <div
        class="qt-view-focus-two"
        :focusable="true"
        :enableFocusBorder="true"
        :focusScale="1.1"
        @focus="onFocus"
        @click="onClick"
      />
    </qt-row>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useESToast } from '@extscreen/es3-core'

export default defineComponent({
  name: '点击事件',
  setup() {
    const toast = useESToast()
    const onFocus = (e) => {
      const focused = e.isFocused
    }
    const onClick = (e) => {
      toast.showToast('点击了~')
    }
    return {
      onFocus,
      onClick,
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
}

.qt-view-focus-two {
  width: 192px;
  height: 108px;
  background-color: red;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>
