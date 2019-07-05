<template>
<div class="home">
  <el-carousel height="720px" type="card">
    <el-carousel-item>
      <img src="../assets/1.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/2.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/3.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/2.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/5.jpg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/6.jpg">
    </el-carousel-item>
  </el-carousel>
  <!-- <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel> -->
  <!--<div style="width:100%; position:absolute; left:50%; transform:translateX(-50%)">
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
  </div>-->

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
      testArr: ["../assets/1.jpg", "../assets/2.jpg", "../assets/3.jpg", "../assets/4.jpg", "../assets/5.jpg", "../assets/6.jpg"]
    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style media="screen">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
