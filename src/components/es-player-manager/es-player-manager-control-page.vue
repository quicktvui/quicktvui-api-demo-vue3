<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerPaused="onPlayerPaused"
      @onPlayerResumed="onPlayerResumed"
      @onPlayerStopped="onPlayerStopped"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      class="es-video-player-manager-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-row-css">
      <span class="es-player-manager-text-css" text="总时长："/>
      <span class="es-player-manager-text-css" :text="duration + '' "/>
      <span class="es-player-manager-text-css" text="当前进度："/>
      <span class="es-player-manager-text-css" :text="progress + '' "/>
    </div>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一集" @onButtonClicked="playPreviousMedia"/>
      <s-text-button text="播放下一集" @onButtonClicked="playNextMedia"/>
      <span class="es-player-manager-text-css" text="播放MediaItem索引："/>
      <span class="es-player-manager-text-css" :text="playingMediaItemIndex + '' "/>
      <span class="es-player-manager-text-css" text="播放MediaItem："/>
      <span class="es-player-manager-text-css" :text="playingMediaItem + '' "/>
    </div>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一源" @onButtonClicked="playPreviousMediaSource"/>
      <s-text-button text="播放下一源" @onButtonClicked="playNextMediaSource"/>
      <span class="es-player-manager-text-css" text="播放MediaSource索引："/>
      <span class="es-player-manager-text-css" :text="playingMediaSourceIndex + '' "/>
      <span class="es-player-manager-text-css" text="播放MediaSource："/>
      <span class="es-player-manager-text-css" :text="playingMediaSource + '' "/>
    </div>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="开始" @onButtonClicked="start"/>
      <s-text-button text="暂停" @onButtonClicked="pause"/>
      <span class="es-player-manager-text-css" text="             "/>
      <s-text-button text="恢复" @onButtonClicked="resume"/>
      <s-text-button text="停止" @onButtonClicked="stop"/>
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
import {ESMediaSource} from "@extscreen/es3-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '播放控制',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()
    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    const playingMediaItem = ref('')
    const playingMediaItemIndex = ref(-1)

    const playingMediaSource = ref('')
    const playingMediaSourceIndex = ref(-1)

    let isPaused = false

    const duration = ref(0)
    const progress = ref(0)
    let durationTimer = null
    let progressTimer = null


    function onPlayerPlayMedia(mediaItem: ESMediaItem) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onPlayerPlayMedia---------->>>>>", mediaItem)
      }
      playingMediaItem.value = JSON.stringify(mediaItem)
      playingMediaItemIndex.value = playerManager.value?.getPlayingMediaIndex() ?? -1
    }

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onPlayerPlayMediaSource---------->>>>>", mediaSource)
      }
      playingMediaSource.value = JSON.stringify(mediaSource)
      playingMediaSourceIndex.value = playerManager.value?.getPlayingMediaSourceIndex() ?? -1
    }

    function playPreviousMedia() {
      playerManager.value?.playPreviousMedia()
    }

    function playNextMedia() {
      playerManager.value?.playNextMedia()
    }

    function playPreviousMediaSource() {
      playerManager.value?.playPreviousMediaSource()
    }

    function playNextMediaSource() {
      playerManager.value?.playNextMediaSource()
    }

    //
    function start() {
      playerManager.value?.start(0)
    }

    function pause() {
      playerManager.value?.pause()
    }

    function resume() {
      playerManager.value?.resume()
    }

    function stop() {
      stopDurationTimer()
      stopProgressTimer()
      playerManager.value?.stop()
    }

    function durationCallback(d: number) {
      duration.value = d
    }

    function progressCallback(p: number) {
      progress.value = p
    }

    function startDurationTimer() {
      stopDurationTimer()
      durationTimer = setInterval(() => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.e(TAG, "-------getDuration---------->>>>>")
        }
        playerManager.value?.getDuration()
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
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.e(TAG, "-------getCurrentPosition---------->>>>>")
        }
        playerManager.value?.getCurrentPosition()
      }, 500);
    }

    function stopProgressTimer() {
      if (progressTimer) {
        clearInterval(progressTimer);
      }
    }

    const onPlayerPlaying = () => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "----PlayerEvent---onPlayerPlaying---------->>>>>")
      }
      startDurationTimer()
      startProgressTimer()
    }

    const onPlayerPaused = () => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "----PlayerEvent---onPlayerPaused---------->>>>>")
      }
    }
    const onPlayerResumed = () => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "----PlayerEvent---onPlayerResumed---------->>>>>")
      }
    }
    const onPlayerStopped = () => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "----PlayerEvent---onPlayerStopped---------->>>>>")
      }
    }

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>")
      }
      isPaused = false

      let mediaItem_0: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/23/7bd80eb0-6a46-4210-b571-19407f036f0c.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/12/d5a1137c-8bf5-4e48-8017-1f683a913661.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/08/24f6bef3-7f7a-4fd1-a1b8-c3a40ba27d5c.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/2c529e68-0a81-4d9d-8dc1-f334c2a083ed.mp4'
            }
          ]
        },
      }
      let mediaItem_1: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/03/08/3af6f84b-f112-48bb-955d-dee58d0e2cce.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/04/02/2e948bf8-7822-45a1-8b54-c57c70c916f1.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/26/8bfff5ec-af9a-4073-ac95-2096bf31fbc3_transcode_1137855.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/25/c7c3fb1b-11ea-4452-ae89-6665d44487bf_transcode_1137855.mp4'
            },
          ]
        },
      }

      let mediaItem_2: ESMediaItem = {
        mediaSourceList: {
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
        },
      }

      let mediaItem_3: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/21/0ec11cc9-dec8-469a-a0b8-0ae735bc7420_transcode_1137855.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/21/7bb303c0-5ff2-438a-8459-21199668e4fc_transcode_1137855.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/21/13d108a4-ad53-40b6-a092-e9fe0e903925_transcode_1137855.mp4'
            },
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/21/aa8d0dad-705c-4430-9cf9-6f68eedd02b7_transcode_1137855.mp4'
            }]
        },
      }

      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem_0, mediaItem_1, mediaItem_2, mediaItem_3]
      }
      playerManager.value?.initialize()
      playerManager.value?.setDurationCallback(durationCallback)
      playerManager.value?.setProgressCallback(progressCallback)
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
      stop()
    }
    const onESDestroy = () => {
      log.e(TAG, "-------onESDestroy---------->>>>>")
      playerManager.value?.release()
    }

    return {
      duration,
      progress,
      playingMediaItemIndex,
      playingMediaItem,
      playingMediaSourceIndex,
      playingMediaSource,
      playPreviousMedia,
      playNextMedia,
      playPreviousMediaSource,
      playNextMediaSource,
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      onPlayerPlayMedia,
      onPlayerPlayMediaSource,
      onPlayerPlaying,
      start,
      pause,
      resume,
      stop,
      onPlayerPaused,
      onPlayerResumed,
      onPlayerStopped
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
