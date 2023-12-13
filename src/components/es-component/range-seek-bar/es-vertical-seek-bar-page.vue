<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <es-vertical-seek-bar
        ref="seek_bar"
        class="es-vertical-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {ESIVerticalSeekBar} from "@extscreen/es3-component";

export default defineComponent({
  name: '竖向',
  setup() {

    const seek_bar = ref<ESIVerticalSeekBar>()

    function onESCreate(params) {
      initESSeekBar();
    }

    function initESSeekBar() {
      seek_bar.value?.setSeekBarMode(1);
      seek_bar.value?.setProgressHeight(20);
      seek_bar.value?.setGravity(2);
      seek_bar.value?.setProgressRadius(10);
      seek_bar.value?.setProgress(40);

      seek_bar.value?.setProgressColor(0xFFFF2222);
      seek_bar.value?.setProgressDefaultColor(0xFFFF00FF);

      seek_bar.value?.setThumbWidth(40);
      seek_bar.value?.setThumbHeight(40);
      //
      seek_bar.value?.setThumbActivate(true);
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar.value?.setThumbDrawable(thumbDrawable);
      seek_bar.value?.setOrientation(2);
    }

    return {
      seek_bar,
      onESCreate,
      initESSeekBar
    }
  },
});

</script>

<style>

</style>
