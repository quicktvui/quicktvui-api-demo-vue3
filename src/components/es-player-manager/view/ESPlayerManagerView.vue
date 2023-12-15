<template>
  <div class="es-player-view-root-css">
    <span class="es-player-view-content-text-css">
    {{ contentText }}
  </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {ESMediaItemList, ESMediaItem} from "@extscreen/es3-player-manager";
import {ESKeyEvent} from "@extscreen/es3-core";
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
  ESPlayerInterceptResult, ESPlayerRate,
  ESPlayerPlayMode, ESPlayerWindowType
} from "@extscreen/es3-player";

export default defineComponent({
  name: '自定义播放器视图',
  setup() {
    const contentText = ref<string>('播放器事件回调：\n')

    let enabled = true
    let player: ESIPlayer

    function getId(): string {
      return 'ESPlayerManagerView'
    }

    function setEnabled(value: boolean): void {
      enabled = value
    }

    function isEnabled(): boolean {
      return enabled;
    }

    function setPlayer(value: ESIPlayer): void {
      player = value
      contentText.value = contentText.value + 'player:' + player + '\n'
    }

    function getPlayer(): ESIPlayer {
      return player
    }

    function onPlayerInitialized(playerType: number): void {
      contentText.value = contentText.value + 'onPlayerInitialized:' + playerType + '\n'
    }

    function onPlayerPlayMediaSourceList(mediaSourceList: ESMediaSourceList): void {
      contentText.value = contentText.value + 'onPlayerPlayMediaSourceList:' + JSON.stringify(mediaSourceList) + '\n'
    }

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource): void {
      contentText.value = contentText.value + 'onPlayerPlayMediaSource:' + JSON.stringify(mediaSource) + '\n'
    }

    function onPlayerInterceptSuccess(value: ESPlayerInterceptResult): void {
      contentText.value = contentText.value + 'onPlayerInterceptSuccess:' + JSON.stringify(value) + '\n'
    }

    function onPlayerInterceptError(value: ESPlayerInterceptError): void {
      contentText.value = contentText.value + 'onPlayerInterceptError:' + JSON.stringify(value) + '\n'
    }

    function onPlayerPreparing(): void {
      contentText.value = contentText.value + 'onPlayerPreparing' + '\n'
    }

    function onPlayerPrepared(): void {
      contentText.value = contentText.value + 'onPlayerPrepared' + '\n'
    }

    function onPlayerBufferStart(): void {
      contentText.value = contentText.value + 'onPlayerBufferStart' + '\n'
    }

    function onPlayerBufferEnd(): void {
      contentText.value = contentText.value + 'onPlayerBufferEnd' + '\n'
    }

    function onPlayerPlaying(): void {
      contentText.value = contentText.value + 'onPlayerPlaying' + '\n'
    }

    function onPlayerProgressChanged(progress: number): void {
      contentText.value = contentText.value + 'onPlayerProgressChanged:' + progress + '\n'
    }

    function onPlayerDurationChanged(duration: number): void {
      contentText.value = contentText.value + 'onPlayerDurationChanged:' + duration + '\n'
    }

    function onPlayerSeekStart(): void {
      contentText.value = contentText.value + 'onPlayerSeekStart' + '\n'
    }

    function onPlayerSeekCompleted(): void {
      contentText.value = contentText.value + 'onPlayerSeekCompleted' + '\n'
    }

    function onPlayerPaused(): void {
      contentText.value = contentText.value + 'onPlayerPaused' + '\n'
    }

    function onPlayerResumed(): void {
      contentText.value = contentText.value + 'onPlayerResumed' + '\n'
    }

    function onPlayerStopped(): void {
      contentText.value = contentText.value + 'onPlayerStopped' + '\n'
    }

    function onPlayerCompleted(): void {
      contentText.value = contentText.value + 'onPlayerCompleted' + '\n'
    }

    function onPlayerError(error: ESPlayerError): void {
      contentText.value = contentText.value + 'onPlayerError:' + JSON.stringify(error) + '\n'
    }

    function onPlayerInfo(info: ESPlayerInfo): void {
      contentText.value = contentText.value + 'onPlayerInfo:' + JSON.stringify(info) + '\n'
    }

    function onPlayerNoMediaSourceCanPlay(next: boolean): void {
      contentText.value = contentText.value + 'onPlayerNoMediaSourceCanPlay:' + next + '\n'
    }

    function onPlayerVolumeChanged(leftVolume: number, rightVolume: number): void {
      contentText.value = contentText.value + 'onPlayerVolumeChanged:' + leftVolume + " " + rightVolume + '\n'
    }

    function onPlayerLeftVolumeChanged(leftVolume: number): void {
      contentText.value = contentText.value + 'onPlayerLeftVolumeChanged:' + leftVolume + '\n'
    }

    function onPlayerRightVolumeChanged(rightVolume: number): void {
      contentText.value = contentText.value + 'onPlayerRightVolumeChanged:' + rightVolume + '\n'
    }

    function onPlayerDefinitionListChanged(definitionList: Array<ESPlayerDefinition>): void {
      contentText.value = contentText.value + 'onPlayerDefinitionListChanged:' + JSON.stringify(definitionList) + '\n'
    }

    function onPlayerDefinitionChanged(definition: ESPlayerDefinition): void {
      contentText.value = contentText.value + 'onPlayerDefinitionChanged:' + JSON.stringify(definition) + '\n'
    }

    function onPlayerPlayRateListChanged(rateList: Array<ESPlayerRate>): void {
      contentText.value = contentText.value + 'onPlayerPlayRateListChanged:' + JSON.stringify(rateList) + '\n'
    }

    function onPlayerPlayRateChanged(rate: ESPlayerRate): void {
      contentText.value = contentText.value + 'onPlayerPlayRateChanged:' + JSON.stringify(rate) + '\n'
    }

    function onPlayerDecodeListChanged(decodeList: Array<ESPlayerDecode>): void {
      contentText.value = contentText.value + 'onPlayerDecodeListChanged:' + JSON.stringify(decodeList) + '\n'
    }

    function onPlayerDecodeChanged(decode: ESPlayerDecode): void {
      contentText.value = contentText.value + 'onPlayerDecodeChanged:' + JSON.stringify(decode) + '\n'
    }

    function onPlayerAspectRatioListChanged(aspectRatioList: Array<ESPlayerAspectRatio>): void {
      contentText.value = contentText.value + 'onPlayerAspectRatioListChanged:' + JSON.stringify(aspectRatioList) + '\n'
    }

    function onPlayerAspectRatioChanged(aspectRatio: ESPlayerAspectRatio): void {
      contentText.value = contentText.value + 'onPlayerAspectRatioChanged:' + JSON.stringify(aspectRatio) + '\n'
    }

    function onPlayerPlayModeListChanged(modeList: Array<ESPlayerPlayMode>): void {
      contentText.value = contentText.value + 'onPlayerPlayModeListChanged:' + JSON.stringify(modeList) + '\n'
    }

    function onPlayerPlayModeChanged(mode: ESPlayerPlayMode): void {
      contentText.value = contentText.value + 'onPlayerPlayModeChanged:' + JSON.stringify(mode) + '\n'
    }

    function onPlayerViewChanged(): void {
      contentText.value = contentText.value + 'onPlayerViewChanged' + '\n'
    }

    function onPlayerSizeChanged(playerWidth: number, playerHeight: number): void {
      contentText.value = contentText.value + 'onPlayerSizeChanged:' + playerWidth + " " + playerHeight + '\n'
    }

    function onPlayerClickable(playerClickable: boolean): void {
      contentText.value = contentText.value + 'onPlayerClickable:' + playerClickable + '\n'
    }

    function onPlayerPlayMediaList(playList: ESMediaItemList): void {
      contentText.value = contentText.value + 'onPlayerPlayMediaList:' + JSON.stringify(playList) + '\n'
    }

    function onPlayerPlayMedia(mediaItem: ESMediaItem): void {
      contentText.value = contentText.value + 'onPlayerPlayMedia:' + JSON.stringify(mediaItem) + '\n'
    }

    function onPlayerNoMediaCanPlay(next: boolean): void {
      contentText.value = contentText.value + 'onPlayerNoMediaCanPlay:' + next + '\n'
    }

    function onPlayerWindowTypeChanged(windowType: ESPlayerWindowType): void {
      contentText.value = contentText.value + 'onPlayerWindowTypeChanged:' + JSON.stringify(windowType) + '\n'
    }

    function onPlayerWindowSizeChanged(playerWidth: number, playerHeight: number): void {
      contentText.value = contentText.value + 'onPlayerWindowSizeChanged:' + playerWidth + " " + playerHeight + '\n'
    }

    function onKeyDown(keyEvent: ESKeyEvent): boolean {
      contentText.value = contentText.value + 'onKeyDown:' + JSON.stringify(keyEvent) + '\n'
      return true
    }

    function onKeyUp(keyEvent: ESKeyEvent): boolean {
      contentText.value = contentText.value + 'onKeyUp:' + JSON.stringify(keyEvent) + '\n'
      return true
    }

    function onBackPressed(): boolean {
      contentText.value = contentText.value + 'onBackPressed' + '\n'
      return true
    }

    return {
      contentText,
      getId,
      setEnabled,
      isEnabled,
      setPlayer,
      getPlayer,
      onPlayerInitialized,
      onPlayerPlayMediaSourceList,
      onPlayerPlayMediaSource,
      onPlayerInterceptSuccess,
      onPlayerInterceptError,
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
      onPlayerPlayModeListChanged,
      onPlayerPlayModeChanged,
      onPlayerViewChanged,
      onPlayerSizeChanged,
      onPlayerClickable,
      onPlayerPlayMediaList,
      onPlayerPlayMedia,
      onPlayerNoMediaCanPlay,
      onPlayerWindowTypeChanged,
      onPlayerWindowSizeChanged,
      onKeyDown,
      onKeyUp,
      onBackPressed,
    }
  },
});
</script>

<style scoped>
.es-player-view-root-css {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
}

.es-player-view-content-text-css {
  margin: 50px;
  width: 1920px;
  font-size: 25px;
  color: red;
}

</style>
