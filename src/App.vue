<template>
  <div id="app">
    <firstheader></firstheader>
    <!--<router-link class="foo" to="/foo">Go to Foo</router-link>-->
    <!--<router-link class="foo" to="/bar">Go to Bar</router-link>-->
    <router-view/>
  </div>
</template>

<script>
 import firstheader from './components/header/firstheader.vue';
 export default {
   components: { firstheader }
 };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
  .foo{
    color:#4da2ad;
    text-decoration: none;
  }
</style>
