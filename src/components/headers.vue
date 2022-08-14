<script setup>
  import {NLayoutHeader,NImage,NGrid,NGi,NButton,NSpace,NIcon,NH3,NText,NSwitch,NAvatar,NDropdown} from 'naive-ui'
  import News16Regular from '@vicons/fluent/News16Regular'
  import Flashlight24Regular from '@vicons/fluent/Flashlight24Regular'
  import FlashlightOff24Filled from '@vicons/fluent/FlashlightOff24Filled'
  import GitlabOutlined from '@vicons/antd/GitlabOutlined'
  import CodepenOutlined from '@vicons/antd/CodepenOutlined'
  import Atom from '@vicons/tabler/Atom'

</script>

<template>
    <n-layout-header >
      <n-grid cols="48" x-gap="5px" item-responsive>
        <n-gi offset="6" span="3">
<!--          <n-image @click="$router.push('/')" width="54" src="./src/assets/ico.png"></n-image>-->
          <img src="src/assets/ico.png" width="54" id="headerIco" @click="$router.push('/')">
          <!--          BitNP-->
        </n-gi>
<!--news-->
        <n-gi offset="0" span="3">
          <n-button text >
            <n-icon size="30" >
              <News16Regular/>
            </n-icon>
            <span style="font-size: 17px;">News</span>
          </n-button>
        </n-gi>
<!--space-->
        <n-gi offset="0" span="3">
          <n-dropdown trigger="hover" size="large" :options="options1">
            <n-button text >
              <n-icon size="30" >
                <CodepenOutlined/>
              </n-icon>
              <span style="font-size: 17px;">Space</span>
            </n-button>
          </n-dropdown>
        </n-gi>
<!--meta-->
        <n-gi offset="0" span="3">
          <n-dropdown trigger="hover" size="large" :options="options2">
            <n-button text >
              <n-icon size="30" >
                <Atom/>
              </n-icon>
              <span style="font-size: 17px;">Meta</span>
            </n-button>
          </n-dropdown>
<!--about格-->
        </n-gi>
        <n-gi offset="0" span="3">
            <n-button text @click="$router.push('about-us')">
              <n-icon size="30" >
                <GitlabOutlined/>
              </n-icon>
              <span style="font-size: 17px;">About</span>
            </n-button>
        </n-gi>
<!--黑白模式-->
        <n-gi offset="15" span="3">
          <n-switch  size="large" @update:value="Changetheme">
            <template #checked-icon>
              <n-icon>
                <FlashlightOff24Filled/>
              </n-icon>
            </template>
            <template #unchecked-icon>
              <n-icon>
                <Flashlight24Regular/>
              </n-icon>
            </template>
          </n-switch>
          <!--        <div style="height: 54px;background:silver"></div>-->
        </n-gi>
        <n-gi offset="0" span="3">
          <n-dropdown  trigger="hover" size="large" :options="options4">
            <n-button style="padding: 0px;" text>
              <n-avatar
                  bordered
                  size="large"
                  :style="{
                      color: '#A4A4A4',
                      backgroundColor: 'transparent'
                     }" >
                <n-icon >
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36l36-12l-36-12l-12-36l-12 36l-36 12l36 12l12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16s-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z" fill="currentColor"></path></svg>
                </n-icon>
              </n-avatar>
            </n-button>
          </n-dropdown>
        </n-gi>
      </n-grid>
    </n-layout-header>

</template>

<script>
import {h} from "vue"
import {defineComponent} from "vue";

import {NAvatar,NText} from 'naive-ui'

import Forumbee from '@vicons/fa/Forumbee'
import DnsServices from '@vicons/carbon/DnsServices'
import ToolsAlt from '@vicons/carbon/ToolsAlt'
import LiveTvFilled from '@vicons/material/LiveTvFilled'
import BrandGithub from '@vicons/tabler/BrandGithub'
import CalendarLtr16Regular from '@vicons/fluent/CalendarLtr16Regular'
import HospitalRegular from '@vicons/fa/HospitalRegular'
import Apps24Regular from '@vicons/fluent/Apps24Regular'
import DevicesPc from '@vicons/tabler/DevicesPc'
import HddOutlined from '@vicons/antd/HddOutlined'
import LeafThree20Regular from '@vicons/fluent/LeafThree20Regular'
import PlanetOutline from '@vicons/ionicons5/PlanetOutline'
import MdContacts from '@vicons/ionicons4/MdContacts'
import LogInOutline from '@vicons/ionicons5/LogInOutline'

function renderCustomHeader () {
  return h(
      'div',
      {
        style: 'display: flex; align-items: center; padding: 8px 12px;'
      },
      [
        h(NAvatar, {
          round: true,
          style: 'margin-right: 12px;',
          src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG'
        }),
        h('div', null, [
          h('div', null, [h(NText, { depth: 2 }, { default: () => '未知用户' })]),
          h('div', { style: 'font-size: 12px;' }, [
            h(
                NText,
                { depth: 3 },
                { default: () => '这个用户没有留下痕迹' }
            )
          ])
        ])
      ]
  )
}
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

export default defineComponent({
  name: "headers",
  data(){
    return{
      options1:[
        {
          label: '近期活动',
          key: 'activities',
          icon:renderIcon(CalendarLtr16Regular)
        },
        {
          label:"站内论坛",
          key:'bbs',
          icon:renderIcon(Forumbee)
        },{
          label: "NP知识库",
          key: 'blogs',
          icon:renderIcon(DnsServices)
        },
        {
          label: '软件资源',
          key: 'softwares',
          icon:renderIcon(Apps24Regular)
        },
        {
          label: '电脑推荐表',
          key: 'PCcommands',
          icon:renderIcon(DevicesPc)
        }
      ],
      options2:[
        {
          label: 'NPlive',
          key:'nplive',
          icon:renderIcon(LiveTvFilled)
        },
        {
          label: 'GitHub',
          key:'github',
          icon:renderIcon(BrandGithub)
        },
        {
          label: '电脑诊所',
          key: 'ComClinic',
          icon:renderIcon(HospitalRegular)
        },
        {
          label: 'BIThesis',
          key:'ComClinic',
          icon:renderIcon(LeafThree20Regular)
        },
        {
          label: '开源镜像站',
          key: 'mirror',
          icon:renderIcon(HddOutlined)
        },
        {
          label:'网协工具箱',
          key:'tools',
          icon:renderIcon(ToolsAlt)
        }
      ],
      options3:[
        {
          label:"关于我们",
          key:"Aboutus",
          icon:renderIcon(PlanetOutline)
        },
        {
          label: "加入我们",
          key: "joinus",
          icon:renderIcon(MdContacts)
        }
      ],
      options4:[
        {
          key:'userShow',
          type:'render',
          render:renderCustomHeader
        },
        {
          label:'Login now',
          key:'navlogin',
          icon:renderIcon(LogInOutline)
        }
      ]
    }
  },
  methods:{
      Changetheme(value){
        this.$store.commit('ChangeTheme')
      },
  }
})
</script>

<style scoped>
.n-layout-header{
  padding-top: 4px;
  padding-bottom: 3px;
}
.n-avatar{
  padding-top: 12px;
}
.n-button{
  padding-top: 15px;
}
.n-switch{
  padding-top: 15px;
}
#headerIco:hover{
  cursor: pointer;
}
</style>