<template>
  <div id="tab">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar',

}
</script>

<style >
#tab{
  position: fixed;
  display: flex;
  background-color: #d6d6d6;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px -2px 10px  #d6d6d6;
}

</style>