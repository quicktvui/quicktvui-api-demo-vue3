import {ESApp} from "@extscreen/es3-vue";

export interface IQTDataSource {

  install(app: ESApp): void

  init(...params: any[]): Promise<any>

  getQTDataList(): Promise<Array<string>>
}

