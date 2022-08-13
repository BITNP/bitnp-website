<script setup>

import {NButton,NLayout,NLayoutContent,NLayoutFooter,NLayoutHeader,NSpace,NConfigProvider,NScrollbar,NBackTop,NAffix} from 'naive-ui';
import {useRouter,useRoute} from 'vue-router'
import headers from './components/headers.vue'
import footers from './components/footers.vue'
import bodys from './views/home/home.vue'

const router=useRouter();
const route =useRoute();
</script>

<template>

<n-config-provider :theme="themecheck" >
  <div style="">
    <n-back-top :right="100" :visibility-height="100"></n-back-top>
    <n-layout >
      <headers ></headers>
      <n-layout-content content-style="">
        <router-view></router-view>
<!--        <bodys></bodys>-->
        <n-theme-editor>
        </n-theme-editor>
      </n-layout-content>
      <n-layout-footer >
        <footers></footers>
      </n-layout-footer>
    </n-layout>
  </div>
<!--  </n-scrollbar>-->
</n-config-provider>
</template>

<script>
import {defineComponent} from "vue";
import {darkTheme, NThemeEditor} from 'naive-ui'
export default defineComponent({
  setup(){
    return{
      darkTheme
    }
  },
  computed:{
    themecheck(){
      // console.log('themecheck')
      return (this.$store.state.theme)?darkTheme:null
    }
  },
  components:{
    NThemeEditor
  }
})

</script>

<style scoped>

</style>
