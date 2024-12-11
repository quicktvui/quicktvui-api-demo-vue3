import {
  ESIPlayerInterceptor, ESMediaSource, ESMediaSourceList,
  ESPlayerInterceptorType,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";
import {ESMediaItem} from "@extscreen/es3-player-manager";

export function createESPlayerMediaItemInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaItem = params[0] as ESMediaItem
    mediaItem.metadata = '拦截器添加的附加信息'

    let mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
    }
    let mediaSourceList: ESMediaSourceList = {
      index: 0,
      list: [mediaSource]
    }

    let result: ESPlayerInterceptResult = {
      result: {
        mediaSourceList: mediaSourceList,
        text: '拦截器添加的附加字段'
      }
    }
    return Promise.resolve(result)
  }

  function release(): void {
  }

  return {
    id: 'ESPlayerMediaItemInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM,
    intercept,
    release
  }
}
