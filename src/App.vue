<template>
  <div id="app">
    <!--此处是为了将router中的页面渲染到首页面上，也就是登录以后看到的内容-->
    <router-view/>
   <FooterGuideVue v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuideVue from "vue/vuedemo/src/components/FooterGuide/FooterGuide.vue"
// //引入接口函数
// import {reqFoodTypes} from './api' 可以不用 之前作为测试使用

export default {
  // async mounted() {
  //   // //执行接口函数（测试接口）
  //   // const result = await reqFoodTypes()
  //   // console.log(result) 仅仅是做一个测试用
  // },
  mounted() {
    this.$store.dispatch('getAddress')// APP中发送了一起请求获取address
  },  
  components:{
    FooterGuideVue
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.app 
  width 100%
  height 100%
  background #f5f5f5
</style>



