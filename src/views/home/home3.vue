<script setup>
import {NGrid,NGi,NImage,NSpace} from 'naive-ui'
</script>

<template>
  <div id="sec1_outer">
    <div id="sec1_bg">
      <div id="sec1_bg_in1">
        <div class="circle" id="circl1"></div>
        <div class="circle" id="circl2"></div>
        <div class="circle" id="circl3"></div>
      </div>
    </div>
    <div id="sec1_bd">
        <n-grid style="height:100%;width: 90%;margin: 0 auto;" cols="1 s:1 l:2" x-gap="2" item-responsive responsive="screen">
          <n-gi span="1">
            <n-space justify="center">
              <span style="font-size: 55px;font-weight: 400;">
                Net Pioneer
              </span>
            </n-space>
          </n-gi>
          <n-gi span="1"></n-gi>
        </n-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "home3.vue"
}
</script>

<style scoped>

@media only screen and (max-width:768px){
  #sec1_bg_in1{
    width: 100%;
    height: 65%;
    /*border-radius: 10px;*/
  }
}
@media only screen  and (min-width: 768px) and (max-width: 1280px){
  #sec1_bg_in1{
    width: 100%;
    height: 65%;
    /*border-radius: 10px;*/
  }
}
@media only screen and (min-width:1280px){
  #sec1_bg_in1{
    width: 90%;
    height: 95%;
    border-radius: 10px;
  }
}
#sec1_outer{
  width: 100%;
  height: 93vh;
  /*background: rgba(61, 50, 50, 0.02);*/
  padding-top: 5px;
}
#sec1_bg{
  width: 100%;
  height: 100%;

}
#sec1_bg_in1{

  margin: 0 auto;
  background: rgba(228, 252, 255, 0.7);
  /*background: salmon;*/

  clip-path: polygon(0 0,100% 0,100% 86%,0 100%);
}
.circle{
  width: 20px;
  height: 20px;
  clip-path: circle(40%);
}
#circl1{
  background: #ff8c40;
  transform: translate(30vw,40vh);
}
#circl2{
  background: #ffc65a;
  transform: translate(40vw,28vh);
}
#circl3{
  background: #fff657;
  transform: translate(12vw,23vh);
}
#sec1_bd{
  /*background: saddlebrown;*/
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
}
</style>