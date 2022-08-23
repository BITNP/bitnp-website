<script setup>
import {NLayout,NLayoutContent,NLayoutFooter,NLayoutHeader,NSpace,NGradientText,NGrid,NGi,NImage,NIcon,NButton,NDivider} from 'naive-ui'
import ConnectWithoutContactRound from '@vicons/material/ConnectWithoutContactRound'
import LogoWechat from '@vicons/carbon/LogoWechat'
import AlternateEmailFilled from '@vicons/material/AlternateEmailFilled'
import DeviceTv from '@vicons/tabler/DeviceTv'
import IosLink from '@vicons/ionicons4/IosLink'
import Github from '@vicons/fa/Github'
import Affiliate from '@vicons/tabler/Affiliate'
// import AirplayFilled from '@vicons/material/AirplayFilled'
// import ReminderMedical from '@vicons/carbon/ReminderMedical'
// import Wikis from '@vicons/carbon/Wikis'
// import LeafThree20Regular from '@vicons/fluent/LeafThree20Regular'
// import GuiManagement from '@vicons/carbon/GuiManagement'
</script>

<template>
  <div style="margin-top: 30px;">
    <n-layout>
      <n-layout-header></n-layout-header>
      <n-layout-content content-style="padding-bottom:20px;">
        <n-grid cols="24" x-gap="5px" item-responsive responsive="screen">
<!--          Left-->
          <n-gi offset="0 m:3 h:3" span="24 m:6 h:6">
            <n-space justify="center">
              <n-image width="54" src="./src/assets/cover3.png"></n-image>
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
          <n-gi offset="0" span="24 m:6 h:6" >
            <n-space justify="center">
              <n-space vertical>
                <n-space justify="center">
                  <div style="padding-bottom: 10px;">
                    <n-icon size="20">
                      <ConnectWithoutContactRound/>
                    </n-icon>
                    <span style="font-size: large">
                <b>Contact us</b>
              </span>
                  </div>
                </n-space>
                <!--              <n-divider></n-divider>-->
                <n-space justify="start">
                  <div style="padding-bottom: 10px;">
                    <n-button text>
                      <n-icon size="18">
                        <AlternateEmailFilled/>
                      </n-icon>
                      <span style="font-size: medium">
                Mail: xxxxx@bit.edu.cn
              </span>
                      <n-icon size="18">
                        <IosLink/>
                      </n-icon>
                    </n-button>
                  </div>
                </n-space>
                <n-space justify="start" >
                  <div style="padding-bottom: 10px;">
                    <n-button text>
                      <n-icon size="18">
                        <LogoWechat/>
                      </n-icon>
                      <span style="font-size: medium">
                Wechat: bitwangxie
              </span>
                      <n-icon size="18">
                        <IosLink/>
                      </n-icon>
                    </n-button>
                  </div>
                </n-space>
                <n-space justify="start" >
                  <div style="padding-bottom: 10px;">
                    <n-button text>
                      <n-icon size="18">
                        <DeviceTv/>
                      </n-icon>
                      <span style="font-size: medium;">
                Bilibili: UID89756733
              </span>
                      <n-icon size="18">
                        <IosLink/>
                      </n-icon>
                    </n-button>
                  </div>
                </n-space>
                <n-space justify="start" >
                  <div style="padding-bottom: 10px;">
                    <n-button text>
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
          <n-gi offset="0" span="24 m:6 h:6">
            <n-space justify="center">
              <n-space vertical>
<!--                Title-->
                <n-space justify="center">
                  <div style="padding-bottom: 10px;">
                    <n-icon size="20">
                      <Affiliate/>
                    </n-icon>
                    <span style="font-size: large">
                    <b>Related Links</b>
                  </span>
                  </div>
                </n-space>
<!--                Col1-->
                <n-space justify="space-between">

                  <n-space justify="center">
                    <div style="padding-bottom: 10px;">
                      <n-button text>
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
                      <n-button text>
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
                      <n-button text>
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
<!--                    <div style="padding-bottom: 10px;">-->
<!--                      <n-button text>-->
<!--                        &lt;!&ndash;                      <n-icon size="18">&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <ReminderMedical/>&ndash;&gt;-->
<!--                        &lt;!&ndash;                      </n-icon>&ndash;&gt;-->
<!--                        <span style="font-size: medium">-->
<!--                      &nbsp; 乐学-->
<!--                    </span>-->
<!--                        <n-icon size="18">-->
<!--                          <IosLink/>-->
<!--                        </n-icon>-->
<!--                      </n-button>-->
<!--                    </div>-->
                  </n-space>
                </n-space>
              </n-space>

            </n-space>
          </n-gi>
        </n-grid>
      </n-layout-content>
      <n-layout-footer bordered>
        <n-space justify='center'>
          <div id="ffoot">
          <span>
            <n-gradient-text gradient="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)">
              Copyright © 1997-2022 Net Pioneer Association of BIT All Rights Reserved. Designed by FJ
            </n-gradient-text>
          </span>
          </div>
        </n-space>
      </n-layout-footer>
    </n-layout>
  </div>


</template>

<script>
export default {
  name: "footers"
}
</script>

<style scoped>
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
}
#footName2{
  font-family:Calibri;
  font-size:medium;
}
#footName3{
  font-size:medium;
}
</style>