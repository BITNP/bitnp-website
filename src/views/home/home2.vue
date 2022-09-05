<script setup>
import {NSpace,NImage,NInput,NIcon,NButton} from 'naive-ui'
import CloudLightning from '@vicons/carbon/CloudLightning'
</script>

<template>
  <div id="sec1_outer">
    <n-space justify="center">
      <div id="sec1_outer2">
        <n-image width="110" src="./src/assets/cover3.png"></n-image><br>
          <span id="mainTitle">
            北京理工大学网络开拓者协会
          </span><br>
          <span id="subTitle">
            网络无限·开拓不懈
          </span><br>
          <n-input id="mainInput" size="large" placeholder="搜索">
            <template #prefix>
              <n-icon size="20">
                <CloudLightning></CloudLightning>
              </n-icon>
            </template>
          </n-input>
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
#mainTitle{
  font-size: 55px;
  font-weight: bolder;
  color: #000000;
}
#subTitle{
  font-size: 25px;
  /*font-weight: bold;*/
}
#mainInput{
  width: 20%;
  border-radius: 10px;
  margin-top: 5vh;
  text-align: start;
}
#sec1_outer{
  /*width: 100vw;*/
  padding-top: 2%;
  height: 100vh;
  /*background: #ff8137;*/
}
#sec1_outer2{
  width: 96vw;
  height: 75vh;
  background:url("src/views/home/assets/bg.png") 0% 0% / cover no-repeat;
  border-radius: 30px;
  padding-top: 12vh;
}
</style>