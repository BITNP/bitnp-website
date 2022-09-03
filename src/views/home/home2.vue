<script setup>
import {NSpace} from 'naive-ui'
</script>

<template>
  <div id="sec1_outer">
    <n-space justify="center">
      <div id="sec1_outer2">

      </div>
    </n-space>
  </div>
</template>

<script>
export default {
  name: "home2.vue"
}
</script>

<style scoped>
#sec1_outer{
  /*width: 100vw;*/
  padding-top: 5%;
  height: 93vh;
  background: #ff8137;
}
#sec1_outer2{
  width: 96vw;
  height: 90vh;
  background:aqua;
}
</style>