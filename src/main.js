// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

// 把store挂载到全局
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
export default {
  // mpvue-loader v1.1.1 之后config无效，直接写app.json
  // config: {
  //   pages: [
  //     '^pages/index/main',
  //     'pages/sell/main',
  //     'pages/search/main',
  //     'pages/details/main'
  //   ],
  //   window: {
  //     backgroundTextStyle: 'light',
  //     navigationBarBackgroundColor: '#fff',
  //     navigationBarTitleText: '第一个小程序',
  //     navigationBarTextStyle: 'black'
  //   }
  // }
}
