<template>
  <div id="app">
    <c-head></c-head>
    <c-login></c-login>
    <c-footer></c-footer>
  </div>
</template>

<script>
import axios from "axios";
import cLogin from "./login.vue";
import cHead from "./header.vue";
import cFooter from "./footer.vue";

export default {
  name: "app",
  
    components: {
    cLogin,
    cHead,
    cFooter,
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
<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
