<template>
  <div class="es-sdk-content-column-css">
    <div class="es-sdk-content-row-css">
      <s-text-button text="back" :requestFocus="true" @onButtonClicked="finishESPage()"/>
      <s-nav-button text="第六个页面Activity" :url="'router/router_six_page'"/>
      <s-text-button text="第七个页面异步组件" @onButtonClicked="launchESPageSix"/>
      <s-text-button text="第五个页面并关闭当前页面" @onButtonClicked="launchAfterFinishESPage"/>
      <s-text-button text="Native方式页面" @onButtonClicked="launchNativePage"/>
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="弹窗一" @onButtonClicked="launchESDialogOne"/>
      <s-text-button text="弹窗二" @onButtonClicked="launchESDialogTwo"/>
      <s-text-button text="第零个页面" @onButtonClicked="launchESPageZero"/>
      <s-text-button text="第一个页面" @onButtonClicked="launchESPageFirst"/>
      <s-text-button text="第二个页面" @onButtonClicked="launchESPageSecond"/>
      <s-text-button text="第三个页面" @onButtonClicked="launchESPageThird"/>
      <s-text-button text="第四个页面" @onButtonClicked="launchESPageFour"/>
      <s-text-button text="第五个页面" @onButtonClicked="launchESPageFive"/>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import {useESNativeRouter, useESRouter} from "@extscreen/es3-router";

export default defineComponent({
  setup() {

    const router = useESRouter();
    const nativeRouter = useESNativeRouter()
    //
    const finishESPage = () => {
      router.back();
    }

    const launchESDialogOne = () => {
      router.push({
        name: 'router/router_dialog_one_page',
        params: {
          from: 'router_first'
        },
      });
    }

    const launchESDialogTwo = () => {
      router.push({
        name: 'router/router_dialog_two_page',
        params: {
          from: 'router_first'
        },
      });
    }

    const launchAfterFinishESPage = () => {

    }
    //
    const launchESPageZero = () => {
      router.push({
        name: 'router/router_zero_page',
        params: {
          from: 'router_first'
        },
      });
    }
    const launchESPageFirst = () => {
      router.push({
        name: 'router/router_first_page',
        params: '1111111111111111',
      });
    }
    const launchESPageSecond = () => {
      router.push({
        name: 'router/router_second_page',
        params: {
          from: 'router_first'
        }
      });
    }
    const launchESPageThird = () => {
      router.push({
        name: 'router/router_third_page',
        params: {
          from: 'router_first'
        },
      });
    }
    const launchESPageFour = () => {
      router.push({
        name: 'router/router_four_page',
        params: {
          from: 'router_first'
        },
      });
    }
    const launchESPageFive = () => {
      router.push({
        name: 'router/router_five_page',
        params: {
          from: 'router_first'
        },
      });
    }
    const launchESPageSix = () => {
      router.push({
        name: 'router/router_seven_page',
        params: {
          from: 'router_first'
        },
      });
    }
    const launchNativePage = () => {
      nativeRouter.push({
        args: {
          name: 'router/router_native_page',
        },
      });
    }

    return {
      finishESPage,
      launchAfterFinishESPage,
      launchESDialogOne,
      launchESDialogTwo,
      launchESPageZero,
      launchESPageFirst,
      launchESPageSecond,
      launchESPageThird,
      launchESPageFour,
      launchESPageFive,
      launchESPageSix,
      launchNativePage,
    }
  },
});

</script>

<style scoped>
</style>
