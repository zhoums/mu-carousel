<template>
<div class="home">
  <div style="width:100%; position:absolute; left:50%; transform:translateX(-50%)">
    <tao-carousel height="575px" arrow="always">
      <tao-carousel-item>
        <img src="../assets/1.png">
        <img src="../assets/2.png">
        <img src="../assets/3.png">
        <img src="../assets/4.png">
      </tao-carousel-item>
      <tao-carousel-item>
        <img src="../assets/5.png">
        <img src="../assets/6.png">
        <img src="../assets/7.png">
        <img src="../assets/8.png">
      </tao-carousel-item>
      <tao-carousel-item>
        <img src="../assets/9.png">
        <img src="../assets/10.png">
        <img src="../assets/11.png">
        <img src="../assets/12.png">
      </tao-carousel-item>
    </tao-carousel>
  </div>

  <!-- <test-panel></test-panel>
  <test-toast ref="toast"></test-toast> -->
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      testArr: [1, 2, 5]
    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style media="screen">
.el-carousel__item {
  display: flex !important;
  justify-content: space-between;
}
</style>
