<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-row-css">
        <s-text-button text="getBoolean" @onButtonClicked="getBoolean"/>
        <s-text-button text="putBoolean" @onButtonClicked="putBoolean"/>
        <s-text-button text="getInt" @onButtonClicked="getInt"/>
        <s-text-button text="putInt" @onButtonClicked="putInt"/>
        <s-text-button text="getLong" @onButtonClicked="getLong"/>
        <s-text-button text="putLong" @onButtonClicked="putLong"/>
        <s-text-button text="getString" @onButtonClicked="getString"/>
        <s-text-button text="putString" @onButtonClicked="putString"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {useESLocalStorage, useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: "本地存储",
  setup() {

    const localStorage = useESLocalStorage()
    const toast = useESToast()

    function getBoolean() {
      localStorage.getBoolean('boolean_key', false)
        .then(
          (value) => {
            toast.showToast("getBoolean：" + value);
          },
          error => {
          }
        );
    }

    function putBoolean() {
      localStorage.putBoolean('boolean_key', true)
        .then(
          () => {
          },
          error => {
          }
        );
    }

    function getInt() {
      localStorage.getInt('int_key', -1)
        .then(
          (value) => {
            toast.showToast("getInt：" + value);
          },
          error => {
          }
        );
    }

    function putInt() {
      localStorage.putInt('int_key', 20000)
        .then(
          () => {
          },
          error => {
          }
        );
    }

    function getLong() {
      localStorage.getLong('long_key', 0)
        .then(
          (value) => {
            toast.showToast("getLong：" + value);
          },
          error => {
          }
        );
    }

    function putLong() {
      localStorage.putLong('long_key', 20000000)
        .then(
          () => {
          },
          error => {
          }
        );
    }

    function getString() {
      localStorage.getString('string_key', 'default string !')
        .then(
          (value) => {
            toast.showToast("getString：" + value);
          },
          error => {
          }
        );
    }

    function putString() {
      localStorage.putString('string_key', 'hello local storage ~~~')
        .then(
          () => {
          },
          error => {
          }
        );
    }

    return {
      getBoolean,
      putBoolean,
      getInt,
      putInt,
      getLong,
      putLong,
      getString,
      putString
    }
  },
});

</script>
<style>
</style>
