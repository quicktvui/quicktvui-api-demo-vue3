<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :smallWindowWidth="570"
      :smallWindowHeight="324"
      :fullWindowWidth="1920"
      :fullWindowHeight="1080"
      :floatWindowWidth="192"
      :floatWindowHeight="108"
      :initPlayerWindowType="1"
      :playerList="playerListRef"
      @onPlayerWindowSizeChanged="onPlayerWindowSizeChanged"
      @onPlayerWindowTypeChanged="onPlayerWindowTypeChanged"
      class="es-video-player-manager-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="切换全屏窗口" @onButtonClicked="changeToFullWindow"/>
      <s-text-button text="切换小屏窗口" @onButtonClicked="changeToSmallWindow"/>
      <s-text-button text="切换浮动窗口" @onButtonClicked="changeToFloatWindow"/>
      <s-text-button text="切换尺寸" @onButtonClicked="changeWindowSize"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {markRaw, ref} from "vue";
import {ESMediaSource, ESMediaSourceList, ESPlayerLogLevel, ESPlayerWindowType} from "@extscreen/es3-player";
import {ESIPlayerManager, ESMediaItem, ESMediaItemList, ESPlayerManager} from "@extscreen/es3-player-manager";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ESVideoPlayer} from "@extscreen/es3-video-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '播放窗口切换',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    function changeToFullWindow() {
      playerManager.value?.setFullWindow()
    }

    function changeToSmallWindow() {
      playerManager.value?.setSmallWindow()
    }

    function changeToFloatWindow() {
      playerManager.value?.setFloatWindow()
    }

    function changeWindowSize() {
      playerManager.value?.setSize(192, 108)
    }

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>")
      }
      isPaused = false
      let mediaSource: ESMediaSource = {
        uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4'
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      let mediaItem: ESMediaItem = {
        mediaSourceList: mediaSourceList,
      }
      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem]
      }
      playerManager.value?.initialize()
      playerManager.value?.playMediaList(playList)
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

    function onPlayerWindowTypeChanged(windowType: ESPlayerWindowType): void {
      log.d(TAG, '-----------onPlayerWindowTypeChanged------------->>>>', windowType)
    }

    function onPlayerWindowSizeChanged(playerWidth: number, playerHeight: number): void {
      log.d(TAG, '-----------onPlayerWindowSizeChanged------------->>>>', playerWidth, playerHeight)
    }

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      changeToFullWindow,
      changeToSmallWindow,
      changeToFloatWindow,
      changeWindowSize,
      onPlayerWindowTypeChanged,
      onPlayerWindowSizeChanged
    }
  },
});

</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
