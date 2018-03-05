<template>
  <div id="add">
    <img class="img" :src="imgUrl" alt="">
    <p>{{author}}</p>
    <div>
      <ul v-if="icon.node" class="ul_one" >
        <li v-for="item in icon.node" class="li">{{item.name}}</li>
      </ul>
    </div>
    <p v-on:click="counter">route.push</p>
  </div>



</template>

<script>
  export default {
    data () {
      return {
        author: 'kk',
        imgUrl: './static/image/1.jpg',
        icon: {node: null}
      };
    },
    mounted: function () {
      var _this = this;
      this.$ajax.get('http://www.kaishiapp.com/agent/a_allskilltypes/1/null', {}, {
        headers: {
        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        console.log(response);
        _this.icon.node = response.data;
        // this.articles = response.data["subjects"] 也可以
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response);
      });
    },
    methods: {
      counter: function () {
        this.$router.push('/foo');
      }
    }
  };
</script>

<style lang="scss">
  #add{
    width: 80%;
    float: left;
    .img{
      width: 100%;
    }
  }
  .ul_one{
    width: 80%;
  }
  .li{

    float: left;
  }

</style>
