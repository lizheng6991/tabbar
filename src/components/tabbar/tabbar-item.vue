<template>
  <div class="tabbar-item" @click="change">
      <slot v-if="isActive" name="item-icon-active"></slot>
      <slot v-else name="item-icon"></slot>
      <div :style="iscolor">  <slot name="item-text"></slot> </div>
     
  </div>
</template>

<script>
export default {
  name: 'tabbaritem',
  props:{
    path:String,
    accolor:{
      type:String,
      default:"rgb(0, 117, 63)"
    }
  },
   data() {
    return {
    }
  },
  computed:{
    isActive(){
      return this.$route.path == this.path
    },
    iscolor(){
      return this.isActive ? {color:this.accolor}:{}
    }
  },
 
  methods: {
    change(){
      this.$router.push(this.path)
    }
    /*  change(){
      this.$router.push(this.$route.path)
    } */
  },
}
</script>

<style >
.tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
}
.active{
  color: rgb(0, 117, 63);
}
</style>