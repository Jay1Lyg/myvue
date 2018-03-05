<template>
  <div id="barerji">
    <!--<ul>-->
      <!--<li>-->
        <!--<router-link class="add" to="/bar/add">{{addpic}}</router-link>-->
      <!--</li>-->
      <!--<li>-->
        <!--<router-link class="add" to="/bar/add">{{addcard}}</router-link>-->
      <!--</li>-->
      <!--<li>-->
        <!--<router-link class="add" to="/bar">{{addprice}}</router-link>-->
      <!--</li>-->
      <!--<li>-->
        <!--<router-link class="add" to="/bar">{{addname}}</router-link>-->
      <!--</li>-->

    <!--</ul>-->
    <p v-on:click="counter">route.push</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        addpic: '添加照片',
        addcard: '卡券',
        addprice: '价格',
        addname: '商品名字'
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
  #barerji{
    width: 80%;
    float: left;
  }
  #barerji ul{
    display: flex;
  }
  #barerji ul li{
    flex: 1;
     }
  #barerji ul li .add{
    color: black;
    text-decoration: none;
  }

</style>
