<template>
    <div id="clear">
      <h2>{{msg}}</h2>
      <hr/>
      <h3>{{$store.state.count}}</h3>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>



</template>

<script>
  import store from '@/store/store.js';
  export default{
    data () {
      return {
        msg: 'Hello Vuex'

      };
    },
    computed: {
      count () {
        return this.$store.state.count;
//        alert(this.$store.state.count);
      }
    },
    store

  };
</script>

<style>
#clear{
  width: 100%;
  z-index: 100;
  background: blanchedalmond;
}
</style>
