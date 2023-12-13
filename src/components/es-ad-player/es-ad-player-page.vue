<template>
  <div class="es-sdk-root-css">
    <es-ad-player
      ref="videoPlayer"
      :player-width="playerWidth"
      :player-height="playerHeight"
      :test="true"
      channel="ch"
      :debug="true"
      @onPlayerInitialized="onPlayerInitialized"
      @onPlayerError="onPlayerError"
      class="es-video-player-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {useESLog} from "@extscreen/es3-core";

import {ref} from "vue";
import {ESIPlayer, ESMediaSource, ESMediaSourceList, ESPlayerError} from "@extscreen/es3-player";
import {useESRouter} from "@extscreen/es3-router";
import {ESADPlayer, ESADType} from "@extscreen/es3-ad-player";

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '使用初探',
  components: {
    'es-ad-player': ESADPlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
      videoPlayer.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, "-------onESCreate------onPlayerInitialized---->>>>>")
      let mediaSource: ESMediaSource = {
        uri: {
          id: 'extscreen-cast',
          mediaId: '1111',
          count: 1,
          type: ESADType.ES_AD_TYPE_LAUNCH,
        }
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      log.e(TAG, "-------onPlayerInitialized---------->>>>>", playerType)
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
    }

    function onPlayerError(error: ESPlayerError): void {
      log.e(TAG, "-------onPlayerError---------->>>>>", error)
    }

    function onBackPressed() {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
      router.back()
    }

    return {
      onESCreate,
      onPlayerInitialized,
      onPlayerError,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed
    }
  },
});

</script>

<style>
.es-video-player-page-css {
  position: absolute;
}
</style>
