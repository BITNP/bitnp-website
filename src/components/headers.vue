<script setup>
import {
  NLayoutHeader,
  NImage,
  NGrid,
  NGi,
  NButton,
  NSpace,
  NIcon,
  NH3,
  NText,
  NSwitch,
  NAvatar,
  NDropdown,
  useMessage
} from 'naive-ui'
  import News16Regular from '@vicons/fluent/News16Regular'
  import GitlabOutlined from '@vicons/antd/GitlabOutlined'
  import CodepenOutlined from '@vicons/antd/CodepenOutlined'
  import Atom from '@vicons/tabler/Atom'
  import Github from '@vicons/fa/Github'
  import ShareSocialOutline from '@vicons/ionicons5/ShareSocialOutline'
  import ManageAccountsOutlined from '@vicons/material/ManageAccountsOutlined'
import {useRoute, useRouter} from "vue-router";

window.$message=useMessage();
const $route=useRoute();
const $router=useRouter();
</script>

<template>
    <n-layout-header >
      <n-grid cols="48" x-gap="5px" item-responsive responsive="screen">
        <n-gi offset="6" span="3">
<!--          <n-image @click="$router.push('/')" width="54" src="./src/assets/ico.png"></n-image>-->
          <img src="src/assets/ico.png"  style="width:  1.1rem;" id="headerIco" @click="$router.push('/')">
          <!--          BitNP-->
        </n-gi>
<!--news-->
        <n-gi offset="0" span="0 m:3 l:3">
          <n-button text >
            <n-icon :size="propstyle.icons" >
              <News16Regular/>
            </n-icon>
            <span style="font-size: 17px;">News</span>
          </n-button>
        </n-gi>
<!--space-->
        <n-gi offset="0" span="0 m:3 l:3">
          <n-dropdown trigger="hover" size="large" :options="options1">
            <n-button text >
              <n-icon :size="propstyle.icons" >
                <CodepenOutlined/>
              </n-icon>
              <span style="font-size: 17px;">Space</span>
            </n-button>
          </n-dropdown>
        </n-gi>
<!--meta-->
        <n-gi offset="0" span="0 m:3 l:3">
          <n-dropdown trigger="hover" size="large" :options="options2" @select="handleSelect">
            <n-button text >
              <n-icon :size="propstyle.icons" >
                <Atom/>
              </n-icon>
              <span style="font-size: 17px;">Meta</span>
            </n-button>
          </n-dropdown>
<!--about格-->
        </n-gi>
        <n-gi offset="0" span="0 m:3 l:3">
            <n-button text @click="$router.push('about-us')">
              <n-icon :size="propstyle.icons">
                <GitlabOutlined/>
              </n-icon>
              <span style="font-size: 17px;">About</span>
            </n-button>
        </n-gi>
<!--admin-->
        <n-gi offset="22" span="0 m:1 l:1">
          <n-button text @click="$router.push('')">
            <n-icon :size="propstyle.icons">
              <ManageAccountsOutlined/>
            </n-icon>
          </n-button>
        </n-gi>
<!--github-->
        <n-gi offset="0" span="0 m:1 l:1">
            <n-button text @click="" >
              <n-icon :size="propstyle.icons">
                <Github/>
              </n-icon>
            </n-button>
        </n-gi>
<!--share-->
        <n-gi offset="0" span="0 m:1 l:1">
          <n-button class="clipbtn" :data-clipboard-text="Urlhandle" text>
            <n-icon :size="propstyle.icons">
              <ShareSocialOutline/>
            </n-icon>
          </n-button>
        </n-gi>
        <input id="clipbundle" class="clptar" style="visibility: hidden;">
      </n-grid>
    </n-layout-header>

</template>

<script>
import {h} from "vue"
import {defineComponent,reactive} from "vue";
// import {useRouter as $router} from 'vue-router'

import {NAvatar, NText} from 'naive-ui'
import Clipboard from 'clipboard'

import DnsServices from '@vicons/carbon/DnsServices'
import BrandGithub from '@vicons/tabler/BrandGithub'
import CalendarLtr16Regular from '@vicons/fluent/CalendarLtr16Regular'
import DevicesPc from '@vicons/tabler/DevicesPc'
import PlanetOutline from '@vicons/ionicons5/PlanetOutline'
import MdContacts from '@vicons/ionicons4/MdContacts'
import LinkSquare12Regular from '@vicons/fluent/LinkSquare12Regular'

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
  setup(){

    let clipUrl=reactive({e:window.location.href});
    return{
      clipUrl,
    }
  },
  data(){
    return{
      propstyle:{
        icons:25,
      },
      options1:[
        {
          label: '近期活动',
          key: 'activities',
          icon:renderIcon(CalendarLtr16Regular)
        },
        {
          label: "NP知识库",
          key: 'blogs',
          icon:renderIcon(DnsServices)
        },

      ],
      options2:[
        {
          label: '网协GitHub',
          key:'github',
          icon:renderIcon(BrandGithub)
        },
        {
          label: '电脑推荐表',
          key: 'PCcommands',
          icon:renderIcon(DevicesPc)
        },
        {
          label: '学校常用网址',
          key: 'address',
          icon:renderIcon(LinkSquare12Regular)
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

    }
  },
  components:{
    Clipboard
  },
  methods:{
      // Changetheme(value){
      //   this.$store.commit('ChangeTheme')
      // },
    handleSelect(key){
      const map ={
        address:'common-links'
      }
      this.$router.push(map["address"]);
    }
  },
  mounted() {
    var clipboard=new Clipboard('.clipbtn');
    clipboard.on('success',()=>{
      window.$message.success('已粘贴到剪贴板，快去分享吧~');
      // console.log('copy text successfully.')
    });
  },
  computed:{
    Urlhandle(){
      // return window.location.href;
      // console.log(this.$route.path);
      return document.location.host+'/#'+this.$route.path;
    }
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
  padding-top: 12px;
  padding-bottom: 14px;
}
.n-switch{
  padding-top: 15px;
}
#headerIco{
  padding-top: 0.7rem;
}
#headerIco:hover{
  cursor: pointer;
}
</style>