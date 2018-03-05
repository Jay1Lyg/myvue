// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import bar from './components/bar/bar';
import router from './router/index.js';
import axios from 'axios';
import store from './store/store.js';
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
