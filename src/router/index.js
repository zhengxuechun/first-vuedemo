/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(() => {
  });
};


//此处的路由内容都会渲染到app.vue下面的router-view中，将下面4个组件发布为路由，以在图片下面展示内容
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
    //配置路由所有的
    routes: [
        {
          path: '/msite',
          component: MSite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
          meta: {
            showFooter: true
          }
        },
        {
          path: '/search',
          component: Search,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/order',
          component: Order,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/profile',
          component: Profile,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/',
          redirect: '/msite'
        },
        {
          path: '/login',
          component: Login
        },
    ]
    })

