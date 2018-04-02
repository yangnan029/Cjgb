<template>
  <div class="total">
    <div class="main">
      <div class="main_container clearfix">
        <div class="lefts">
          <ul>
            <router-link to="wealth" tag="li">我的资产</router-link>
            <router-link to="productV" tag="li">产品列表</router-link>
            <router-link to="loveValue" tag="li">爱心值</router-link>
            <router-link to="accountInfo" tag="li">账户信息</router-link>
          </ul>
        </div>
        <div class="rights">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product",

  data() {
    return {
    };
  },
  computed: {},
  beforeCreate() {},
  created() {
  },
  beforeMount() {},
  methods: {

  }
};
</script>
<style lang="scss" >
@import "./assets/css/common.scss";
@import "./assets/css/account.scss";

// li {
//   margin-bottom: 10px;
//   color: #666666;
//   padding-left: 20px;
//   font-size: 14px;
//   background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAMAAABlXnzoAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkAAACy0jMDAAAAGHRSTlMAkFoGXuZ+GAjr+KM1h8ce/bD5pDbnyAd4gMQGAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAE1JREFUCNdjYGRiZkACLBKsbOwILgenhAQXNw+czysBAnwwPfwCYD5cj6AEFED0wLlCwiIIxaIQxRCjxKBGiQMtEuIWQThDFNkZqI4EACMBBiJGmpbaAAAAAElFTkSuQmCC")no-repeat
//     0 center;
// }
</style>
