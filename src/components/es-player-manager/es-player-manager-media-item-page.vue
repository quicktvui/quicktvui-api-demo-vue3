<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playMediaAuto="false"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"
      @onPlayerPlayMediaList="onPlayerPlayMediaList"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerNoMediaCanPlay="onPlayerNoMediaCanPlay"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerNoMediaSourceCanPlay="onPlayerNoMediaSourceCanPlay"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="向前添加MediaItem" @onButtonClicked="addMediaToFirst"/>
      <s-text-button text="向后添加MediaItem" @onButtonClicked="addMediaToLast"/>
      <s-text-button text="指定位置添加MediaItem" @onButtonClicked="addMediaToIndex"/>
      <s-text-button text="替换MediaItem" @onButtonClicked="replaceMedia"/>
      <s-text-button text="重新设置播放列表" @onButtonClicked="playMediaList"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import {markRaw, ref} from "vue";
import {ESMediaSource, ESMediaSourceList} from "@extscreen/es3-player";
import {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
  ESPlayerManager
} from "@extscreen/es3-player-manager";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ESVideoPlayer} from "@extscreen/es3-video-player";

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '操作播放列表',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup: function (props, context) {

    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    let index = 10
    let firstIndex = 10

    //----------------------------------------------------------

    function buildMediaItemList(id: string): Array<ESMediaItem> {
      let mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      let mediaItem: ESMediaItem = {
        id: id,
        mediaSourceList: mediaSourceList,
      }
      const mediaItemList: Array<ESMediaItem> = [mediaItem]
      return mediaItemList
    }

    //----------------------------------------------------------
    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>")
      }
      isPaused = false
      let playList: ESMediaItemList = {
        index: 0,
        list: []
      }
      playerManager.value?.initialize()
      playerManager.value?.playMediaList(playList)
    }

    //---------------------------------------------------------------------
    /**
     * 向前添加MediaItem
     */
    function addMediaToFirst() {
      firstIndex--
      const itemList = buildMediaItemList(firstIndex + '')
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------addMediaToFirst---START------->>>>>", itemList)
      }
      playerManager.value?.addMediaToFirst(itemList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------addMediaToFirst---END------->>>>>", playerManager.value?.getMediaList())
      }
    }

    function addMediaToLast() {
      index++
      const itemList = buildMediaItemList(index + '')
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------addMediaToLast-----START----->>>>>", itemList)
      }
      playerManager.value?.addMediaToLast(itemList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------addMediaToLast------END---->>>>>", playerManager.value?.getMediaList())
      }
    }

    function addMediaToIndex() {
      const itemList = buildMediaItemList('3')
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------addMediaToIndex------START---->>>>>", itemList)
      }
      playerManager.value?.addMediaToIndex(1, itemList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------addMediaToIndex------END---->>>>>", playerManager.value?.getMediaList())
      }
    }

    function replaceMedia() {
      const itemList = buildMediaItemList('2000')
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------replaceMedia------START---->>>>>", itemList)
      }
      playerManager.value?.replaceMedia(0, itemList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------replaceMedia------END---->>>>>", playerManager.value?.getMediaList())
      }
    }

    function playMediaList() {
      const itemList = buildMediaItemList('5000')
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------playMediaList------START---->>>>>", itemList)
      }
      let playList: ESMediaItemList = {
        index: 0,
        list: itemList
      }
      playerManager.value?.playMediaList(playList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------playMediaList------END---->>>>>", playerManager.value?.getMediaList())
      }
    }

    //---------------------------------------------------------------------
    const onPlayerPlayMediaList = (playList: ESMediaItemList) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaList------------->>>>', playList)
      }
    }

    const onPlayerPlayMedia = (mediaItem: ESMediaItem) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMedia------------->>>>', mediaItem)
      }
    }
    const onPlayerNoMediaCanPlay = (next: boolean) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerNoMediaCanPlay------------->>>>', next)
      }
    }

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerPlayMediaSource------------->>>>', mediaSource)
      }
    }

    function onPlayerNoMediaSourceCanPlay(next: boolean): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onPlayerNoMediaSourceCanPlay------------->>>>', next)
      }
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
      addMediaToFirst,
      addMediaToLast,
      addMediaToIndex,
      replaceMedia,
      playMediaList,
      onPlayerPlayMediaList,
      onPlayerPlayMedia,
      onPlayerNoMediaCanPlay,
      onPlayerPlayMediaSource,
      onPlayerNoMediaSourceCanPlay
    }
  },
});

</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
