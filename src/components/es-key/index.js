import es_back_pressed_page from './es-backpressed-page';
import es_key_event_page from './es-keyevent-page';
import es_dispatch_key_event_page from './es-dispatch-keyevent-page';

const ESKeyPageList = {
  es_back_pressed_page: {
    name: '返回键',
    component: es_back_pressed_page,
  },
  es_key_event_page: {
    name: '按键',
    component: es_key_event_page,
  },
  es_dispatch_key_event_page: {
    name: '监听按键分发',
    component: es_dispatch_key_event_page,
  },
};
export default ESKeyPageList;
