<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <qt-text class="es-sdk-content-title-css"> dialog</qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-loading-view-start-page">
      <qt-button text="弹窗" @click="toShowAndHideDialog" style="background-color: green;"></qt-button>
    </qt-view>
    <qt-dialog v-if="isShowDialog" @requestClose="close" ref="dialogRef">
      <qt-view class="dialog_view">
        <qt-text class="dialog_view_text"> dialog</qt-text>
      </qt-view>
    </qt-dialog>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    let isShowDialog = ref(false)
    let dialogRef = ref()
    const toShowAndHideDialog = () => {
      isShowDialog.value = !isShowDialog.value
    }
    const close = () => {
      isShowDialog.value = false
    }
    return {
      isShowDialog, toShowAndHideDialog, close, dialogRef,
    }
  },
});
</script>

<style>
.qt-loading-view-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dialog_view {
  width: 1920px;
  height: 1080px;
  background-color: rgba(0, 0, 0, 0.70);
  align-items: center;
  justify-content: center;
}

.dialog_view_text {
  font-size: 60px;
  color: aqua;
  text-align: end;
}
</style>
