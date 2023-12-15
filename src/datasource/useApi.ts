import {inject, InjectionKey} from 'vue'
import {IQTDataSource} from "./IQTDataSource";

export const QTDataSourceKey = Symbol('QTDataSourceKey') as InjectionKey<IQTDataSource>

export function useQTDataSource(): IQTDataSource {
  return inject(QTDataSourceKey)!
}
