<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="创建会话" @onButtonClicked="onCreateButtonClicked"/>
      <s-text-button text="获取当前会话" @onButtonClicked="onGetButtonClicked"/>
      <s-text-button text="销毁会话" @onButtonClicked="onDestroyButtonClicked"/>
      <s-text-button text="玩家是否在线" @onButtonClicked="onOnlineButtonClicked"/>
      <s-text-button text="给玩家发送消息" @onButtonClicked="onSendMessageButtonClicked"/>
      <s-text-button text="广播消息" @onButtonClicked="onBroadcastMessageButtonClicked"/>
      <s-text-button text="广播消息&屏蔽玩家" @onButtonClicked="onBroadcastMessageExcludePlayerButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {
  ESGameCenterConversation,
  ESGameCenterConversationListener,
  ESGameCenterMessage,
  ESGameCenterPlayer,
  useESGameCenter
} from "@extscreen/es3-game-center";

const TAG = 'GameCenterPage'

export default defineComponent({
  name: '消息通信',
  setup() {
    const log = useESLog()
    const gameCenter = useESGameCenter()

    const conversationListener: ESGameCenterConversationListener = {

      onMessage<T extends ESGameCenterMessage>(player: ESGameCenterPlayer, message: T) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------onMessage-------->>>', player, message)
        }
      },

      onMemberLeft(player: ESGameCenterPlayer) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------onMemberLeft-------->>>', player)
        }
      },

      onMemberJoined(player: ESGameCenterPlayer) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------onMemberJoined-------->>>', player)
        }
      }
    }

    const onESCreate = (params) => {
      gameCenter.addListener(conversationListener)
    }
    const onDestroy = () => {
      gameCenter.removeListener(conversationListener)
    }

    function onCreateButtonClicked() {
      gameCenter.createConversation()
        .then((c: ESGameCenterConversation) => {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '------createConversation----success---->>>', c)
          }
        }, error => {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '------createConversation----error---->>>', error)
          }
        })
    }

    function onGetButtonClicked() {
      gameCenter.getConversation()
        .then((c: ESGameCenterConversation) => {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '------getConversation----success---->>>', c)
          }
        }, error => {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '------getConversation----error---->>>', error)
          }
        })
    }

    function onDestroyButtonClicked() {
      gameCenter.destroyConversation()
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '------destroyConversation-------->>>')
      }
    }

    function onOnlineButtonClicked() {
      gameCenter.isOnline({playerId: '1'}).then((online: boolean) => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------isOnline----success---->>>', online)
        }
      }, error => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------isOnline----error---->>>', error)
        }
      })
    }

    function onSendMessageButtonClicked() {
      gameCenter.sendMessage(
        {playerId: '1'}, {
          text: 'hello game center!'
        }).then((ret: boolean) => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------sendMessage----success---->>>', ret)
        }
      }, error => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------sendMessage----error---->>>', error)
        }
      })
    }

    function onBroadcastMessageButtonClicked() {
      gameCenter.broadcastMessage({
        text: 'hello game center!'
      }).then((ret: boolean) => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------broadcastMessage----success---->>>', ret)
        }
      }, error => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------broadcastMessage----error---->>>', error)
        }
      })
    }

    function onBroadcastMessageExcludePlayerButtonClicked() {
      gameCenter.broadcastMessageExcludePlayer(
        {playerId: '1'}, {
          text: 'hello game center!'
        }).then((ret: boolean) => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------broadcastMessageExcludePlayer----success---->>>', ret)
        }
      }, error => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------broadcastMessageExcludePlayer----error---->>>', error)
        }
      })
    }

    return {
      onESCreate,
      onDestroy,
      onCreateButtonClicked,
      onGetButtonClicked,
      onDestroyButtonClicked,
      onOnlineButtonClicked,
      onSendMessageButtonClicked,
      onBroadcastMessageButtonClicked,
      onBroadcastMessageExcludePlayerButtonClicked
    }
  },
});

</script>

<style>
</style>
