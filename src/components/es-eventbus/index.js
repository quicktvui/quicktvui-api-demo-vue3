import es_eventbus_on_page from './es-eventbus-on-page';
import es_eventbus_emit_page from './es-eventbus-emit-page';
import es_eventbus_off_page from './es-eventbus-off-page';
import es_eventbus_once_page from './es-eventbus-once-page';

const ESEventBusPageList = {
  es_eventbus_on_page: {
    name: '监听事件',
    component: es_eventbus_on_page,
  },
  es_eventbus_once_page: {
    name: '监听一次事件',
    component: es_eventbus_once_page,
  },
  es_eventbus_emit_page: {
    name: '发送事件',
    component: es_eventbus_emit_page,
  },
  es_eventbus_off_page: {
    name: '取消注册事件',
    component: es_eventbus_off_page,
  },
};
export default ESEventBusPageList;
