<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"
      @onPlayerPlayMediaList="onPlayerPlayMediaList"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerInterceptSuccess="onPlayerInterceptSuccess"
      @onPlayerInterceptError="onPlayerInterceptError"
      @onPlayerNoMediaCanPlay="onPlayerNoMediaCanPlay"
      @onPlayerProgressChanged="onPlayerProgressChanged"
      @onPlayerDurationChanged="onPlayerDurationChanged"
      @onPlayerInitialized="onPlayerInitialized"
      @onPlayerPlayMediaSourceList="onPlayerPlayMediaSourceList"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerNoMediaSourceCanPlay="onPlayerNoMediaSourceCanPlay"
      @onPlayerViewChanged="onPlayerViewChanged"
      @onPlayerViewSizeChanged="onPlayerViewSizeChanged"
      @onPlayerViewClickable="onPlayerViewClickable"
      @onPlayerInfo="onPlayerInfo"
      @onPlayerError="onPlayerError"
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
      @onPlayerDefinitionListChanged="onPlayerDefinitionListChanged"
      @onPlayerDefinitionChanged="onPlayerDefinitionChanged"
      @onPlayerDecodeListChanged="onPlayerDecodeListChanged"
      @onPlayerDecodeChanged="onPlayerDecodeChanged"
      @onPlayerPlayRateListChanged="onPlayerPlayRateListChanged"
      @onPlayerPlayRateChanged="onPlayerPlayRateChanged"
      @onPlayerAspectRatioListChanged="onPlayerAspectRatioListChanged"
      @onPlayerAspectRatioChanged="onPlayerAspectRatioChanged"
      @onPlayerRenderListChanged="onPlayerRenderListChanged"
      @onPlayerRenderChanged="onPlayerRenderChanged"
      @onPlayerPlayMediaListModeListChanged="onPlayerPlayMediaListModeListChanged"
      @onPlayerPlayMediaListModeChanged="onPlayerPlayMediaListModeChanged"
      @onPlayerPlayMediaSourceListModeListChanged="onPlayerPlayMediaSourceListModeListChanged"
      @onPlayerPlayMediaSourceListModeChanged="onPlayerPlayMediaSourceListModeChanged"
      @onPlayerWindowTypeChanged="onPlayerWindowTypeChanged"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放" @onButtonClicked="onPlayButtonClicked"/>
      <s-text-button text="开始" @onButtonClicked="onStartButtonClicked"/>
      <s-text-button text="暂停" @onButtonClicked="onPauseButtonClicked"/>
      <s-text-button text="停止" @onButtonClicked="onStopButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {ref, markRaw} from "vue";
import {
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerAspectRatio,
  ESPlayerDecode,
  ESPlayerDefinition,
  ESPlayerError,
  ESPlayerInfo, ESPlayerInterceptError,
  ESPlayerInterceptResult, ESPlayerLogLevel, ESPlayerPlayMode,
  ESPlayerRate, ESPlayerRender, ESPlayerWindowType,
  useESPlayerLog
} from "@extscreen/es3-player";
import {
  ESIPlayerManager,
  ESMediaItem,
  ESPlayerManager,
  ESMediaItemList
} from "@extscreen/es3-player-manager";
import {ESVideoPlayer} from "@extscreen/es3-video-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '播放事件监听',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESPlayerLog()
    const playerManager = ref<ESIPlayerManager>()
    const playerWidth = 1920
    const playerHeight = 1080

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    const onPlayButtonClicked = () => {
      let mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      let mediaItem: ESMediaItem = {
        playerType: 1,
        mediaSourceList: mediaSourceList,
      }
      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem]
      }
      playerManager.value?.initialize()
      playerManager.value?.playMediaList(playList)
      log.e(TAG, "-------onESCreate-----END----->>>>>")
    }

    const onStartButtonClicked = () => {
      playerManager.value?.start(0)
    }

    const onPauseButtonClicked = () => {
      playerManager.value?.pause()
    }

    const onStopButtonClicked = () => {
      playerManager.value?.stop()
    }

    const onPlayerPlayMediaList = (playList: ESMediaItemList) => {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaList------------->>>>', playList)
      }
    }

    const onPlayerPlayMedia = (mediaItem: ESMediaItem) => {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMedia------------->>>>', mediaItem)
      }
    }
    const onPlayerNoMediaCanPlay = (next: boolean) => {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerNoMediaCanPlay------------->>>>', next)
      }
    }

    function onPlayerProgressChanged(progress): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerProgressChanged------------->>>>', progress)
      }
    }

    function onPlayerDurationChanged(duration): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerDurationChanged------------->>>>', duration)
      }
    }

    function onPlayerInitialized(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerInitialized------------->>>>')
      }
    }

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaSource------------->>>>', mediaSource)
      }
    }

    function onPlayerPlayMediaSourceList(mediaSourceList: ESMediaSourceList): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaSourceList------------->>>>', mediaSourceList)
      }
    }

    function onPlayerInterceptSuccess(result: ESPlayerInterceptResult): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerInterceptSuccess------------->>>>', result)
      }
    }

    function onPlayerInterceptError(result: ESPlayerInterceptError): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerInterceptError------------->>>>', result)
      }
    }

    function onPlayerNoMediaSourceCanPlay(next: boolean): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerNoMediaSourceCanPlay------------->>>>', next)
      }
    }

    function onPlayerViewChanged(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerViewChanged------------->>>>')
      }
    }

    function onPlayerViewSizeChanged(playerWidth: number, playerHeight: number): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerViewSizeChanged------------->>>>playerWidth:' + playerWidth + "   playerHeight:" + playerHeight)
      }
    }

    function onPlayerViewClickable(playerClickable: boolean): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerViewClickable------------->>>>', playerClickable)
      }
    }

    function onPlayerInfo(info: ESPlayerInfo): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerInfo------------->>>>', info)
      }
    }

    function onPlayerError(error: ESPlayerError): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerError------------->>>>', error)
      }
    }

    function onPlayerPreparing(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPreparing------------->>>>')
      }
    }

    function onPlayerPrepared(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPrepared------------->>>>')
      }
    }

    function onPlayerPlaying(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlaying------------->>>>')
      }
    }

    function onPlayerPaused(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPaused------------->>>>')
      }
    }

    function onPlayerResumed(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerResumed------------->>>>')
      }
    }

    function onPlayerStopped(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerStopped------------->>>>')
      }
    }

    function onPlayerCompleted(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerCompleted------------->>>>')
      }
    }

    function onPlayerBufferStart(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerBufferStart------------->>>>')
      }
    }

    function onPlayerBufferEnd(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerBufferEnd------------->>>>')
      }
    }

    function onPlayerSeekStart(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerSeekStart------------->>>>')
      }
    }

    function onPlayerSeekCompleted(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerSeekCompleted------------->>>>')
      }
    }

    function onPlayerLeftVolumeChanged(volume: number): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerLeftVolumeChanged------------->>>>', volume)
      }
    }

    function onPlayerRightVolumeChanged(volume: number): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerRightVolumeChanged------------->>>>', volume)
      }
    }

    function onPlayerVolumeChanged(leftVolume: number, rightVolume: number): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerVolumeChanged------------->>>>leftVolume:' + leftVolume + "   rightVolume:" + rightVolume)
      }
    }

    function onPlayerDefinitionListChanged(definitionList: Array<ESPlayerDefinition>): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerDefinitionListChanged------------->>>>', definitionList)
      }
    }

    function onPlayerDefinitionChanged(definition: ESPlayerDefinition): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerDefinitionChanged------------->>>>', definition)
      }
    }

    function onPlayerDecodeListChanged(decodeList: Array<ESPlayerDecode>): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerDecodeListChanged------------->>>>', decodeList)
      }
    }

    function onPlayerDecodeChanged(decode: ESPlayerDecode): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerDecodeChanged------------->>>>', decode)
      }
    }

    function onPlayerPlayRateListChanged(rateList: Array<ESPlayerRate>): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayRateListChanged------------->>>>', rateList)
      }
    }

    function onPlayerPlayRateChanged(rate: ESPlayerRate): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayRateChanged------------->>>>', rate)
      }
    }

    function onPlayerAspectRatioListChanged(aspectRatioList: Array<ESPlayerAspectRatio>): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerAspectRatioListChanged------------->>>>', aspectRatioList)
      }
    }

    function onPlayerAspectRatioChanged(aspectRatio: ESPlayerAspectRatio): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerAspectRatioChanged------------->>>>', aspectRatio)
      }
    }

    function onPlayerRenderListChanged(renderList: Array<ESPlayerRender>): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerRenderListChanged------------->>>>', renderList)
      }
    }

    function onPlayerRenderChanged(render: ESPlayerRender): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerRenderChanged------------->>>>', render)
      }
    }

    function onPlayerPlayMediaListModeListChanged(playModeList: Array<ESPlayerPlayMode>): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaListModeListChanged------------->>>>', playModeList)
      }
    }

    function onPlayerPlayMediaListModeChanged(playMode: ESPlayerPlayMode): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaListModeChanged------------->>>>', playMode)
      }
    }

    function onPlayerPlayMediaSourceListModeListChanged(playModeList: Array<ESPlayerPlayMode>): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaSourceListModeListChanged------------->>>>', playModeList)
      }
    }

    function onPlayerPlayMediaSourceListModeChanged(playMode: ESPlayerPlayMode): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaSourceListModeChanged------------->>>>', playMode)
      }
    }

    function onPlayerWindowTypeChanged(windowType: ESPlayerWindowType): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerWindowTypeChanged------------->>>>', windowType)
      }
    }

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate---------->>>>>")
    }

    const onESResume = () => {
      log.e(TAG, "-------onESResume---------->>>>>")
      playerManager.value?.resume()
    }

    const onESPause = () => {
      log.e(TAG, "-------onESPause---------->>>>>")
      playerManager.value?.stop()
    }

    const onESStop = () => {
      log.e(TAG, "-------onESStop---------->>>>>")
    }

    const onESDestroy = () => {
      log.e(TAG, "-------onESDestroy---------->>>>>")
      playerManager.value?.release()
    }

    return {
      onPlayButtonClicked,
      onPauseButtonClicked,
      onStartButtonClicked,
      onStopButtonClicked,
      onESCreate,
      onESResume,
      onESPause,
      onESStop,
      onESDestroy,
      playerListRef,
      playerWidth,
      playerHeight,
      playerManager,
      onPlayerPlayMediaList,
      onPlayerPlayMedia,
      onPlayerNoMediaCanPlay,
      onPlayerError,
      onPlayerProgressChanged,
      onPlayerDurationChanged,
      onPlayerInitialized,
      onPlayerPlayMediaSource,
      onPlayerPlayMediaSourceList,
      onPlayerInterceptSuccess,
      onPlayerInterceptError,
      onPlayerNoMediaSourceCanPlay,
      onPlayerViewChanged,
      onPlayerViewSizeChanged,
      onPlayerViewClickable,
      onPlayerInfo,
      onPlayerPreparing,
      onPlayerPrepared,
      onPlayerPlaying,
      onPlayerPaused,
      onPlayerResumed,
      onPlayerStopped,
      onPlayerCompleted,
      onPlayerBufferStart,
      onPlayerBufferEnd,
      onPlayerSeekStart,
      onPlayerSeekCompleted,
      onPlayerLeftVolumeChanged,
      onPlayerRightVolumeChanged,
      onPlayerVolumeChanged,
      onPlayerDefinitionListChanged,
      onPlayerDefinitionChanged,
      onPlayerDecodeListChanged,
      onPlayerDecodeChanged,
      onPlayerPlayRateListChanged,
      onPlayerPlayRateChanged,
      onPlayerAspectRatioListChanged,
      onPlayerAspectRatioChanged,
      onPlayerRenderListChanged,
      onPlayerRenderChanged,
      onPlayerPlayMediaListModeListChanged,
      onPlayerPlayMediaListModeChanged,
      onPlayerPlayMediaSourceListModeListChanged,
      onPlayerPlayMediaSourceListModeChanged,
      onPlayerWindowTypeChanged
    }
  },
});

</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
