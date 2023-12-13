import router_zero_page from './es-router-zero-page';
import router_first_page from './es-router-first-page';
import router_second_page from './es-router-second-page';
import router_third_page from './es-router-third-page';
import router_four_page from './es-router-four-page';
import router_five_page from './es-router-five-page';
import router_six_page from './es-router-six-page';
import router_seven_page from './es-router-seven-page';
import router_native_page from './es-router-native-page';

const ESRouterESList = {
  router_zero_page: {
    name: "第零个页面",
    component: router_zero_page,
    launchMode: 'router_zero_page'
  },

  router_first_page: {
    name: "第一个页面",
    component: router_first_page,
    launchMode: 'router_first_page'
  },

  router_second_page: {
    name: "第二个页面",
    component: router_second_page,
    launchMode: 'router_second_page'
  },

  router_third_page: {
    name: "第三个页面",
    component: router_third_page,
    launchMode: 'router_third_page'
  },

  router_four_page: {
    name: "第四个页面",
    component: router_four_page,
    launchMode: 'router_four_page'
  },

  router_five_page: {
    name: "第五个页面",
    component: router_five_page,
    launchMode: 'router_five_page'
  },

  router_six_page: {
    name: "第六个页面",
    component: router_six_page,
    launchMode: 'router_six_page'
  },

  router_seven_page: {
    name: "第七个页面",
    component: router_seven_page,
    launchMode: 'router_seven_page'
  },
  router_native_page: {
    name: "Native页面",
    component: router_native_page,
  },
};
export default ESRouterESList;
