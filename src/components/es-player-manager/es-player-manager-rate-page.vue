<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerPlayRateListChanged="onPlayerPlayRateListChanged"
      @onPlayerPlayRateChanged="onPlayerPlayRateChanged"
      class="es-video-player-manager-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <span class="es-player-manager-text-css" text="播放倍速列表："/>
      <span class="es-player-manager-text-css" :text="playRateList + '' "/>
      <span class="es-player-manager-text-css" text="播放倍速："/>
      <span class="es-player-manager-text-css" :text="playRate + '' "/>
      <span class="es-player-manager-text-css" text="          "/>
      <span class="es-player-manager-text-css" text="播放索引："/>
      <span class="es-player-manager-text-css" :text="playingMediaIndex + '' "/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一集" @onButtonClicked="playPreviousMedia"/>
      <s-text-button text="播放下一集" @onButtonClicked="playNextMedia"/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="0.5X播放" @onButtonClicked="setPlayRate_0_5"/>
      <s-text-button text="0.75X播放" @onButtonClicked="setPlayRate_0_75"/>
      <s-text-button text="1X播放" @onButtonClicked="setPlayRate_1"/>
      <s-text-button text="1.5X播放" @onButtonClicked="setPlayRate_1_5"/>
      <s-text-button text="2X播放" @onButtonClicked="setPlayRate_2"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {markRaw, ref} from "vue";
import {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
  ESPlayerManager
} from "@extscreen/es3-player-manager";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {ESPlayerRate} from "@extscreen/es3-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '解码方式',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playRateList = ref([])
    const playRate = ref('')

    const playingMediaIndex = ref(-1)

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    function onPlayerPlayMedia(mediaItem: ESMediaItem) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onPlayerPlayMedia---------->>>>>", mediaItem)
      }
      playingMediaIndex.value = playerManager.value?.getPlayingMediaIndex() ?? -1
    }

    function onPlayerPlayRateListChanged(playModeList: Array<ESPlayerRate>): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onPlayerPlayRateListChanged---------->>>>>", playModeList)
      }
      playRateList.value = playModeList
    }

    function onPlayerPlayRateChanged(value: ESPlayerRate): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onPlayerPlayRateChanged---------->>>>>", value)
      }
      playRate.value = value
    }

    function playPreviousMedia() {
      playerManager.value?.playPreviousMedia()
    }

    function playNextMedia() {
      playerManager.value?.playNextMedia()
    }

    //
    function setPlayRate_0_5() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_0_5)
    }

    function setPlayRate_0_75() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_0_7_5)
    }

    function setPlayRate_1() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_1)
    }

    function setPlayRate_1_5() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_1_5)
    }

    function setPlayRate_2() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_2)
    }

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>")
      }
      isPaused = false

      let mediaItem_0: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [{
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4'
          }]
        },
      }
      let mediaItem_1: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [{
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/01/27/85a658d6-d0ce-4721-adea-f8e2e0b263a7.mp4'
          }]
        },
      }

      let mediaItem_2: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [{
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4'
          }]
        },
      }

      let mediaItem_3: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [{
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/LIB/VARIETY/2022/03/10/2877b7e1-fda6-4591-aff3-3fd3ba4151cf_transcode_1137855.mp4'
          }]
        },
      }

      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem_0, mediaItem_1, mediaItem_2, mediaItem_3]
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
      playingMediaIndex,
      playRateList,
      playRate,
      playPreviousMedia,
      playNextMedia,
      setPlayRate_0_5,
      setPlayRate_0_75,
      setPlayRate_1,
      setPlayRate_1_5,
      setPlayRate_2,
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      onPlayerPlayMedia,
      onPlayerPlayRateListChanged,
      onPlayerPlayRateChanged,
    }
  },
});

</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}

.es-player-manager-text-css {
  color: white;
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>
