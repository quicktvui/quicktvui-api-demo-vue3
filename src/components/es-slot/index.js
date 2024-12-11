import es_slot_back from './es-slot-back';
import es_slot_event from './es-slot-event';
import es_slot_key from './es-slot-key';
import es_slot_lifecycle from './es-slot-lifecycle';
import es_slot_module_device from './es-slot-module-device';
import es_slot_suspend from './es-slot-suspend';

const ESSlotPageList = {
  es_slot_lifecycle: {
    name: 'JSView生命周期',
    component: es_slot_lifecycle,
  },
  es_slot_event: {
    name: 'JSView事件通信',
    component: es_slot_event,
  },
  es_slot_back: {
    name: 'JSView返回键',
    component: es_slot_back,
  },
  es_slot_key: {
    name: 'JSView按键',
    component: es_slot_key,
  },
  es_slot_module_device: {
    name: 'JSView设备信息模块',
    component: es_slot_module_device,
  },
  es_slot_suspend: {
    name: 'JSView Suspend',
    component: es_slot_suspend,
  },
};
export default ESSlotPageList;
