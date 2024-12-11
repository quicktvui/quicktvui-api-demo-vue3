import {
  ESIPlayerInterceptor, ESMediaSource, ESMediaSourceList,
  ESPlayerInterceptorType,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";
import {ESMediaItemList} from "@extscreen/es3-player-manager";

export function createESPlayerMediaItemListGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaItemList = params[0] as ESMediaItemList
    mediaItemList.metadata = '全局拦截器添加的附加信息'
    let mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4'
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
    id: 'ESPlayerMediaItemListGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM_LIST,
    intercept,
    release
  }
}
