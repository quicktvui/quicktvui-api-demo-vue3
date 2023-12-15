import {ESApp} from "@extscreen/es3-vue";
import {RequestManager} from "../../request/RequestManager";
import {QTDataSourceKey} from "../useApi";
import {IQTDataSource} from "../IQTDataSource";

export function createQTDataSource(): IQTDataSource {

  let requestManager: RequestManager

  function init(...params: any[]): Promise<any> {
    requestManager = params[0]
    return Promise.resolve()
  }

  function getQTDataList(): Promise<Array<string>> {
    return requestManager.post('/v2/zero/arrange/menu/menuZero', {
      'action': 'menu'
    })
  }

  return {
    install: function (app: ESApp) {
      const instance = this
      app.provide(QTDataSourceKey, instance)
    },
    init,
    getQTDataList,
  }
}


