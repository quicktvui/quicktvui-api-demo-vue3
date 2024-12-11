<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      :adPlayerList="adPlayerListRef"
      :adTest="true"
      adChannel="ch"
      :adDebug="true"
      class="es-video-player-manager-page-css"
      @onPlayerPlayList="onPlayerPlayList"
      @onPlayerError="onPlayerError"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerInterceptSuccess="onPlayerInterceptSuccess"
      @onPlayerInterceptError="onPlayerInterceptError"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放" @onButtonClicked="onPlayButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {ref, markRaw} from "vue";
import {
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerError,
  ESPlayerInterceptError,
  ESPlayerInterceptResult,
  useESPlayerLog
} from "@extscreen/es3-player";
import {
  ESIPlayerManager,
  ESMediaItem,
  ESPlayerManager,
  ESMediaItemList
} from "@extscreen/es3-player-manager";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {ESADPlayer, ESADType} from "@extscreen/es3-ad-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '前贴广告',
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

    const adPlayerList = [markRaw(ESADPlayer)]
    const adPlayerListRef = ref(adPlayerList)

    let isPaused = false

    const onPlayButtonClicked = () => {
      let mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
      }
      //视频广告
      let adMediaSource: ESMediaSource = {
        uri: {
          id: 'extscreen-cast',
          mediaId: '1111',
          count: 1,
          type: ESADType.ES_AD_TYPE_LAUNCH,
        }
      }
      //前贴
      let previousRollADList: ESMediaSourceList = {
        index: 0,
        list: [adMediaSource],
        support: true
      }
      //视频
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }

      let mediaItem: ESMediaItem = {
        playerType: 1,
        mediaSourceList: mediaSourceList,
        previousRollADList: previousRollADList,
      }
      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem]
      }
      playerManager.value?.initialize()
      playerManager.value?.playMediaList(playList)
    }

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------START---->>>>>")
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

    const onPlayerPlayList = (playList: ESMediaItemList) => {
      log.e(TAG, "-------onPlayerPlayList---------->>>>>", playList)
    }

    const onPlayerPlayMedia = (mediaItem: ESMediaItem) => {
      log.e(TAG, "-------onPlayerPlayMedia---------->>>>>", mediaItem)
    }

    const onPlayerError = (error: ESPlayerError) => {
      log.e(TAG, "-------onPlayerError---------->>>>>", error)
    }

    const onPlayerInterceptSuccess = (result: ESPlayerInterceptResult) => {
      log.e(TAG, "-------onPlayerInterceptSuccess---------->>>>>", result)
    }

    const onPlayerInterceptError = (error: ESPlayerInterceptError) => {
      log.e(TAG, "-------onPlayerInterceptError---------->>>>>", error)
    }

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      adPlayerListRef,
      playerWidth,
      playerHeight,
      playerManager,
      onPlayerPlayList,
      onPlayerPlayMedia,
      onPlayerError,
      onPlayerInterceptSuccess,
      onPlayerInterceptError,
      onPlayButtonClicked,
    }
  },
});

</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
