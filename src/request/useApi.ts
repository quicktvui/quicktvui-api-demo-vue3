import {inject, InjectionKey} from 'vue'
import {RequestManager} from "./RequestManager";

export const RequestManagerKey = Symbol('RequestManagerKey') as InjectionKey<RequestManager>

export function useRequestManager(): RequestManager {
    return inject(RequestManagerKey)!
}
