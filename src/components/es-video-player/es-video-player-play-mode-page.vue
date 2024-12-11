<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :player-width="playerWidth"
      :player-height="playerHeight"
      @onPlayerPlayMediaSourceListModeListChanged="onPlayerPlayMediaSourceListModeListChanged"
      @onPlayerPlayMediaSourceListModeChanged="onPlayerPlayMediaSourceListModeChanged"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerInitialized="onPlayerInitialized"
      class="es-video-player-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <span class="es-video-player-text-css" text="播放模式列表："/>
      <span class="es-video-player-text-css" :text="playMediaListModeList + '' "/>
      <span class="es-video-player-text-css" text="播放模式："/>
      <span class="es-video-player-text-css" :text="playMode + '' "/>
      <span class="es-video-player-text-css" text="          "/>
      <span class="es-video-player-text-css" text="播放索引："/>
      <span class="es-video-player-text-css" :text="playingMediaIndex + '' "/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一源" @onButtonClicked="playPreviousMedia"/>
      <s-text-button text="播放下一源" @onButtonClicked="playNextMedia"/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="单次播放" @onButtonClicked="setPlayModeOnce"/>
      <s-text-button text="顺序播放" @onButtonClicked="setPlayModeOrder"/>
      <s-text-button text="随机播放" @onButtonClicked="setPlayModeShuffle"/>
      <s-text-button text="单曲循环" @onButtonClicked="setPlayModeRepeat"/>
      <s-text-button text="循环播放" @onButtonClicked="setPlayModeLoop"/>
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
  ESMediaSourceList,
  ESPlayerPlayMode
} from "@extscreen/es3-player";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {useESRouter} from "@extscreen/es3-router";

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '播放模式',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const playMediaListModeList = ref([])
    const playMode = ref(0)
    const playingMediaIndex = ref(-1)

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource) {
      playingMediaIndex.value = videoPlayer.value?.getPlayingMediaSourceIndex() ?? -1
    }

    function onPlayerPlayMediaSourceListModeListChanged(playModeList: Array<ESPlayerPlayMode>): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onPlayerPlayMediaSourceListModeListChanged---------->>>>>", playModeList)
      }
      playMediaListModeList.value = playModeList
    }

    function onPlayerPlayMediaSourceListModeChanged(value: ESPlayerPlayMode): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onPlayerPlayMediaSourceListModeChanged---------->>>>>", value)
      }
      playMode.value = value
    }

    function playPreviousMedia() {
      videoPlayer.value?.playPreviousMediaSource()
    }

    function playNextMedia() {
      videoPlayer.value?.playNextMediaSource()
    }

    function setPlayModeOnce() {
      videoPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ONCE)
    }

    function setPlayModeOrder() {
      videoPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ORDER)
    }

    function setPlayModeShuffle() {
      videoPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_SHUFFLE)
    }

    function setPlayModeRepeat() {
      videoPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_REPEAT)
    }

    function setPlayModeLoop() {
      videoPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_LOOP)
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
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/f4ccf8e2-0e58-4d36-ae2b-0555190ac340.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/26/b5b60695-236d-45df-b071-be7b690e3b60_transcode_1137855.mp4'
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
      playMediaListModeList,
      playMode,
      playingMediaIndex,
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed,
      playPreviousMedia,
      playNextMedia,
      setPlayModeOnce,
      setPlayModeOrder,
      setPlayModeShuffle,
      setPlayModeRepeat,
      setPlayModeLoop,
      onPlayerPlayMediaSourceListModeListChanged,
      onPlayerPlayMediaSourceListModeChanged,
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
