import { createApp } from 'vue'
import { configure } from "vue-gtag";
import './style.css'
import App from './App.vue'

configure({
    tagId: "G-XK6LTW8XM7"
})
createApp(App).mount('#app')
