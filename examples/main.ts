import Vue from 'vue';
import Msg from '../packages/index';
import App from './App.vue';

Vue.use(Msg);
Vue.config.productionTip = false;


declare module 'vue/types/vue' {
  interface Vue {
    msg: Function,
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app');
