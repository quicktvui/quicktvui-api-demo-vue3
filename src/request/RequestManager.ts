//
import {ESApp} from "@extscreen/es3-vue";
import {RequestManagerKey} from "./useApi";
import {
  ESLog, ESLogLevel,
} from "@extscreen/es3-core";
import {RequestData} from "./RequestData";
import BuildConfig from "../build/BuildConfig";

export interface RequestManager {
  install(app: ESApp): void

  init(...params: any[]): Promise<any>

  post<T>(url: string, data?: RequestData): Promise<T>

  get<T>(url: string, data?: RequestData): Promise<T>
}

//
const TAG = 'RequestManager'

export function createRequestManager(): RequestManager {

  let requestBaseUrl = BuildConfig.requestBaseUrl

  let log: ESLog

  function init(...params: any[]): Promise<any> {
    log = params[0]
    return Promise.resolve()
  }

  function post<T>(url: string, data: RequestData): Promise<T> {
    return request('POST', requestBaseUrl, url, data)
  }

  function get<T>(url: string, data: RequestData): Promise<T> {
    return request('GET', requestBaseUrl, url, data)
  }

  function request<T>(method: string, baseUrl: string, url: string, data: RequestData): Promise<T> {
    return new Promise((resolve, reject) => {
      let requestUrl = baseUrl + url
      //
      let requestData = data
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '################### REQUEST START ########################')
        log.d(TAG, 'requestUrl:' + requestUrl)
        log.d(TAG, 'requestData:' + JSON.stringify(requestData))
        log.d(TAG, '################### REQUEST END ########################')
      }

      let requestInit: RequestInit
      if (method == 'GET') {
        if (data) {
          try {
            requestUrl += '?'
            for (let key in data) {
              requestUrl += key + '=' + data[key] + '&'
            }
            requestUrl = requestUrl.substring(0, requestUrl.length - 1)
          } catch (e) {
          }
        }
        requestInit = {
          method: method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      } else {
        requestInit = {
          method: method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData)
        }
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------request-------------->>>>requestUrl:' + requestUrl)
      }
      fetch(requestUrl, requestInit).then((response) => {
        return response.json()
      }).then((responseJson) => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '################### RESPONSE START ########################')
          log.d(TAG, 'response:' + JSON.stringify(responseJson))
          log.d(TAG, '################### RESPONSE END   ########################')
        }
        if (responseJson.data) {
          resolve(responseJson.data)
        } else {
          reject({
            code: responseJson.code,
            message: responseJson.message
          })
        }
      }).catch(error => {
        reject({
          code: '-1',
          message: '发生错误，请稍后重试！' + error
        })
      })
    })
  }

  return {
    install: function (app: ESApp) {
      const instance = this
      app.provide(RequestManagerKey, instance)
    },
    init,
    post,
    get,
  }
}
