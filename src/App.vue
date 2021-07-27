<template>
  <div id="app">
    <!--此处是为了将router中的页面渲染到首页面上，也就是登录以后看到的内容-->
    <router-view/>
   <FooterGuideVue v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuideVue from "vue/vuedemo/src/components/FooterGuide/FooterGuide.vue"

export default {
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



