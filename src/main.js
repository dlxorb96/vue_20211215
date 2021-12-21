import { createApp } from 'vue'
import App from './App.vue'

// 1. 내가 직접 만든 기능 설정 파일
// router 설정
// CMD>npm i vue-route@next --save
import routes from './routes/index.js'

// element-plus
// CMD>npm i element-plus --save
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

// createApp(App).mount('#app')를 끊었다.
// 기능추가 하기 편하게
const app = createApp(App)

// 2. 필요한 기능 사용하도록  설정
app.use(routes);
app.use(ElementPlus);
app.mount('#app');
