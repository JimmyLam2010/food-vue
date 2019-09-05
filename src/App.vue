<template>
  <div id="app">
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import footerComponent from './components/footer.vue'
export default {
  name: 'App',
  components:{footerComponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
