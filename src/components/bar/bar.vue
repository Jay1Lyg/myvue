<template >
    <div id="app2" v-if="articles.node" v-on:click="greet" >
      WOSHI SECTION过分
      <img :src="img" alt="">
      {{articles.node.name}}
    </div>
</template>

<script>
  export default {
    data () {
      return {
        author: '微信公众号 jinkey-love',
        articles: {node: null},
        img: '../../../static/logo.png'
      };
    },
    mounted: function () {
      var _this = this;
      this.$ajax.get('/package.json', {}, {
        headers: {
        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        console.log(response.data);
        _this.articles.node = response.data;
        // this.articles = response.data["subjects"] 也可以
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response);
      });
    },
    methods: {
      greet: function () {
        alert('kk');
      }
    }
  };
</script>

<style>
#app2{
  color: blue;
}
</style>
