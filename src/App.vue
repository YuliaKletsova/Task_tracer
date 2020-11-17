<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>  
    </div>
  <Create />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  components: {
    Navbar
  }
  
}
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body {
    min-width: 1000px;
    min-height: 500px;
    width: 100%;
    height: 100%;
    //background: url('~@/assets/background.jpg') no-repeat center right;
    //background-size: cover;
  }
</style>
