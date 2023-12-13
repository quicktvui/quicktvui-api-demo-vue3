<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div :enableFocusBorder="true" :focusable="true"
           style="width: 300px;height: 200px; background-color: transparent "
           :gradientBackground="gradientBackground">
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'GradientBackground',
  setup() {
    let gradientBackground = {
      type: 0,
      shape: 0,
      colors: ['#40b883', '#4068b8'],
      cornerRadii4: [0, 5, 20, 0],
    }
    return {
      gradientBackground
    }
  },
});

</script>

<style>
</style>
