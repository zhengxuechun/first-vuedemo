/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//此处的路由内容都会渲染到app.vue下面的router-view中，将下面4个组件发布为路由，以在图片下面展示内容
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
    //配置路由所有的
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        }, {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        }, 
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
         {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'msite'
        }
    ]
    }
)

