<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerPlaying="onPlayerPlaying"
      @onPlayerDefinitionListChanged="onPlayerDefinitionListChanged"
      @onPlayerDefinitionChanged="onPlayerDefinitionChanged"
      class="es-video-player-manager-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <span class="es-player-manager-text-css" text="总时长："/>
      <span class="es-player-manager-text-css" :text="duration + '' "/>
      <span class="es-player-manager-text-css" text="当前进度："/>
      <span class="es-player-manager-text-css" :text="progress + '' "/>
    </div>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <span class="es-player-manager-text-css" text="清晰度列表："/>
      <span class="es-player-manager-text-css" :text="definitionList + '' "/>
      <span class="es-player-manager-text-css" text="清晰度："/>
      <span class="es-player-manager-text-css" :text="definition + '' "/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="SD" @onButtonClicked="setDefinitionSD"/>
      <s-text-button text="HD" @onButtonClicked="setDefinitionHD"/>
      <s-text-button text="FULL_HD" @onButtonClicked="setDefinitionFHD"/>
      <s-text-button text="FOURK" @onButtonClicked="setDefinitionFOURK"/>
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
import {ESPlayerDefinition} from "@extscreen/es3-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '清晰度',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const definitionList = ref([])
    const definition = ref(-1)

    const playingMediaIndex = ref(-1)

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    const duration = ref(0)
    const progress = ref(0)
    let durationTimer = null
    let progressTimer = null

    function onPlayerPlayMedia(mediaItem: ESMediaItem) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onPlayerPlayMedia---------->>>>>", mediaItem)
      }
      playingMediaIndex.value = playerManager.value?.getPlayingMediaIndex() ?? -1
    }

    function onPlayerDefinitionListChanged(list: Array<ESPlayerDefinition>): void {
      log.e(TAG, "-------onPlayerDefinitionListChanged---------->>>>>", list)
      definitionList.value = list
    }

    function onPlayerDefinitionChanged(d: ESPlayerDefinition): void {
      log.e(TAG, "-------onPlayerDefinitionChanged---------->>>>>", d)
      definition.value = d;
    }

    //
    function setDefinitionSD() {
      playerManager.value?.setDefinition(ESPlayerDefinition.ES_PLAYER_DEFINITION_SD)
    }

    function setDefinitionHD() {
      playerManager.value?.setDefinition(ESPlayerDefinition.ES_PLAYER_DEFINITION_HD)
    }

    function setDefinitionFHD() {
      playerManager.value?.setDefinition(ESPlayerDefinition.ES_PLAYER_DEFINITION_FULL_HD)
    }

    function setDefinitionFOURK() {
      playerManager.value?.setDefinition(ESPlayerDefinition.ES_PLAYER_DEFINITION_FOURK)
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
            definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_SD,
            uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4'
          },
            {
              definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_HD,
              uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4'
            },
            {
              definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_FULL_HD,
              uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4'
            },
            {
              definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_FOURK,
              uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4'
            }]
        },
      }

      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem_0]
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

    //---------------------------------------------------
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


    return {
      playingMediaIndex,
      definitionList,
      definition,
      setDefinitionSD,
      setDefinitionHD,
      setDefinitionFHD,
      setDefinitionFOURK,
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      onPlayerPlayMedia,
      onPlayerDefinitionListChanged,
      onPlayerDefinitionChanged,
      //
      onPlayerPlaying,
      duration,
      progress
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
