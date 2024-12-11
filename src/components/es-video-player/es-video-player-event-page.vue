<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :player-width="playerWidth"
      :player-height="playerHeight"
      @onPlayerLazyInitSuccess="onPlayerLazyInitSuccess"
      @onPlayerLazyInitError="onPlayerLazyInitError"
      @onPlayerInitialized="onPlayerInitialized"
      @onPlayerPlayMediaSourceList="onPlayerPlayMediaSourceList"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerInterceptSuccess="onPlayerInterceptSuccess"
      @onPlayerInterceptError="onPlayerInterceptError"
      @onPlayerError="onPlayerError"
      @onPlayerNoMediaSourceCanPlay="onPlayerNoMediaSourceCanPlay"
      @onPlayerSizeChanged="onPlayerSizeChanged"
      @onPlayerClickable="onPlayerClickable"
      @onPlayerViewChanged="onPlayerViewChanged"
      @onPlayerPreparing="onPlayerPreparing"
      @onPlayerPrepared="onPlayerPrepared"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerPaused="onPlayerPaused"
      @onPlayerResumed="onPlayerResumed"
      @onPlayerStopped="onPlayerStopped"
      @onPlayerCompleted="onPlayerCompleted"
      @onPlayerBufferStart="onPlayerBufferStart"
      @onPlayerBufferEnd="onPlayerBufferEnd"
      @onPlayerSeekStart="onPlayerSeekStart"
      @onPlayerSeekCompleted="onPlayerSeekCompleted"
      @onPlayerLeftVolumeChanged="onPlayerLeftVolumeChanged"
      @onPlayerRightVolumeChanged="onPlayerRightVolumeChanged"
      @onPlayerVolumeChanged="onPlayerVolumeChanged"
      @onPlayerDecodeListChanged="onPlayerDecodeListChanged"
      @onPlayerDecodeChanged="onPlayerDecodeChanged"
      @onPlayerPlayRateListChanged="onPlayerPlayRateListChanged"
      @onPlayerPlayRateChanged="onPlayerPlayRateChanged"
      @onPlayerAspectRatioListChanged="onPlayerAspectRatioListChanged"
      @onPlayerAspectRatioChanged="onPlayerAspectRatioChanged"
      @onPlayerDefinitionListChanged="onPlayerDefinitionListChanged"
      @onPlayerDefinitionChanged="onPlayerDefinitionChanged"
      @onPlayerInfo="onPlayerInfo"
      class="es-video-player-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
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
  ESPlayerAspectRatio,
  ESPlayerDecode,
  ESPlayerDefinition,
  ESPlayerError,
  ESPlayerInfo,
  ESPlayerInterceptError,
  ESPlayerInterceptResult,
  ESPlayerPlayMode,
  ESPlayerRate,
} from "@extscreen/es3-player";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {useESRouter} from "@extscreen/es3-router";

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '监听播放事件',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
      videoPlayer.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, "-------onESCreate------onPlayerInitialized---->>>>>")
      let mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      log.e(TAG, "-------onPlayerInitialized---------->>>>>", playerType)
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
    }

    function onPlayerLazyInitSuccess(playerType: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------------onPlayerLazyInitSuccess------->>>', playerType)
      }
    }

    function onPlayerLazyInitError(playerType: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------------onPlayerLazyInitError------->>>', playerType)
      }
    }

    function onPlayerPlayMediaSourceList(playUriInfo: ESMediaSourceList): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------------onPlayerPlayMediaSourceList------->>>', playUriInfo)
      }
    }

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------------onPlayerPlayMediaSource------->>>', mediaSource)
      }
    }

    function onPlayerSizeChanged(width: number, height: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------------onPlayerSizeChanged------->>>', 'width:' + width, 'height:' + height)
      }
    }

    function onPlayerPreparing(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerPreparing----->>>')
      }
    }

    function onPlayerPrepared(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerPrepared----->>>')
      }
    }

    function onPlayerBufferStart(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerBufferStart----->>>')
      }
    }

    function onPlayerBufferEnd(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerBufferEnd----->>>')
      }
    }

    function onPlayerPlaying(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerPlaying----->>>')
      }
    }

    function onPlayerProgressChanged(progress: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerProgressChanged----->>>', progress)
      }
    }

    function onPlayerDurationChanged(duration: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerDurationChanged----->>>', duration)
      }
    }

    function onPlayerSeekStart(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerSeekStart----->>>')
      }
    }

    function onPlayerSeekCompleted(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerSeekCompleted----->>>')
      }
    }

    function onPlayerPaused(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerPaused----->>>')
      }
    }

    function onPlayerResumed(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerResumed----->>>')
      }
    }

    function onPlayerStopped(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerStopped----->>>')
      }
    }

    function onPlayerCompleted(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerCompleted----->>>')
      }
    }

    function onPlayerError(error: ESPlayerError): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerError----->>>', error)
      }
    }

    function onPlayerInfo(info: ESPlayerInfo): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerInfo----->>>', info)
      }
    }

    function onPlayerNoMediaSourceCanPlay(next: boolean): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerNoMediaSourceCanPlay----->>>', next)
      }
    }

    function onPlayerVolumeChanged(leftVolume: number, rightVolume: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------------onPlayerVolumeChanged------->>>', 'leftVolume:' + leftVolume, 'rightVolume:' + rightVolume)
      }
    }

    function onPlayerLeftVolumeChanged(leftVolume: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerLeftVolumeChanged----->>>', leftVolume)
      }
    }

    function onPlayerRightVolumeChanged(rightVolume: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerRightVolumeChanged----->>>', rightVolume)
      }
    }

    function onPlayerDefinitionListChanged(definitionList: Array<ESPlayerDefinition>): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerDefinitionListChanged----->>>', definitionList)
      }
    }

    function onPlayerDefinitionChanged(definition: ESPlayerDefinition): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerDefinitionChanged----->>>', definition)
      }
    }

    function onPlayerPlayRateListChanged(rateList: Array<ESPlayerRate>): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerPlayRateListChanged----->>>', rateList)
      }
    }

    function onPlayerPlayRateChanged(rate: ESPlayerRate): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerPlayRateChanged----->>>', rate)
      }
    }

    function onPlayerDecodeListChanged(decodeList: Array<ESPlayerDecode>): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerDecodeListChanged----->>>', decodeList)
      }
    }

    function onPlayerDecodeChanged(decode: ESPlayerDecode): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerDecodeChanged----->>>', decode)
      }
    }

    function onPlayerAspectRatioListChanged(aspectRatioList: Array<ESPlayerAspectRatio>): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerAspectRatioListChanged----->>>', aspectRatioList)
      }
    }

    function onPlayerAspectRatioChanged(aspectRatio: ESPlayerAspectRatio): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerAspectRatioChanged----->>>', aspectRatio)
      }
    }

    function onPlayerPlayMediaSourceListModeListChanged(modeList: Array<ESPlayerPlayMode>): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerPlayMediaSourceListModeListChanged----->>>', modeList)
      }
    }

    function onPlayerPlayMediaSourceListModeChanged(mode: ESPlayerPlayMode): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerPlayMediaSourceListModeChanged----->>>', mode)
      }
    }

    function onPlayerViewChanged(): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerViewChanged----->>>')
      }
    }

    function onPlayerClickable(playerClickable: boolean): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerViewClickable----->>>', playerClickable)
      }
    }

    function onPlayerInterceptSuccess(value: ESPlayerInterceptResult): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerInterceptSuccess----->>>', value)
      }
    }

    function onPlayerInterceptError(value: ESPlayerInterceptError): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onPlayerInterceptError----->>>', value)
      }
    }

    function onBackPressed() {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
      router.back()
    }

    return {
      onESCreate,
      onPlayerLazyInitSuccess,
      onPlayerLazyInitError,
      onPlayerInitialized,
      onPlayerPlayMediaSourceList,
      onPlayerPlayMediaSource,
      onPlayerInterceptSuccess,
      onPlayerInterceptError,
      onPlayerSizeChanged,
      onPlayerPreparing,
      onPlayerPrepared,
      onPlayerBufferStart,
      onPlayerBufferEnd,
      onPlayerPlaying,
      onPlayerProgressChanged,
      onPlayerDurationChanged,
      onPlayerSeekStart,
      onPlayerSeekCompleted,
      onPlayerPaused,
      onPlayerResumed,
      onPlayerStopped,
      onPlayerCompleted,
      onPlayerError,
      onPlayerInfo,
      onPlayerNoMediaSourceCanPlay,
      onPlayerVolumeChanged,
      onPlayerLeftVolumeChanged,
      onPlayerRightVolumeChanged,
      onPlayerDefinitionListChanged,
      onPlayerDefinitionChanged,
      onPlayerPlayRateListChanged,
      onPlayerPlayRateChanged,
      onPlayerDecodeListChanged,
      onPlayerDecodeChanged,
      onPlayerAspectRatioListChanged,
      onPlayerAspectRatioChanged,
      onPlayerPlayMediaSourceListModeListChanged,
      onPlayerPlayMediaSourceListModeChanged,
      onPlayerViewChanged,
      onPlayerClickable,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed
    }
  },
});

</script>

<style>
.es-video-player-page-css {
  position: absolute;
}
</style>
