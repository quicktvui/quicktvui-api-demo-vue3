import es_async_component_page from './es-async-component-page';
import es_remote_component_page from './es-remote-component-page';
import es_component_page from './es-component-page';

const ESComponentPageList = {
  es_component_page: {
    name: '异步加载',
    component: es_component_page,
  },
  es_async_component_page: {
    name: '异步组件',
    component: es_async_component_page,
  },
  es_remote_component_page: {
    name: '远程组件',
    component: es_remote_component_page,
  },
};
export default ESComponentPageList;
