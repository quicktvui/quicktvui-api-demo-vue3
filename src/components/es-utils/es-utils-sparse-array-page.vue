<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {useESLog} from "@extscreen/es3-core";
import {SparseArray} from "@extscreen/es3-player-manager";

const TAG = "TESLog"

export default defineComponent({
  name: "SparseArray",
  setup() {
    const log = useESLog();

    const onESCreate = (params) => {
      //----------------------------------------------------------
      console.log('###################### START ###############################')
      const array = new SparseArray<number>()
      // array.dump()
      // array.splice(20, 0, [20, 21, 22, 23, 24])
      // array.dump()
      // array.splice(43, 0, [43, 44])
      // array.dump()
      // array.splice(10, 0, [10, 11])
      // array.dump()
      // array.splice(15, 0, [15, 16, 18])
      // array.dump()
      // array.splice(21, 0, [210])
      // array.dump()
      // const v1 = array.get(23)
      // console.log('-------v1----------->>>>' + v1)
      // array.splice(44, 0, [440])
      // array.dump()

      // const ret = array.splice(11, 1, [])
      // console.log('-------ret---remove-------->>>>' + ret)
      // array.dump()

      //
      // array.add(3000)
      // array.dump()
      //
      //
      // array.addToIndex(17, [17])
      // array.dump()
      //
      // array.addToIndex(19, [19])
      // array.dump()
      //
      // const ret2 = array.remove(10)
      // console.log('-------ret---remove-------->>>>' + ret2)
      // array.dump()
      //
      // const v2 = array.get(46)
      // console.log('-------v2----------->>>>' + v2)
      //
      // const size2 = array.size()
      // console.log('-------size2----------->>>>' + size2)


      //
      array.push([0, 1, 2, 3, 4, 5])
      array.dump()

      array.push([0, 1, 2, 3, 4, 5])
      array.dump()

      array.push([0, 1, 2, 3, 4, 5])
      array.dump()

      array.splice(2, 1, [22])
      array.dump()

      // const v2 = array.get(2)
      // console.log('-------v2----------->>>>' + v2)
      console.log('-----------length--->>>>' + array.length)
      //
      console.log('####################### END ##############################')
    }

    return {
      onESCreate,
    }
  },
});
</script>

<style scoped>

</style>
