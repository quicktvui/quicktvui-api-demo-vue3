<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :player-width="playerWidth"
      :player-height="playerHeight"
      @onPlayerInitialized="onPlayerInitialized"
      class="es-video-player-size-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="切换尺寸一" @onButtonClicked="changeSizeOne"/>
      <s-text-button text="切换尺寸二" @onButtonClicked="changeSizeTwo"/>
      <s-text-button text="切换尺寸三" @onButtonClicked="changeSizeThree"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {useESLog} from "@extscreen/es3-core";
import {ref} from "vue";
import {ESIPlayer, ESMediaSource, ESMediaSourceList} from "@extscreen/es3-player";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {useESRouter} from "@extscreen/es3-router";

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '播放尺寸切换',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 730
    const playerHeight = 441

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
      videoPlayer.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, "-------onESCreate------onPlayerInitialized---->>>>>")
      let mediaSource: ESMediaSource = {
        uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4'
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      log.e(TAG, "-------onPlayerInitialized---------->>>>>", playerType)
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
    }

    function changeSizeOne() {
      videoPlayer.value?.setSize(570, 324)
    }

    function changeSizeTwo() {
      videoPlayer.value?.setSize(1920, 1080)
    }

    function changeSizeThree() {
      videoPlayer.value?.setSize(190, 108)
    }

    function onBackPressed() {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
      router.back()
    }

    return {
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed,
      changeSizeOne,
      changeSizeTwo,
      changeSizeThree
    }
  },
});

</script>

<style>
.es-video-player-size-page-css {
  position: absolute;
}
</style>
