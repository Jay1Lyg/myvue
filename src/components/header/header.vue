<template>
  <div id="firstheader">
    <ul class="ul">
      <li v-on:click="counter">
        Go to Foo

      </li>
      <li>
        <router-link class="foo" to="/bar">Go to Bar</router-link>
      </li>
      <li>
        <router-link class="foo" to="/foo">Go to Foo</router-link>
      </li>
      <li>
        <router-link class="foo" to="/bar">Go to Bar</router-link>
      </li>
      <li>
        <router-link class="foo" to="/foo">Go to Foo</router-link>
      </li>
      <li>
        <router-link class="foo" to="/bar">Go to Bar</router-link>
      </li>
      <li>
        <router-link class="foo" to="/foo">Go to Foo</router-link>
      </li>
      <li>
        <router-link class="foo" to="/clear">Go to Clear</router-link>
      </li>
      <!--<p v-on:click="counter">route.push</p>-->
    </ul>
    <router-view></router-view>






  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        author: 'kk'
      };
    },
    methods: {
      counter: function () {
        this.$router.push('/add');
      }
    }
  };
</script>

<style>
  #firstheader{
    width: 100%;

  }
  #firstheader .ul{
    width: 15%;
    background: #eee;
    margin-right:10px;
    float: left;
  }
  .foo{
    width: 100%;
    color: #4da2ad;
    list-style: none;
    line-height: 45px;
  }

</style>
