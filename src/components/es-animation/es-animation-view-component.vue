<template>
  <div class="es-sdk-root-css">
    <es-animation
      ref="animation_view_rotation"
      class="animation_view_rotation">
      <div class="animation_inner_view_class"/>
    </es-animation>

    <es-animation
      ref="star_view_animation"
      class="animation_view_star_css">
      <img class="animation_inner_view_class"
           :src="require('../../assets/star.png')"/>
    </es-animation>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="星星旋转" @onButtonClicked="playRotationAnim"/>
      <s-text-button text="星星旋转变形渐变" @onButtonClicked="playStarAnim"/>
      <s-text-button text="星星位移" @onButtonClicked="playTranslationStarAnim"/>
      <s-text-button text="位移" @onButtonClicked="playTranslationYAnim"/>
      <s-text-button text="resetAnimators" @onButtonClicked="resetViewAnimators"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  ESAnimationInterpolatorType,
  ESAnimationPropertyName,
  ESAnimationValueType,
  ESIAnimation
} from "@extscreen/es3-component";

export default defineComponent({
  name: '动画组件',
  setup() {

    const animation_view_rotation = ref<ESIAnimation>()
    const star_view_animation = ref<ESIAnimation>()

    function playRotationAnim() {
      star_view_animation.value?.objectAnimator3(
        "0",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_ROTATION,
        0,
        360,
        0,
        1000,
        2,
        0,
        false,
        false,
      );
      star_view_animation.value?.setPivotX(0)
      star_view_animation.value?.setPivotY(0)
      star_view_animation.value?.startAnimator("0");
    }

    function playStarAnim() {

      //SCALE_X
      star_view_animation.value?.objectAnimator2(
        "0",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_SCALE_X,
        0,
        1,
        1000,
        -1,
        0,
        false,
        false,
      );

      //SCALE_Y
      star_view_animation.value?.objectAnimator2(
        "1",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_SCALE_Y,
        0,
        1,
        1000,
        -1,
        0,
        false,
        false,
      );

      //alpha
      star_view_animation.value?.objectAnimator2(
        "2",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_ALPHA,
        0,
        1,
        1000,
        -1,
        0,
        false,
        false,
      );

      //旋转
      star_view_animation.value?.objectAnimator2(
        "3",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_ROTATION,
        0,
        -50,
        1000,
        -1,
        0,
        false,
        false,
      );

      star_view_animation.value?.objectAnimator2(
        "4",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        0,
        500,
        1000,
        -1,
        0,
        false,
        false,
      );

      star_view_animation.value?.objectAnimator2(
        "5",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        -200,
        1000,
        -1,
        0,
        false,
        false,
      );

      //集合
      star_view_animation.value?.animatorSet("starAnimation", -1, false);
      //旋转
      star_view_animation.value?.objectAnimator2(
        "6",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_ROTATION,
        0,
        360,
        1000,
        0,
        2000,
        false,
        false,
      );
      //位移
      star_view_animation.value?.animatorSet("translation", -1, false);
      star_view_animation.value?.playTogether3("translation", "4", "5", "6");

      //
      star_view_animation.value?.play("starAnimation", "0")
      star_view_animation.value?.playWith("starAnimation", "1")
      star_view_animation.value?.playWith("starAnimation", "2")
      // star_view_animation.value?.with("starAnimation", "3")

      star_view_animation.value?.playBefore("starAnimation", "translation")

      // star_view_animation.value?.playTogether4("测试", "0", "1", "2", "3",);
      // star_view_animation.value?.playTogether2("测试", "4", "5");
      // star_view_animation.value?.with("测试", "1");
      // star_view_animation.value?.with("测试", "2");
      //位移
      // star_view_animation.value?.before("测试", "4");
      // star_view_animation.value?.with("测试", "5");

      star_view_animation.value?.startAnimator("starAnimation");
    }

    function playTranslationStarAnim() {
      star_view_animation.value?.objectAnimator2(
        "4",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        0,
        500,
        1000,
        -1,
        0,
        false,
        false,
      );

      star_view_animation.value?.objectAnimator2(
        "5",
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        -200,
        1000,
        -1,
        0,
        false,
        false,
      );
      star_view_animation.value?.animatorSet("translation", -1, false);
      star_view_animation.value?.playTogether2("translation", "4", "5");
      star_view_animation.value?.startAnimator("translation");
    }

    function playTranslationYAnim() {
      animation_view_rotation.value?.objectAnimator3(
        "23",//id
        ESAnimationValueType.ES_ANIMATION_VALUE_TYPE_FLOAT,
        ESAnimationPropertyName.ES_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        360,
        0,
        1000,
        -1,
        10000,
        false,
        false,
        {
          type: ESAnimationInterpolatorType.ES_CYCLE_INTERPOLATOR,
        }
      );

      // objectAnimator2(
      //   id,
      //   valueType, propertyName,
      //   value1, value2,
      //   duration, repeatMode, repeatCount,
      //   listenAnimator, listenAnimatorValue) {
      //   Vue.Native.callUIFunction(this.$refs.animationView,
      //     'objectAnimator2', [
      //       id,
      //       valueType, propertyName,
      //       value1, value2,
      //       duration, repeatMode, repeatCount,
      //       listenAnimator, listenAnimatorValue], (res) => {
      //     });
      // },
      //

      animation_view_rotation.value?.startAnimatorDelay("23", 2000);
    }

    function resetViewAnimators() {
      star_view_animation.value?.resetAnimators();
    }

    return {
      star_view_animation,
      animation_view_rotation,
      resetViewAnimators,
      playRotationAnim,
      playStarAnim,
      playTranslationStarAnim,
      playTranslationYAnim,
    }
  },
});

</script>

<style scoped>

.animation_view_rotation {
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  left: 200px;
  top: 500px
}

.animation_view_star_css {
  background-color: red;
  position: absolute;
  left: 500px;
  top: 500px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.animation_inner_view_class {
  width: 100px;
  height: 100px;
  background-color: green;
}

</style>
