<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :player-width="playerWidth"
      :player-height="playerHeight"
      @onPlayerAspectRatioListChanged="onPlayerAspectRatioListChanged"
      @onPlayerAspectRatioChanged="onPlayerAspectRatioChanged"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerInitialized="onPlayerInitialized"
      class="es-video-player-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <span class="es-video-player-text-css" text="画面比例列表："/>
      <span class="es-video-player-text-css" :text="aspectRatioList + '' "/>
      <span class="es-video-player-text-css" text="画面比例："/>
      <span class="es-video-player-text-css" :text="aspectRatio + '' "/>
      <span class="es-video-player-text-css" text="          "/>
      <span class="es-video-player-text-css" text="播放索引："/>
      <span class="es-video-player-text-css" :text="playingMediaIndex + '' "/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一源" @onButtonClicked="playPreviousMedia"/>
      <s-text-button text="播放下一源" @onButtonClicked="playNextMedia"/>
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
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ref} from "vue";
import {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList, ESPlayerAspectRatio,
  ESPlayerPlayMode,
  ESPlayerRate
} from "@extscreen/es3-player";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {useESRouter} from "@extscreen/es3-router";

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '画面比例',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const aspectRatioList = ref([])
    const aspectRatio = ref('')
    const playingMediaIndex = ref(-1)

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource) {
      playingMediaIndex.value = videoPlayer.value?.getPlayingMediaSourceIndex() ?? -1
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
      videoPlayer.value?.playPreviousMediaSource()
    }

    function playNextMedia() {
      videoPlayer.value?.playNextMediaSource()
    }

    //
    function setAspectRatioFitParent() {
      videoPlayer.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_FIT_PARENT)
    }

    function setAspectRatioFillParent() {
      videoPlayer.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_FILL_PARENT)
    }

    function setAspectRatioWrapContent() {
      videoPlayer.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_WRAP_CONTENT)
    }

    function setAspectRatioMatchParent() {
      videoPlayer.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_ASPECT_MATCH_PARENT)
    }

    function setAspectRatio169FitParent() {
      videoPlayer.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_16_9_FIT_PARENT)
    }

    function setAspectRatio43FitParent() {
      videoPlayer.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_4_3_FIT_PARENT)
    }

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
      videoPlayer.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, "-------onESCreate------onPlayerInitialized---->>>>>")
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/01/27/85a658d6-d0ce-4721-adea-f8e2e0b263a7.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/LIB/VARIETY/2022/03/10/2877b7e1-fda6-4591-aff3-3fd3ba4151cf_transcode_1137855.mp4'
          }
        ]
      }
      log.e(TAG, "-------onPlayerInitialized---------->>>>>", playerType)
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
    }

    function onBackPressed() {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
      router.back()
    }

    return {
      aspectRatioList,
      aspectRatio,
      playingMediaIndex,
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed,
      playPreviousMedia,
      playNextMedia,
      setAspectRatioFitParent,
      setAspectRatioFillParent,
      setAspectRatioWrapContent,
      setAspectRatioMatchParent,
      setAspectRatio169FitParent,
      onPlayerAspectRatioChanged,
      setAspectRatio43FitParent,
      onPlayerAspectRatioListChanged,
      onPlayerPlayMediaSource
    }
  },
});

</script>

<style>
.es-video-player-page-css {
  position: absolute;
}

.es-video-player-text-css {
  color: white;
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>
