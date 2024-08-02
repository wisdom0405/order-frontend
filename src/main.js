// main.js는 vue 애플리케이션의 시작점
import { createApp } from 'vue'
import App from './App.vue'
// src/router/index.js 파일의 router를 사용하겠다는 선언
import router from '@/router/index.js' // index.js의 router 사용 (@쓰면 root기준)
import vuetify from './plugins/vuetify'; // . 쓰면 현재 폴더 기준 경로
// createApp(App).mount('#app') // mount : app.vue파일을 빌드해서 mount
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
