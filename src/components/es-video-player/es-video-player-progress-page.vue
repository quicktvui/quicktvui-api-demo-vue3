<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :player-width="playerWidth"
      :player-height="playerHeight"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerInitialized="onPlayerInitialized"
      @onPlayerPlaying="onPlayerPlaying"
      class="es-video-player-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <span class="es-video-player-text-css" text="总时长："/>
      <span class="es-video-player-text-css" :text="duration + '' "/>
      <span class="es-video-player-text-css" text="当前进度："/>
      <span class="es-video-player-text-css" :text="progress + '' "/>
      <span class="es-video-player-text-css" text="          "/>
      <span class="es-video-player-text-css" text="播放索引："/>
      <span class="es-video-player-text-css" :text="playingMediaIndex + '' "/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一源" @onButtonClicked="playPreviousMedia"/>
      <s-text-button text="播放下一源" @onButtonClicked="playNextMedia"/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="快进" @onButtonClicked="seekForward"/>
      <s-text-button text="快退" @onButtonClicked="seekBackward"/>
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
  ESMediaSourceList, ESPlayerDecode,
} from "@extscreen/es3-player";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {useESRouter} from "@extscreen/es3-router";

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '播放进度',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const duration = ref(0)
    const progress = ref(0)
    const playingMediaIndex = ref(-1)

    let durationTimer = null
    let progressTimer = null

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource) {
      playingMediaIndex.value = videoPlayer.value?.getPlayingMediaSourceIndex() ?? -1
    }

    function playPreviousMedia() {
      videoPlayer.value?.playPreviousMediaSource()
    }

    function playNextMedia() {
      videoPlayer.value?.playNextMediaSource()
    }

    function durationCallback(d: number) {
      duration.value = d
    }

    function progressCallback(p: number) {
      progress.value = p
    }

    //
    function seekForward() {
      videoPlayer.value?.seekTo(progress.value + 10000)
    }

    function seekBackward() {
      if (progress.value - 10000 > 0) {
        videoPlayer.value?.seekTo(progress.value - 10000)
      }
    }

    //--------------------------------------------------------------
    function startDurationTimer() {
      stopDurationTimer()
      durationTimer = setInterval(() => {
        videoPlayer.value?.getDuration()
      }, 500);
    }

    function stopDurationTimer() {
      if (durationTimer) {
        clearInterval(durationTimer);
      }
    }

    function startProgressTimer() {
      stopProgressTimer()
      progressTimer = setInterval(() => {
        videoPlayer.value?.getCurrentPosition()
      }, 500);
    }

    function stopProgressTimer() {
      if (progressTimer) {
        clearInterval(progressTimer);
      }
    }

    //--------------------------------------------------------------
    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
      videoPlayer.value?.initialize()
      videoPlayer.value?.setDurationCallback(durationCallback)
      videoPlayer.value?.setProgressCallback(progressCallback)
    }

    const onESStop = () => {
      log.e(TAG, "-------onESStop---------->>>>>")
      stopDurationTimer()
      stopProgressTimer()
    }

    const onPlayerPlaying = () => {
      startDurationTimer()
      startProgressTimer()
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
      duration,
      progress,
      playingMediaIndex,
      onESCreate,
      onESStop,
      onPlayerInitialized,
      onPlayerPlaying,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed,
      playPreviousMedia,
      playNextMedia,
      seekBackward,
      seekForward,
      onPlayerPlayMediaSource,
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
