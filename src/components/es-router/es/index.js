import {ESRouteLaunchMode, ESRouteType} from "@extscreen/es3-router";
import router_zero_page from './es-router-zero-page';
import router_first_page from './es-router-first-page';
import router_second_page from './es-router-second-page';
import router_third_page from './es-router-third-page';
import router_four_page from './es-router-four-page';
import router_five_page from './es-router-five-page';
import router_six_page from './es-router-six-page';
import router_seven_page from './es-router-seven-page';
import router_native_page from './es-router-native-page';
import router_dialog_one_page from './es-router-dialog-one-page';
import router_dialog_two_page from './es-router-dialog-two-page';

const ESRouterESList = {
  router_dialog_one_page: {
    name: "弹窗一",
    component: router_dialog_one_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD,
    type: ESRouteType.ES_ROUTE_TYPE_DIALOG
  },

  router_dialog_two_page: {
    name: "弹窗二",
    component: router_dialog_two_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD,
    type: ESRouteType.ES_ROUTE_TYPE_DIALOG
  },

  router_zero_page: {
    name: "第零个页面",
    component: router_zero_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },

  router_first_page: {
    name: "第一个页面",
    component: router_first_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },

  router_second_page: {
    name: "第二个页面",
    component: router_second_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_SINGLE_TASK,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },

  router_third_page: {
    name: "第三个页面",
    component: router_third_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_CLEAR_TASK,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },

  router_four_page: {
    name: "第四个页面",
    component: router_four_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },

  router_five_page: {
    name: "第五个页面",
    component: router_five_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_SINGLE_TASK,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },

  router_six_page: {
    name: "第六个页面",
    component: router_six_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },

  router_seven_page: {
    name: "第七个页面",
    component: router_seven_page,
    launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },
  router_native_page: {
    name: "Native页面",
    component: router_native_page,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },
};
export default ESRouterESList;
