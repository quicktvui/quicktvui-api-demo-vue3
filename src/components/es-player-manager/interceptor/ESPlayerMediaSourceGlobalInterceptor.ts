import {
  ESIPlayerInterceptor, ESMediaSource,
  ESPlayerInterceptorType,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";

export function createESPlayerMediaSourceGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaSource = params[0] as ESMediaSource
    mediaSource.metadata = '全局拦截器添加的附加信息'
    let result: ESPlayerInterceptResult = {
      result: {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4',
        desc: '拦截器添加的新的字段'
      }
    }
    return Promise.resolve(result)
  }

  function release(): void {
  }

  return {
    id: 'ESPlayerMediaSourceGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE,
    intercept,
    release
  }
}
