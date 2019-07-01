<template>
<div class="home">
  <mu-carousel>
    <mu-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
      <h3>{{ item }}</h3>
      <h3>{{ item }}</h3>
      <h3>{{ item }}</h3>
      <h3>{{ item }}</h3>
    </mu-carousel-item>
  </mu-carousel>
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
