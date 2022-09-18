<script setup>
import {NSpace,NImage,NInput,NIcon,NButton} from 'naive-ui'
import CloudLightning from '@vicons/carbon/CloudLightning'
</script>

<template>
  <div id="sec1_outer">
    <n-space justify="center">
      <div id="sec1_outer2">
        <n-image id="icon" width="110" src="./src/assets/cover3.png"></n-image><br>
          <span id="mainTitle">
            北京理工大学网络开拓者协会
          </span><br>
          <span id="subTitle">
            网络无限·开拓不懈
          </span><br>
          <n-input id="mainInput" size="large" placeholder="站内搜索">
            <template #prefix>
              <n-icon size="20">
                <CloudLightning></CloudLightning>
              </n-icon>
            </template>
          </n-input>
        <n-space style="margin-top: 50px;" justify="center">
          <div id="guideBox">
          </div>
        </n-space>
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
html {
  font-size : 20px;
}
@media only screen and (min-width: 401px){
  html {
    font-size: 25px !important;
  }
}
@media only screen and (min-width: 428px){
  html {
    font-size: 26.75px !important;
  }
}
@media only screen and (min-width: 481px){
  html {
    font-size: 30px !important;
  }
}
@media only screen and (min-width: 569px){
  html {
    font-size: 35px !important;
  }
}
@media only screen and (min-width: 641px){
  html {
    font-size: 40px !important;
  }
}

#guideBox{
  width: 40vw;
  height: 20vw;
  background: #535bf2;
}

#icon{
  filter: brightness(1.06) contrast(1.1) saturate(1.1);
}
#mainTitle{
  font-size: 3rem;
  font-weight: bolder;
  color: #000000;
}
#subTitle{
  font-size: 1.8rem;
  /*font-weight: bold;*/
}
#mainInput{
  width: 20%;
  border-radius: 10px;
  margin-top: 5vh;
  text-align: start;
  box-shadow:1px 1px 2px rgba(75,75,75,0.42);
}
#sec1_outer{
  /*width: 100vw;*/
  padding-top: 1%;
  height: 100vh;
  /*background: #ff8137;*/
}
#sec1_outer2{
  width: 96vw;
  /*height: 75vh;*/
  filter: opacity(0.75);
  background:url("src/views/home/assets/bg.png") 0% 0% / cover no-repeat;
  border-radius: 30px;
  padding-top: 12vh;
  box-shadow:
      4.2px 2.9px 2.6px rgba(0, 0, 0, 0.028),
      14.1px 9.6px 8.7px rgba(0, 0, 0, 0.042)
  ;
  -webkit-animation: text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
</style>