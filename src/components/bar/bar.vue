<template>
  <div id="bar">
    <barerji></barerji>
      <router-view/>
  </div>
</template>

<script>
  import barerji from '../bar_erji/bar_erji.vue';
  export default {
    data () {
      return {
        author: 'kk'
      };
    },
    components: { barerji }
  };
</script>

<style>
#bar{

}

</style>
