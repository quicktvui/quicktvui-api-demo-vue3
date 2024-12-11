<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="打印xlog日志" @onButtonClicked="onButtonClicked"/>
      <s-text-button text="上传xlog日志" @onButtonClicked="uploadLog"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {Native} from "@extscreen/es3-vue";
import {
  ESLogUploadInfo,
  ESLogUploadListener,
  ESXLogLevel,
  useESLogUpload,
  useESToast,
  useESXLog
} from "@extscreen/es3-core";

const TAG = 'XLogSamplePage'

export default defineComponent({
  name: '使用初探',
  setup() {
    const log = useESXLog()
    const upload = useESLogUpload()
    const toast = useESToast()
    const params: Map<string, string> = new Map<string, string>()
    params.set("feedbackId", "35")
    const uploadInfo: ESLogUploadInfo = {
      id: '111',
      url: "http://175.178.62.66/extend_api/api/v1/zero/user/feedback/uploadLog",
      mediaType: "multipart/form-data",
      filePramsKey: "file",
      filePath: 'audio/test.mp3',
      fileType: 1,
      params,
    }
    const listener: ESLogUploadListener = {
      onLogUploadError() {
        console.log("upload", 'onUploadError:' + JSON.stringify(uploadInfo))
      },
      onLogUploadSuccess() {
        console.log("upload", 'onUploadSuccess:' + JSON.stringify(uploadInfo))
      },
      onLogUploadStart() {
        console.log("upload", 'onUploadStart:------------------')
      },
    }

    function onButtonClicked() {

      log.initXlogConsole(true)
      log.setMinimumLoggingLevel(ESXLogLevel.DEBUG)
      console.log("1")
      Native.callNative('ESXLogModule', 'initXlogConsole', true);
      console.log("2")
      if (log.isLoggable(ESXLogLevel.VERBOSE)) {
        log.v(TAG, "----------VERBOSE--------->>>")
      }
      console.log("3")
      if (log.isLoggable(ESXLogLevel.DEBUG)) {
        log.d(TAG, "----------DEBUG--------->>>")
      }
      if (log.isLoggable(ESXLogLevel.INFO)) {
        log.i(TAG, "----------INFO--------->>>")
      }
      if (log.isLoggable(ESXLogLevel.WARN)) {
        log.w(TAG, "----------WARN--------->>>")
      }
      if (log.isLoggable(ESXLogLevel.ERROR)) {
        log.e(TAG, "----------ERROR--------->>>")
      }

      for (let i = 0; i < 500; i++) {
        log.d("testXlogSize", "当前数字count--->" + i)
      }
    }

    function uploadLog() {
      upload.upload(uploadInfo)
    }

    function onESCreate(params) {
      upload.addListener(uploadInfo, listener)
    }

    function onESDestroy() {
      upload.removeListener(listener)
    }

    return {
      onButtonClicked,
      uploadLog,
      onESCreate,
      onESDestroy
    }
  },
});

</script>

<style>
</style>
