import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createStore} from "vuex"
import router from '@/router/main.js'
import axios from 'axios'

const app= createApp(App);


const stores =createStore({
    state(){
        return{
            theme:false
        }
    },
    mutations:{
        ChangeTheme(state){
            state.theme=!state.theme
            // console.log(state.theme)
        }
    }
})

app.use(stores);
app.use(router);
app.mount('#app');
