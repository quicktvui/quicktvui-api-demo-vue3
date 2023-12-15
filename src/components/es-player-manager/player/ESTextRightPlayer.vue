<template>
  <div class="es-text-right-player-root-css">
    <span ref="textPlayerRef"
          class="es-text-player-css"
          v-show="visible"
          v-if="playerInitialized">{{ textRef }}</span>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref, watch} from "vue";
import {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerAspectRatio,
  ESPlayerDecode,
  ESPlayerDefinition,
  ESPlayerDurationCallback,
  ESPlayerLogLevel,
  ESPlayerProgressCallback,
  ESPlayerRate,
  useESPlayerLog
} from "@extscreen/es3-player";

const TAG = 'ESTextRightPlayer'

export default defineComponent({
  name: "ESTextRightPlayer",
  props: {
    playerType: {
      type: Number,
      default: 11
    },
    playMediaSourceAuto: {
      type: Boolean,
      default: true
    },
    playMediaSourceListMode: {
      type: Number,
      default: 0
    },
    playerWidth: {
      type: Number,
      default: 1920
    },
    playerHeight: {
      type: Number,
      default: 1080
    },
    playerZIndex: {
      type: Number,
      default: 1
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
  },
  type: 11,//自定义播放器的类型为3
  setup(props, context) {

    const textPlayerRef = ref<ESIPlayer>()
    const textRef = ref<string>('')
    const log = useESPlayerLog()
    const playerInitialized = ref(false)
    const visible = ref<boolean>(true)

    watch(
      () => [textPlayerRef.value] as const,
      ([instance], [oldInstance]) => {
        if (instance) {
          onPlayerInitializeSuccess()
        }
      },
      {flush: 'post'}
    )

    let mediaSourceList: ESMediaSourceList
    let mediaSourceIndex: number = 0
    let mediaSource: ESMediaSource

    function onPlayerInitializeSuccess(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, "-----onPlayerInitializeSuccess----->>>");
      }
      context.emit('onPlayerInitialized', getType());
    }

    function getType(): number {
      return 11
    }


    function getComponentInfo(): void {
      //do nothing
    }

    function initComponent(...params: Array<any>): void {
      //do nothing
    }

    function setVisible(value: boolean): void {
      visible.value = value
    }

    function initialize(): void {
      playerInitialized.value = true
    }

    function isInitialized(): boolean {
      return playerInitialized.value
    }

    function playMediaSourceList(list: ESMediaSourceList): void {
      mediaSourceList = list
      playMediaSourceByIndex(list.index)
    }

    function playMediaSourceByIndex(index: number): void {
      mediaSourceIndex = index
      playMediaSource(mediaSourceList.list[mediaSourceIndex])
    }

    function playMediaSourceById(id: string): void {
      //do nothing
    }

    function playMediaSource(source: ESMediaSource): void {
      mediaSource = source
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, "-----playMediaSource----->>>", source);
      }
      play()
    }

    function playNextMediaSource(): void {
      //do nothing
    }

    function playPreviousMediaSource(): void {
      //do nothing
    }

    function play(...params: Array<any>): void {
      textRef.value = mediaSource.uri
    }

    function start(position: number): void {
      //do nothing
    }

    function pause(): void {
      //do nothing
    }

    function resume(): void {
      //do nothing
    }

    function stop(): void {
    }

    function reset(): void {
      //do nothing
    }

    function release(): void {
      //do nothing
    }

    function seekTo(progress: number): void {
      //do nothing
    }

    function getDuration(): void {
      //do nothing
    }

    function getCurrentPosition(): void {
      //do nothing
    }

    function setSize(width: number, height: number): void {
      props.playerWidth = width
      props.playerHeight = height
    }

    function setPlayRate(playRate: ESPlayerRate): void {
      //do nothing
    }

    function setDefinition(definition: ESPlayerDefinition): void {
      //do nothing
    }

    function setDecode(decode: ESPlayerDecode): void {
      //do nothing
    }

    function setAspectRatio(aspectRatio: ESPlayerAspectRatio): void {
      //do nothing
    }

    function getLeftVolume(): void {
      //do nothing
    }

    function getRightVolume(): void {
      //do nothing
    }

    function setLeftVolume(leftVolume: number): void {
      //do nothing
    }

    function setRightVolume(rightVolume: number): void {
      //do nothing
    }

    function setStopped(stopped: boolean): void {
      //do nothing
    }

    function setEnabled(enabled: boolean): void {
      //do nothing
    }

    function setProgressCallback(callback: ESPlayerProgressCallback): void {
      //do nothing
    }

    function setDurationCallback(callback: ESPlayerDurationCallback): void {
      //do nothing
    }

    function invalidate(): void {
      //do nothing
    }

    return {
      textRef,
      textPlayerRef,
      playerInitialized,
      visible,
      getType,
      getComponentInfo,
      initComponent,
      setVisible,
      initialize,
      isInitialized,
      playMediaSourceList,
      playMediaSourceByIndex,
      playMediaSourceById,
      playMediaSource,
      playNextMediaSource,
      playPreviousMediaSource,
      play,
      start,
      pause,
      resume,
      stop,
      reset,
      release,
      seekTo,
      getDuration,
      getCurrentPosition,
      setSize,
      setPlayRate,
      setDefinition,
      setDecode,
      setAspectRatio,
      getLeftVolume,
      getRightVolume,
      setLeftVolume,
      setRightVolume,
      setStopped,
      setEnabled,
      setProgressCallback,
      setDurationCallback,
      invalidate
    }
  },
});
</script>

<style scoped>
.es-text-right-player-root-css {
  width: 960px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: green;
  position: absolute;
  right: 0;
}

.es-text-player-css {
  width: 960px;
  height: 1080px;
  font-size: 200px;
}
</style>
