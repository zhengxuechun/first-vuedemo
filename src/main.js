//入口JS函数//
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//此处是通过#app挂载（连接）到index.html中。引入路由相关的内容。
new Vue({
    el:'#app',
    render:h => h(App),
    router
})