<template>
  <qt-view class="es-sdk-root-css">
    <qt-text class="es-sdk-content-title-css"> seek-bar </qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <qt-text>{{ seekBarStatus }}</qt-text>
        <qt-text>{{  progress + ''}}</qt-text>
      </qt-view>
      <!-- <s-text-button text="按钮"/> -->
      <es-seek-bar
        ref="seek_bar"
        :focusable="true"
        :cornerRadius="8"
        :backgroundColor="backgroundColors"
        :color="color"
        :onProgressChanged="onProgressChanged"
        @onSeekStop="onSeekStop"
        @onSeekStart="onSeekStart"
        class="es-seek-bar-css-css"/>
      <!-- <s-text-button text="按钮"/> -->
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {ESKeyCode, ESKeyEvent} from "@extscreen/es3-core";

export default defineComponent({
  name: 'seek-bar使用初探',
  setup() {
    const seek_bar = ref()
    const backgroundColors = ref('#0415B1')
    const color = ref({
      startColor: '#1FD900',
      endColor: '#30000C',
      type: 0,
      shape: 0,
      cornerRadii4: [20, 20, 20, 20],
    })

    const duration = ref(100)
    const progress = ref(0)
    const seekBarStatus = ref('')

    function onESCreate(params) {
      seek_bar.value.setProgress(40);
      seek_bar.value.setMaxProgress(100);

      seek_bar.value.setProgressHeight(20);

      seek_bar.value.setProgressColor(0xFFFF0000);
      seek_bar.value.setProgressDefaultColor(0xFFFF00FF);

      seek_bar.value.setThumbWidth(40);
      seek_bar.value.setThumbHeight(40);
    }

    function onKeyDown(keyEvent: ESKeyEvent) {
      if (keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_LEFT || keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT) {
        if (seek_bar.value.isFocused()) {
          seek_bar.value.startSeek(keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT);
        }
      }
    }

    function onKeyUp(keyEvent: ESKeyEvent) {
      if (keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_LEFT || keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT) {
        seek_bar.value.stopSeek();
      }
    }

    function onProgressChanged(p) {
      progress.value = p;
    }

    function onSeekStart() {
      seekBarStatus.value = '开始快进';
    }

    function onSeekStop(progress) {
      seekBarStatus.value = '快进结束';
    }

    return {
      seek_bar,
      backgroundColors,
      color,
      duration,
      progress,
      seekBarStatus,
      onESCreate,
      onKeyDown,
      onKeyUp,
      onProgressChanged,
      onSeekStart,
      onSeekStop,
    }
  },
});

</script>

<style>
.es-seek-bar-css-css {
  width: 1200px;
  height: 100px;
  border-radius: 0;
  background-color: #cccccc;
}
</style>
