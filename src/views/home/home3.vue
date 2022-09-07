<script setup>
import {NGrid,NGi,NImage} from 'naive-ui'
</script>

<template>
  <div id="sec1_outer">
    <div id="sec1_bg">
      <div id="sec1_bg_in1">
      </div>
    </div>
    <div id="sec1_bd">
      111
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
#sec1_bd{
  /*background: saddlebrown;*/
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
}
</style>