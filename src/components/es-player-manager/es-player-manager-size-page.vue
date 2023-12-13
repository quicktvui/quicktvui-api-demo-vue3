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
      <s-text-button text="切换尺寸一" @onButtonClicked="changeSizeOne"/>
      <s-text-button text="切换尺寸二" @onButtonClicked="changeSizeTwo"/>
      <s-text-button text="切换尺寸三" @onButtonClicked="changeSizeThree"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {markRaw, ref} from "vue";
import {ESMediaSource, ESMediaSourceList} from "@extscreen/es3-player";
import {ESIPlayerManager, ESMediaItem, ESMediaItemList, ESPlayerManager} from "@extscreen/es3-player-manager";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ESVideoPlayer} from "@extscreen/es3-video-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '播放尺寸切换',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    function changeSizeOne() {
      playerManager.value?.setSize(570, 324)
    }

    function changeSizeTwo() {
      playerManager.value?.setSize(1920, 1080)
    }

    function changeSizeThree() {
      playerManager.value?.setSize(190, 108)
    }

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>")
      }
      isPaused = false
      let mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
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

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      changeSizeOne,
      changeSizeTwo,
      changeSizeThree
    }
  },
});

</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
