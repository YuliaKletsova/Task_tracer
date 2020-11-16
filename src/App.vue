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
</style>
