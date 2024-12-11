import {
  ESIPlayerInterceptor, ESMediaSource, ESMediaSourceList,
  ESPlayerInterceptorType,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";
import {ESMediaItem} from "@extscreen/es3-player-manager";

export function createESPlayerMediaItemGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    //1.
    const item = params[0] as ESMediaItem
    item.metadata = '全局拦截器添加的附加信息'

    //2.
    let mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4'
    }
    let mediaSourceList: ESMediaSourceList = {
      index: 0,
      list: [mediaSource]
    }

    let result: ESPlayerInterceptResult = {
      result: {
        mediaSourceList: mediaSourceList,
        desc: '全局拦截器添加的附加字段'
      }
    }
    return Promise.resolve(result)
  }

  function release(): void {
  }

  return {
    id: 'ESPlayerMediaItemGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM,
    intercept,
    release
  }
}
