<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerDefinitionListChanged="onPlayerDefinitionListChanged"
      @onPlayerDefinitionChanged="onPlayerDefinitionChanged"
      class="es-video-player-manager-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
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
  name: '画面比例',
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
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4'
          },
            {
              definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_HD,
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/01/27/85a658d6-d0ce-4721-adea-f8e2e0b263a7.mp4'
            },
            {
              definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_FULL_HD,
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4'
            },
            {
              definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_FOURK,
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/LIB/VARIETY/2022/03/10/2877b7e1-fda6-4591-aff3-3fd3ba4151cf_transcode_1137855.mp4'
            }]
        },
      }

      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem_0]
      }
      playerManager.value?.initialize()
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
      playerManager.value?.stop()
    }
    const onESDestroy = () => {
      log.e(TAG, "-------onESDestroy---------->>>>>")
      playerManager.value?.release()
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
