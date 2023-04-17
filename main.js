import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// 引入重置样式
import "./reset.css"

// 引入element-plus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);

app.use(router).use(ElementPlusIconsVue).use(ElementPlus).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }