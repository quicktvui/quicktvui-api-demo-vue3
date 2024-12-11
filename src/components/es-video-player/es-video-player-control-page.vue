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
    </div>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一源" @onButtonClicked="playPreviousMediaSource"/>
      <s-text-button text="播放下一源" @onButtonClicked="playNextMediaSource"/>
      <span class="es-video-player-text-css" text="播放MediaSource索引："/>
      <span class="es-video-player-text-css" :text="playingMediaSourceIndex + '' "/>
      <span class="es-video-player-text-css" text="播放MediaSource："/>
      <span class="es-video-player-text-css" :text="playingMediaSource + '' "/>
    </div>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="开始" @onButtonClicked="start"/>
      <s-text-button text="暂停" @onButtonClicked="pause"/>
      <span class="es-video-player-text-css" text="             "/>
      <s-text-button text="恢复" @onButtonClicked="resume"/>
      <s-text-button text="停止" @onButtonClicked="stop"/>
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
} from "@extscreen/es3-player";
import {useESRouter} from "@extscreen/es3-router";
import {ESVideoPlayer} from "@extscreen/es3-video-player";

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '播放控制',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const playingMediaSource = ref('')
    const playingMediaSourceIndex = ref(-1)

    let durationTimer = null
    let progressTimer = null

    const duration = ref(0)
    const progress = ref(0)

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource) {
      playingMediaSource.value = JSON.stringify(mediaSource)
      playingMediaSourceIndex.value = videoPlayer.value?.getPlayingMediaSourceIndex() ?? -1
    }

    function playPreviousMediaSource() {
      videoPlayer.value?.playPreviousMediaSource()
    }

    function playNextMediaSource() {
      videoPlayer.value?.playNextMediaSource()
    }

    //
    function start() {
      videoPlayer.value?.start(0)
    }

    function pause() {
      videoPlayer.value?.pause()
    }

    function resume() {
      videoPlayer.value?.resume()
    }

    function stop() {
      stopDurationTimer()
      stopProgressTimer()
      videoPlayer.value?.stop()
    }

    function release() {
      videoPlayer.value?.release()
    }

    //--------------------------------------------------------------
    function durationCallback(d: number) {
      log.e(TAG, "-------------durationCallback---->>>>>" + d)
      duration.value = d
    }

    function progressCallback(p: number) {
      log.e(TAG, "-------------progressCallback---->>>>>" + p)
      progress.value = p
    }

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

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
      videoPlayer.value?.initialize()
      videoPlayer.value?.setDurationCallback(durationCallback)
      videoPlayer.value?.setProgressCallback(progressCallback)
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, "-------onESCreate------onPlayerInitialized---->>>>>")
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4'
          }, {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/cd3c86d4-37a8-4c52-8d0c-7ef2cbf1d224_transcode_1137855.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/72254d7a-4653-42ad-aaaa-f5be7b2a8ad5_transcode_1137855.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/a006834a-b093-4ab9-8691-090394af3a75_transcode_1137855.mp4'
          }
        ]
      }
      log.e(TAG, "-------onPlayerInitialized---------->>>>>", playerType)
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
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

    function onBackPressed() {
      stop()
      release()
      router.back()
    }

    return {
      duration,
      progress,
      playingMediaSourceIndex,
      playingMediaSource,
      onESCreate,
      onESStop,
      onPlayerInitialized,
      onPlayerPlaying,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed,
      playPreviousMediaSource,
      playNextMediaSource,
      onPlayerPlayMediaSource,
      start,
      pause,
      resume,
      stop,
      release,
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
