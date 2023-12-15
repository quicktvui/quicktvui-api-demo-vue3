import {
  ESIPlayerInterceptor, ESMediaSource,
  ESPlayerInterceptorType,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";

export function createESPlayerMediaSourceInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaSource = params[0] as ESMediaSource
    mediaSource.metadata = '拦截器添加的附加信息'
    let result: ESPlayerInterceptResult = {
      result: {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
      }
    }
    return Promise.resolve(result)
  }

  function release(): void {
  }

  return {
    id: 'ESPlayerMediaSourceInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE,
    intercept,
    release
  }
}
