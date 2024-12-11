<template>
  <div class="es-sdk-root-css" ref="routerRootView">
    <s-title-view class="es-sdk-content-title-css" :text="now +  this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <es-router-lifecycle-text ref="routeLifecycleText"/>
      <es-router-title/>
      <es-router-content :stack="stackRef"/>
    </div>
  </div>
</template>

<script>
import ESRouterLifecycleText from '../component/es-router-lifecycle-text'
import ESRouterTitle from '../component/es-router-title'
import ESRouterContent from '../component/es-router-content'

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {useESRouter} from "@extscreen/es3-router";

export default defineComponent({
  name: '第零个页面',
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next()
    console.log('---beforeRouteEnter----第零个页面-->>>>', to, from)
  },
  beforeRouteUpdate(to, from, next) {
    // 以动态路由的方式（如`/foo/:id`），再次访问到当前组件时，调用beforeRouteUpdate
    // 可以访问组件实例 `this`
    console.log('---beforeRouteUpdate---第零个页面--->>>>', to, from)
    next();
  },
  setup() {

    const routerRootView = ref()
    const routeLifecycleText = ref()
    const now = ref(new Date().getTime())

    const stackRef = ref([])
    const router = useESRouter();

    function onESCreate(params) {
      console.log('-------第零个页面------onESCreate----------->>>>')
      routeLifecycleText.value.appendLifecycle('onESCreate')
      console.log('---第零个页面---onESCreate---生命周期--->>>>' +
        'ref:', routerRootView, params)
    }

    function onESStart() {
      routeLifecycleText.value.appendLifecycle('onESStart')
      console.log('---第零个页面---onESStart---生命周期--->>>>' + 'ref:', routerRootView)
    }

    function onESNewIntent(intent) {
      routeLifecycleText.value.appendLifecycle('onESNewIntent')
      console.log('---第零个页面---onESNewIntent---生命周期--->>>>' +
        'ref:', routerRootView, intent)
    }

    function onESRestart() {
      routeLifecycleText.value.appendLifecycle('onESRestart')
      console.log('---第零个页面---onESRestart---生命周期--->>>>' + 'ref:', routerRootView)
    }

    function onESRestoreInstanceState(savedInstanceState) {
      routeLifecycleText.value.appendLifecycle('onESRestoreInstanceState')
      console.log('---第零个页面---onESRestoreInstanceState---生命周期--->>>>' +
        'ref:', routerRootView, savedInstanceState)
    }

    function onESResume() {
      routeLifecycleText.value.appendLifecycle('onESResume')
      let historyLocationList = router.getRouterHistory().getHistoryLocations();
      stackRef.value = historyLocationList
      console.log('---第零个页面---onESResume---生命周期--->>>>' + 'ref:', routerRootView)
    }

    function onESPause() {
      routeLifecycleText.value.appendLifecycle('onESPause')
      console.log('---第零个页面---onESPause---生命周期--->>>>' + 'ref:', routerRootView)
    }

    function onESStop() {
      routeLifecycleText.value.appendLifecycle('onESStop')
      console.log('---第零个页面---onESStop---生命周期--->>>>' + 'ref:', routerRootView)
    }

    function onESSaveInstanceState(savedInstanceState) {
      routeLifecycleText.value.appendLifecycle('onESSaveInstanceState')
      console.log('---第零个页面---onESSaveInstanceState---生命周期--->>>>' +
        'ref:', routerRootView, savedInstanceState)
    }

    function onESDestroy() {
      routeLifecycleText.value.appendLifecycle('onESDestroy')
      console.log('---第零个页面---onESDestroy---生命周期--->>>>' + 'ref:', routerRootView)
    }

    return {
      now,
      stackRef,
      routerRootView,
      routeLifecycleText,
      onESCreate,
      onESStart,
      onESResume,
      onESPause,
      onESStop,
      onESDestroy,
      onESNewIntent,
      onESRestoreInstanceState,
      onESSaveInstanceState,
      onESRestart
    }
  },
  components: {
    'es-router-content': ESRouterContent,
    'es-router-lifecycle-text': ESRouterLifecycleText,
    'es-router-title': ESRouterTitle,
  }
});

</script>

<style>
</style>
