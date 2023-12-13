import {
  ESIPlayerInterceptor, ESMediaSource, ESMediaSourceList,
  ESPlayerInterceptorType,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";

export function createESPlayerMediaSourceListGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaSourceList = params[0] as ESMediaSourceList
    mediaSourceList.metadata = '全局拦截器添加的附加信息'
    let mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4'
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
    id: 'ESPlayerMediaSourceListGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE_LIST,
    intercept,
    release
  }
}
