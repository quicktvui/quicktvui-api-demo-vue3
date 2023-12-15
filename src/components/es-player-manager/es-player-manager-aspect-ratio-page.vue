<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerAspectRatioListChanged="onPlayerAspectRatioListChanged"
      @onPlayerAspectRatioChanged="onPlayerAspectRatioChanged"
      class="es-video-player-manager-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <span class="es-player-manager-text-css" text="画面比例列表："/>
      <span class="es-player-manager-text-css" :text="aspectRatioList + '' "/>
      <span class="es-player-manager-text-css" text="画面比例："/>
      <span class="es-player-manager-text-css" :text="aspectRatio + '' "/>
      <span class="es-player-manager-text-css" text="          "/>
      <span class="es-player-manager-text-css" text="播放索引："/>
      <span class="es-player-manager-text-css" :text="playingMediaIndex + '' "/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一集" @onButtonClicked="playPreviousMedia"/>
      <s-text-button text="播放下一集" @onButtonClicked="playNextMedia"/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="FIT_PARENT" @onButtonClicked="setAspectRatioFitParent"/>
      <s-text-button text="FILL_PARENT" @onButtonClicked="setAspectRatioFillParent"/>
      <s-text-button text="WRAP_CONTENT" @onButtonClicked="setAspectRatioWrapContent"/>
      <s-text-button text="MATCH_PARENT" @onButtonClicked="setAspectRatioMatchParent"/>
      <s-text-button text="16_9_FIT_PARENT" @onButtonClicked="setAspectRatio169FitParent"/>
      <s-text-button text="4_3_FIT_PARENT" @onButtonClicked="setAspectRatio43FitParent"/>
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
import {ESPlayerAspectRatio, ESPlayerPlayMode} from "@extscreen/es3-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '画面比例',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const aspectRatioList = ref([])
    const aspectRatio = ref('')

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

    function onPlayerAspectRatioListChanged(list: Array<ESPlayerAspectRatio>): void {
      aspectRatioList.value = list
    }

    function onPlayerAspectRatioChanged(ar: ESPlayerAspectRatio): void {
      switch (ar) {
        case ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_FIT_PARENT:
          aspectRatio.value = 'FIT_PARENT';
          break
        case ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_FILL_PARENT:
          aspectRatio.value = 'FILL_PARENT';
          break
        case ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_WRAP_CONTENT:
          aspectRatio.value = 'WRAP_CONTENT';
          break
        case ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_MATCH_PARENT:
          aspectRatio.value = 'MATCH_PARENT';
          break
        case ESPlayerAspectRatio.ES_PLAYER_AR_16_9_FIT_PARENT:
          aspectRatio.value = '16_9_FIT_PARENT';
          break
        case ESPlayerAspectRatio.ES_PLAYER_AR_4_3_FIT_PARENT:
          aspectRatio.value = '4_3_FIT_PARENT';
          break
      }
    }

    function playPreviousMedia() {
      playerManager.value?.playPreviousMedia()
    }

    function playNextMedia() {
      playerManager.value?.playNextMedia()
    }

    //
    function setAspectRatioFitParent() {
      playerManager.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_FIT_PARENT)
    }

    function setAspectRatioFillParent() {
      playerManager.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_FILL_PARENT)
    }

    function setAspectRatioWrapContent() {
      playerManager.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_WRAP_CONTENT)
    }

    function setAspectRatioMatchParent() {
      playerManager.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_MATCH_PARENT)
    }

    function setAspectRatio169FitParent() {
      playerManager.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_16_9_FIT_PARENT)
    }

    function setAspectRatio43FitParent() {
      playerManager.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_4_3_FIT_PARENT)
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
      aspectRatioList,
      aspectRatio,
      playPreviousMedia,
      playNextMedia,
      setAspectRatioFitParent,
      setAspectRatioFillParent,
      setAspectRatioWrapContent,
      setAspectRatioMatchParent,
      setAspectRatio169FitParent,
      setAspectRatio43FitParent,
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      onPlayerPlayMedia,
      onPlayerAspectRatioListChanged,
      onPlayerAspectRatioChanged,
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
