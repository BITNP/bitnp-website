<script setup>
import {ref} from 'vue'
import {NLayout,NLayoutContent,NLayoutFooter,NLayoutHeader,NSpace,NGradientText,NGrid,NGi,NImage,NIcon,NButton,NDivider,NConfigProvider,NModal,NCard} from 'naive-ui'
import ConnectWithoutContactRound from '@vicons/material/ConnectWithoutContactRound'
import LogoWechat from '@vicons/carbon/LogoWechat'
import AlternateEmailFilled from '@vicons/material/AlternateEmailFilled'
import DeviceTv from '@vicons/tabler/DeviceTv'
import IosLink from '@vicons/ionicons4/IosLink'
import Github from '@vicons/fa/Github'
import Affiliate from '@vicons/tabler/Affiliate'
const showWCMod=ref(false);
const showQQRMod=ref(false);
function jumpTo(url){
  window.open(url);
}
</script>

<template>
  <n-config-provider :theme-overrides="responseTheme">
    <div style="margin-top: 30px;">
      <n-layout style="overflow: hidden!important;">
<!--        <n-layout-header></n-layout-header>-->
        <n-layout-content content-style="padding-bottom:20px;">
            <n-grid cols="2 s:6 l:8" x-gap="5px" item-responsive responsive="screen">
              <!--          Left-->
              <n-gi offset="0 s:1 l:1" span="2">
                <n-space justify="center">
                  <n-image width="54" src="https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/cover3.png"></n-image>
                </n-space>
                <n-space justify="center" >
                  <span id="footName1"><b>北京理工大学网络开拓者协会</b></span>
                </n-space>
                <n-space justify="center" >
                  <span id="footName2">Net Pioneer Association of BIT</span>
                </n-space>
                <n-space justify="center" >
                  <span id="footName3">网络无限 · 开拓不懈</span>
                </n-space>
              </n-gi>
              <!--          Mid-->
              <n-gi offset="0" span="2" >
                <n-space justify="center">
                  <n-space vertical style="">
<!--                    title-->
                    <n-space justify="center">
                      <div style="padding-bottom: 10px;">
                        <n-icon size="20" color="#3366FFFF">
                          <ConnectWithoutContactRound/>
                        </n-icon>
                        <span style="font-size: large">
                        <b style="text-align: center">
                          Contact us
                        </b>
                        </span>
                      </div>
                    </n-space>
                    <!--              <n-divider></n-divider>-->
<!--                      qq-->
                    <n-space justify="center">
                      <div style="padding-bottom: 10px;">
                        <n-button text @click="showQQRMod=true;">
                          <n-icon size="18" color="#EB6969">
                            <AlternateEmailFilled/>
                          </n-icon>
                          <span style="font-size: medium" >
                            2022迎新QQ群：368626827
                          </span>
                          <n-icon size="18">
                            <IosLink/>
                          </n-icon>
                        </n-button>
                        <n-modal v-model:show="showQQRMod">
                          <n-card
                              style="width: 600px"
                              title=" "
                              :bordered="false"
                              size="huge"
                              role="dialog"
                              aria-modal="true"
                              class="glassmorphism"
                          >
                            <template #header-extra>
                              使用手机QQ扫描二维码或搜索群号：368626827
                            </template>
                            <img src="https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/QRQQ.png" style="width: 100%; height: 100%;">
                          </n-card>
                        </n-modal>
                      </div>
                    </n-space>
<!--                    wechat-->
                    <n-space justify="center" >
                      <div style="padding-bottom: 10px;">
                        <n-button text @click="showWCMod=true" style="text-align: center;">
                          <n-icon size="18" color="#00D98D">
                            <LogoWechat/>
                          </n-icon>
                          <span style="font-size: medium; text-align: center;">
                            Wechat: bitwangxie
                          </span>
                          <n-icon size="18">
                            <IosLink/>
                          </n-icon>
                        </n-button>
<!--                        show QRcode-->
                        <n-modal v-model:show="showWCMod">
                          <n-card
                              style="width: 600px"
                              title=" "
                              :bordered="false"
                              size="huge"
                              role="dialog"
                              aria-modal="true"
                              class="glassmorphism"
                          >
                            <template #header-extra>
                              微信公众号搜索 “NetPioneer” 即可关注公众号
                            </template>
                            <img src="https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/QRWechat.png" style="width: 100%; height: 100%;">
                          </n-card>
                        </n-modal>
                      </div>
                    </n-space>
<!--                    bilibili-->
                    <n-space justify="center" >
                      <div style="padding-bottom: 10px;">
                        <n-button text @click="jumpTo('https://space.bilibili.com/89756733')">
                          <n-icon size="18" color="#23ADE5">
                            <DeviceTv/>
                          </n-icon>
                          <span style="font-size: medium;">
                            Bilibili: 网络开拓者
                          </span>
                          <n-icon size="18">
                            <IosLink/>
                          </n-icon>
                        </n-button >
                      </div>
                    </n-space>
<!--                    github-->
                    <n-space justify="center" >
                      <div style="padding-bottom: 10px;">
                        <n-button text @click="jumpTo('https://github.com/BITNP')">
                          <n-icon size="18">
                            <Github/>
                          </n-icon>
                          <span style="font-size: medium;">
                            Github: bitnp
                          </span>
                          <n-icon size="18">
                            <IosLink/>
                          </n-icon>
                        </n-button>
                      </div>
                    </n-space>
                  </n-space>
                </n-space>
              </n-gi>
              <!--          Right-->
              <n-gi offset="0" span="2 s:0 l:2">
                <n-space justify="center">
                  <n-space vertical>
                    <!--                Title-->
                    <n-space justify="center">
                      <div style="padding-bottom: 10px;">
                        <n-icon size="20" color="#5D95E8">
                          <Affiliate/>
                        </n-icon>
                        <span style="font-size: large">
                          <b>
                            Related Links
                          </b>
                        </span>
                      </div>
                    </n-space>
                    <!--                Col1-->
                    <n-space justify="space-between">

                      <n-space justify="center">
                        <div style="padding-bottom: 10px;">
                          <n-button text @click="jumpTo('https://www.bit.edu.cn/')">
                            <!--                      <n-icon size="18">-->
                            <!--                        <AirplayFilled/>-->
                            <!--                      </n-icon>-->
                            <span style="font-size: medium">
                              &nbsp; 北京理工大学
                            </span>
                            <n-icon size="18">
                              <IosLink/>
                            </n-icon>
                          </n-button>
                        </div>
                      </n-space>
                      <n-space justify="start" >
                        <div style="padding-bottom: 10px;">
                          <n-button text @click="jumpTo('https://login.bit.edu.cn/')">
                            <!--                      <n-icon size="18">-->
                            <!--                        <ReminderMedical/>-->
                            <!--                      </n-icon>-->
                            <span style="font-size: medium">
                              &nbsp; 乐学
                            </span>
                            <n-icon size="18">
                              <IosLink/>
                            </n-icon>
                          </n-button>
                        </div>
                      </n-space>
                    </n-space>
                    <!--                Col2-->
                    <n-space justify="space-between">
                      <n-space justify="center">
                        <div style="padding-bottom: 10px;">
                          <n-button text @click="jumpTo('https://bit101.cn/#/')">
                            <!--                      <n-icon size="18">-->
                            <!--                        <AirplayFilled/>-->
                            <!--                      </n-icon>-->
                            <span style="font-size: medium">
                              &nbsp; BIT101
                            </span>
                            <n-icon size="18">
                              <IosLink/>
                            </n-icon>
                          </n-button>
                        </div>
                      </n-space>
                      <n-space justify="start" >
                      </n-space>
                    </n-space>
                  </n-space>
                </n-space>
              </n-gi>
            </n-grid>
        </n-layout-content>
        <n-layout-footer bordered>
            <div id="ffoot">
            <span>
              <n-gradient-text gradient="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)">
                Copyright © 1997-2022 Net Pioneer Association of BIT All Rights Reserved.
              </n-gradient-text>
            </span>
            </div>
        </n-layout-footer>
      </n-layout>
    </div>
  </n-config-provider>
</template>

<script>

export default {
  name: "footers"
}
const responseTheme={
  breakpoints:{s:767}
}

</script>

<style scoped>
.glassmorphism{
  backdrop-filter: blur(7px) saturate(180%);
  -webkit-backdrop-filter: blur(7px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
.fontIngerdient{
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.n-layout-footer{
  background: transparent;
}
#ffoot{
  /*width: 100vw;*/
  /*padding: 10px;*/
  padding-left: 0;
  padding-right: 0;
  padding-top: 15px;
  padding-bottom: 18px;
  font-size: 1vw;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}
#footName1{
  font-size:large;

  /*-webkit-background-clip: text;*/
  /*-webkit-text-fill-color: transparent;*/
  /*background-color: #FFE53B;*/
  /*background-image: linear-gradient(270deg, #FFE53B 0%, #ff6225 74%);*/

}
#footName2{
  font-family:Calibri;
  font-size:medium;

  /*-webkit-background-clip: text;*/
  /*-webkit-text-fill-color: transparent;*/
  /*background-color: #FFE53B;*/
  /*background-image: linear-gradient(90deg, #ffdd3f 0%, #ff6225 74%);*/
}
#footName3{
  font-size:medium;

  /*-webkit-background-clip: text;*/
  /*-webkit-text-fill-color: transparent;*/
  /*background-image: radial-gradient( circle 597px at 93% 9.8%,  rgba(255,61,89,1) 1.7%, rgba(252,251,44,1) 97% );*/
}
</style>