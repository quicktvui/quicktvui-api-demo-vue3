import {
  ESIPlayerInterceptor, ESMediaSource, ESMediaSourceList,
  ESPlayerInterceptorType,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";
import {ESMediaItemList} from "@extscreen/es3-player-manager";

export function createESPlayerMediaItemListInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaItemList = params[0] as ESMediaItemList
    mediaItemList.metadata = '拦截器添加的附加信息'
    let mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
    }
    let mediaSourceList: ESMediaSourceList = {
      index: 0,
      list: [mediaSource]
    }
    let mediaItem: ESMediaItem = {
      mediaSourceList: mediaSourceList,
    }

    let result: ESPlayerInterceptResult = {
      result: {
        list: [mediaItem],
        desc: '拦截器添加的新的字段'
      }
    }
    return Promise.resolve(result)
    // return Promise.reject('模拟失败')
  }

  function release(): void {
  }

  return {
    id: 'ESPlayerMediaItemListInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM_LIST,
    intercept,
    release
  }
}
