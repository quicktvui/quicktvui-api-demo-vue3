<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="上一个" @onButtonClicked="onPreviousButtonClicked"/>
      <s-text-button text="下一个" @onButtonClicked="onNextButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {markRaw, ref} from "vue";
import {ESMediaSource, ESMediaSourceList} from "@extscreen/es3-player";
import {ESIPlayerManager, ESMediaItem, ESMediaItemList, ESPlayerManager} from "@extscreen/es3-player-manager";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import ESTextLeftPlayer from "./player/ESTextLeftPlayer.vue";
import ESTextRightPlayer from "./player/ESTextRightPlayer.vue";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '多类型播放',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESTextLeftPlayer), markRaw(ESTextRightPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>")
      }
      isPaused = false
      //-----------------------------------------------------------------
      let leftMediaSource: ESMediaSource = {
        uri: '左文本'
      }
      let leftMediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [leftMediaSource]
      }
      let leftMediaItem: ESMediaItem = {
        mediaSourceList: leftMediaSourceList,
        playerType: 10
      }

      //-----------------------------------------------------------------
      let rightMediaSource: ESMediaSource = {
        uri: '右文本'
      }
      let rightMediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [rightMediaSource]
      }
      let rightMediaItem: ESMediaItem = {
        mediaSourceList: rightMediaSourceList,
        playerType: 11
      }
      //-----------------------------------------------------------------
      let playList: ESMediaItemList = {
        index: 0,
        list: [leftMediaItem, rightMediaItem]
      }
      playerManager.value?.initialize()
      playerManager.value?.playMediaList(playList)
    }

    const onNextButtonClicked = () => {
      playerManager.value?.playNextMedia()
    }
    const onPreviousButtonClicked = () => {
      playerManager.value?.playPreviousMedia()
    }

    const onESResume = () => {
      log.e(TAG, "-------onESResume---------->>>>>")
      if (isPaused) {
        playerManager.value?.resume()
      }
      isPaused = false;
    }
    const onESPause = () => {
      log.e(TAG, "-------onESPause---------->>>>>")
      isPaused = true;
      playerManager.value?.stop()
    }
    const onESDestroy = () => {
      log.e(TAG, "-------onESDestroy---------->>>>>")
      playerManager.value?.release()
    }

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      onNextButtonClicked,
      onPreviousButtonClicked
    }
  },
});

</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
