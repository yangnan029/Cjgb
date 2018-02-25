<template>
  <div id="app">
    <c-login></c-login>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <div class="list">
      <button @click="show=!show">button</button>
        <h4 v-html="str" v-show="show">{{str}}</h4>
      
      <div class="title">
        <span>影院热映</span><span class="more">更多</span>
      </div>
        <ul>
          <li v-for="(items,index) in list" :key="index">
            <img :src="items.cover" alt="">
            <p>{{items.title}}</p>
          </li>
        </ul>


    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import cLogin from "./login.vue";

export default {
  name: "app",
  
    components: {
    cLogin,
  },
data() {
    return {
      list: [],
      show:true,
      str:'<p>Yang</p>'
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      const _self=this;
      // axios
      //   .get(
      //     "https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0"
      //   )
      //   .then(function(response) {
      //     _self.list=response.data.subjects
      //   })
      //   .catch(function(error) {
      //     console.log(' _self.list');
          
      //     console.log(error);
      //   });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/css/app.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
