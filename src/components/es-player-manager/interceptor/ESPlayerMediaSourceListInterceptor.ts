import {
  ESIPlayerInterceptor, ESMediaSource,
  ESPlayerInterceptorType,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";
import {ESMediaItemList} from "@extscreen/es3-player-manager";

export function createESPlayerMediaSourceListInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaItemList = params[0] as ESMediaItemList
    mediaItemList.metadata = '拦截器添加的附加信息'
    let mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
    }
    let result: ESPlayerInterceptResult = {
      result: {
        list: [mediaSource],
        desc: '拦截器添加的新的字段'
      }
    }
    return Promise.resolve(result)
  }

  function release(): void {
  }

  return {
    id: 'ESPlayerMediaSourceListInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE_LIST,
    intercept,
    release
  }
}
