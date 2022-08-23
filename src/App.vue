<script setup>

import {NButton,NLayout,NLayoutContent,NLayoutFooter,NLayoutHeader,NSpace,NConfigProvider,NMessageProvider,NScrollbar,NBackTop,NAffix} from 'naive-ui';
import {useRouter,useRoute} from 'vue-router'
import headers from './components/headers.vue'
import footers from './components/footers.vue'

const router=useRouter();
const route =useRoute();
</script>

<template>

<n-config-provider :theme="themecheck" >
  <n-message-provider>
      <n-back-top :right="100" :visibility-height="100"></n-back-top>
      <n-layout >
        <n-config-provider :theme-overrides="GlobTheme">
          <headers ></headers>
        </n-config-provider>
        <n-layout-content>
          <router-view></router-view>
          <n-theme-editor></n-theme-editor>
        </n-layout-content>
        <n-layout-footer >
          <n-config-provider :theme-overrides="GlobTheme">
          <footers></footers>
          </n-config-provider>
        </n-layout-footer>
      </n-layout>
  </n-message-provider>
</n-config-provider>
</template>

<script>
import {defineComponent} from "vue";
import {darkTheme, NThemeEditor,useMessage} from 'naive-ui'

const GlobTheme={
  "Button": {
    "textColorHover": "#4680FFFF",
    "textColorPressed": "#1C81CFFF",
    "textColorTextHover": "#4680FFFF",
    "textColorFocus": "#4680FFFF",
    "textColorTextFocus": "#4680FFFF",
    "textColorTextPressed": "#1C81CFFF"
  }
};

export default defineComponent({
  setup(){

    return{
      darkTheme
    }
  },
  computed:{
    // themecheck(){
    //   // console.log('themecheck')
    //   return (this.$store.state.theme)?darkTheme:null
    // }
  },
  components:{
    NThemeEditor
  }
})

</script>

<style scoped>

</style>
