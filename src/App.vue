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
    <div style="">
      <n-back-top :right="100" :visibility-height="100"></n-back-top>
      <n-layout >
        <headers ></headers>
        <n-layout-content content-style="">
          <router-view></router-view>
          <n-theme-editor>
          </n-theme-editor>
        </n-layout-content>
        <n-layout-footer >
          <footers></footers>
        </n-layout-footer>
      </n-layout>
    </div>
  </n-message-provider>
</n-config-provider>
</template>

<script>
import {defineComponent} from "vue";
import {darkTheme, NThemeEditor,useMessage} from 'naive-ui'
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
