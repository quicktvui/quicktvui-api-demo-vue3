<template>
  <div class="es-sdk-root-css">
    <es-audio-service-player
      ref="player"
      :player-width="playerWidth"
      :player-height="playerHeight"
      @onPlayerInitialized="onPlayerInitialized"
      class="es-audio-player-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放" @onButtonClicked="onPlayButtonClicked"/>
      <s-text-button text="开始" @onButtonClicked="onStartButtonClicked"/>
      <s-text-button text="暂停" @onButtonClicked="onPauseButtonClicked"/>
      <s-text-button text="停止" @onButtonClicked="onStopButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {useESLog} from "@extscreen/es3-core";
import {ref} from "vue";
import {ESIPlayer, ESMediaSource, ESMediaSourceList, ESPlayerPosition} from "@extscreen/es3-player";
import {useESRouter} from "@extscreen/es3-router";
import {ESAudioServicePlayer} from "@extscreen/es3-audio-service-player";

const TAG = 'ESAudioPlayerPage'

export default defineComponent({
  name: '使用初探',
  components: {
    'es-audio-service-player': ESAudioServicePlayer,
  },
  setup(props, context) {
    const log = useESLog()
    const router = useESRouter()
    const player = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, "-------onESCreate------onPlayerInitialized---->>>>>")
      let mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/audios/ifengfm/1898049/9644712/2ff957624598b7b105d5c86b809c854c.mp3'
      }
      let position: ESPlayerPosition = {
        support: true,
        position: 20000
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource],
        position: position
      }
      log.e(TAG, "-------onPlayerInitialized---------->>>>>", playerType)
      player.value?.playMediaSourceList(mediaSourceList)
    }

    const onPlayButtonClicked = () => {
      player.value?.initialize()
    }
    const onStartButtonClicked = () => {
      player.value?.start(50000)
    }
    const onPauseButtonClicked = () => {
      player.value?.pause()
    }
    const onStopButtonClicked = () => {
      player.value?.stop()
    }

    function onBackPressed() {
      router.back()
    }

    return {
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      player,
      onBackPressed,
      onPlayButtonClicked,
      onStartButtonClicked,
      onPauseButtonClicked,
      onStopButtonClicked
    }
  },
});

</script>

<style>
.es-audio-player-page-css {
  position: absolute;
}
</style>
