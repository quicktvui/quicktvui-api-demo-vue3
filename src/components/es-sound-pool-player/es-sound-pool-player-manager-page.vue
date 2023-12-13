<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {markRaw, ref} from "vue";
import {ESMediaSource, ESMediaSourceList} from "@extscreen/es3-player";
import {ESIPlayerManager, ESMediaItem, ESMediaItemList, ESPlayerManager} from "@extscreen/es3-player-manager";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ESSoundPoolPlayer} from "@extscreen/es3-soundpool-player";

const TAG = 'ESSoundPoolPlayerManagerPage'

export default defineComponent({
  name: 'SoundPool播放管理器',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESSoundPoolPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>")
      }
      isPaused = false
      let mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/audios/ifengfm/1898049/9644712/2ff957624598b7b105d5c86b809c854c.mp3'
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      let mediaItem: ESMediaItem = {
        mediaSourceList: mediaSourceList,
        playerType: 8 //TODO 类型为8
      }
      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem]
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
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
    }
  },
});

</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
