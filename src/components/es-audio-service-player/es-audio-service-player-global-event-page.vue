<template>
  <div class="es-sdk-root-css">
    <es-audio-service-player
      ref="player"
      :player-width="playerWidth"
      :player-height="playerHeight"
      @onPlayerInitialized="onPlayerInitialized"
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
import {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  useESPlayerEventManager
} from "@extscreen/es3-player";
import {useESRouter} from "@extscreen/es3-router";
import {createESPlayerEventListener} from "./event/ESPlayerEvent";
import {ESAudioServicePlayer} from "@extscreen/es3-audio-service-player";

const TAG = 'ESAudioPlayerPage'

export default defineComponent({
  name: '全局监听播放事件',
  components: {
    'es-audio-service-player': ESAudioServicePlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const player = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080
    //--------------------------------全局监听播放事件----------------START----------------
    const playerManagerEventManager = useESPlayerEventManager()
    const playerManagerEventListener = createESPlayerEventListener()
    playerManagerEventManager.addListener(playerManagerEventListener)
    //--------------------------------全局监听播放事件----------------END------------------

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
      player.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, "-------onESCreate------onPlayerInitialized---->>>>>")
      let mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/audios/ifengfm/1898049/9644712/2ff957624598b7b105d5c86b809c854c.mp3'
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      log.e(TAG, "-------onPlayerInitialized---------->>>>>", playerType)
      player.value?.playMediaSourceList(mediaSourceList)
    }

    function onBackPressed() {
      player.value?.stop()
      player.value?.release()
      router.back()
    }

    return {
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      player,
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
