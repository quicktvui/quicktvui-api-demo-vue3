<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :player-width="playerWidth"
      :player-height="playerHeight"
      @onPlayerRenderListChanged="onPlayerRenderListChanged"
      @onPlayerRenderChanged="onPlayerRenderChanged"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerInitialized="onPlayerInitialized"
      class="es-video-player-page-css"/>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <span class="es-video-player-text-css" text="渲染方式列表："/>
      <span class="es-video-player-text-css" :text="renderList + '' "/>
      <span class="es-video-player-text-css" text="渲染方式："/>
      <span class="es-video-player-text-css" :text="render + '' "/>
      <span class="es-video-player-text-css" text="          "/>
      <span class="es-video-player-text-css" text="播放索引："/>
      <span class="es-video-player-text-css" :text="playingMediaIndex + '' "/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一源" @onButtonClicked="playPreviousMedia"/>
      <s-text-button text="播放下一源" @onButtonClicked="playNextMedia"/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="SURFACE_VIEW" @onButtonClicked="setSurfaceViewRender"/>
      <s-text-button text="TEXTURE_VIEW" @onButtonClicked="setTextureViewRender"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {useESLog} from "@extscreen/es3-core";
import {ref} from "vue";
import {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerRender
} from "@extscreen/es3-player";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {useESRouter} from "@extscreen/es3-router";

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '渲染方式',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {

    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const renderList = ref([])
    const render = ref('')
    const playingMediaIndex = ref(-1)

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource) {
      playingMediaIndex.value = videoPlayer.value?.getPlayingMediaSourceIndex() ?? -1
    }

    function onPlayerRenderListChanged(list: Array<ESPlayerRender>): void {
      renderList.value = list
    }

    function onPlayerRenderChanged(r: ESPlayerRender): void {
      switch (r) {
        case ESPlayerRender.ES_PLAYER_RENDER_NONE:
          render.value = 'NONE';
          break
        case ESPlayerRender.ES_PLAYER_RENDER_TEXTURE_VIEW:
          render.value = 'TEXTURE_VIEW';
          break
        case ESPlayerRender.ES_PLAYER_RENDER_SURFACE_VIEW:
          render.value = 'SURFACE_VIEW';
          break
      }
    }

    function playPreviousMedia() {
      videoPlayer.value?.playPreviousMediaSource()
    }

    function playNextMedia() {
      videoPlayer.value?.playNextMediaSource()
    }

    //
    function setSurfaceViewRender() {
      videoPlayer.value?.setRender(ESPlayerRender.ES_PLAYER_RENDER_SURFACE_VIEW)
    }

    function setTextureViewRender() {
      videoPlayer.value?.setRender(ESPlayerRender.ES_PLAYER_RENDER_TEXTURE_VIEW)
    }

    const onESCreate = (params) => {
      log.e(TAG, "-------onESCreate------start---->>>>>")
      videoPlayer.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, "-------onESCreate------onPlayerInitialized---->>>>>")
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/01/27/85a658d6-d0ce-4721-adea-f8e2e0b263a7.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4'
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/LIB/VARIETY/2022/03/10/2877b7e1-fda6-4591-aff3-3fd3ba4151cf_transcode_1137855.mp4'
          }
        ]
      }
      log.e(TAG, "-------onPlayerInitialized---------->>>>>", playerType)
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
    }

    function onBackPressed() {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
      router.back()
    }

    return {
      renderList,
      render,
      playingMediaIndex,
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed,
      playPreviousMedia,
      playNextMedia,
      setSurfaceViewRender,
      setTextureViewRender,
      onPlayerPlayMediaSource,
      onPlayerRenderListChanged,
      onPlayerRenderChanged,
    }
  },
});

</script>

<style>
.es-video-player-page-css {
  position: absolute;
}

.es-video-player-text-css {
  color: white;
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>

