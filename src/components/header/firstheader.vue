<template>
  <div id="firstheader">
    <router-link class="foo" to="/foo">Go to Foo</router-link>
    <router-link class="foo" to="/bar">Go to Bar</router-link>


  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        author: 'kk'
      };
    }
  };
</script>

<style>
#firstheader{
  width: 100%;

  background: #fff;
  border: 1px solid #4da2ad;
  display: flex;
}
#firstheader .foo{
  width: 100%;
  flex: 1;
  list-style: none;
  line-height: 45px;
}

</style>
