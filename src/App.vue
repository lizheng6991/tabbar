<template>
  <div id="App">
    <tabbar>
      <tabbaritem  path="/home" accolor="deeppink">
         <img slot="item-icon" src="../src/assets/img/A.png" alt="">
         <img slot="item-icon-active" src="../src/assets/img/logo.png" alt="">
         <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" accolor='red'> 
        <img slot="item-icon" src="../src/assets/img/B.png" alt="">
        <img slot="item-icon-active" src="../src/assets/img/logo.png" alt="">
         <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/shop">
         <img slot="item-icon" src="../src/assets/img/C.png" alt="">
         <img slot="item-icon-active" src="../src/assets/img/logo.png" alt="">
         <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/mine"> 
        <img slot="item-icon" src="../src/assets/img/D.png" alt="">
        <img slot="item-icon-active" src="../src/assets/img/logo.png" alt="">
         <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/tabbar.vue'
import Tabbaritem from './components/tabbar/tabbar-item.vue'
export default {
  name: 'App',
  components: {
    Tabbar,
    Tabbaritem,
  },

}
</script>

<style >
@import "./assets/css/base.css";

</style>