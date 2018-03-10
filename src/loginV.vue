<template>
  <div class="main">
    <div class="main_container clearfix">
      <div class="title">
        <span>登录</span>
      </div>
      <div class="left">
        <h3>登录</h3>
        <div class="rows">
          <span>手机号码：</span><input type="text" v-model="telphone">
        </div>
        <div class="rows">
          <span>登录密码：</span><input type="password" v-model="passwd" >
          <a href="#" class="forget">忘记密码？</a>
        </div>
        <div class="rows">
          <input type="button" value="登录" v-on:click="login">
        </div>
        <div class="rows">
          <p>没有账号？
            <a href="#">立即注册</a>
          </p>
        </div>
      </div>
      <div class="right">
        <p>机构宝-机构个性化现金管理工具</p>
        <ul>
          <li>对接持牌资产管理公司优质资产，为机构理财助理</li>
          <li>对接持牌资产管理公司优质资产，为机构理财助理</li>
          <li>对接持牌资产管理公司优质资产，为机构理财助理</li>
          <li>对接持牌资产管理公司优质资产，为机构理财助理</li>
        </ul>
        <div class="img">
          <img src="http://51jigoubao.com/static/img/qrcode.93c21f4.jpg" alt="">
          <span>关注机构宝微信:jigoubao</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "activate",

  data() {
    return {
      telphone: "",
      passwd: ""
    };
  },
  computed: {},
  created() {
  },
  methods: {
    login() {
      const _self = this;
      axios
        .post("/jgb-web/v1/organ/login", {
          telphone: this.telphone,
          passwd: this.passwd
        })
        .then(function(res) {
          console.log(res.data);
          if (res.data.status == 1) {
            // _self.getProList();
            _self.$router.push({ path: "/product" });
          } else {
            alert("fail");
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getProList() {
      const _self = this;
      axios
        .get("/jgb-web/v1/products")
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    loginSec() {
      const _self=this;
      const data={telphone:$("#phone").val(),passwd:$('#password').val()};
      $.ajax({
        type:'post',
        contentType: "application/json",
        url: "/jgb-web/v1/organ/login",
        data: JSON.stringify(data),
        success: function(resp){
          console.log(resp.data.organName)
            _self.$router.push({ path: "/product" });
          
        }, 
        error: function(error){
          console.log(error)
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/css/common.scss";
@import "./assets/css/login.scss";
.row {
  background: url("./assets/images/common/arrow.png") no-repeat 0;
}

li {
  margin-bottom: 10px;
  color: #666666;
  padding-left: 20px;
  font-size: 14px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAMAAABlXnzoAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkAAACy0jMDAAAAGHRSTlMAkFoGXuZ+GAjr+KM1h8ce/bD5pDbnyAd4gMQGAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAE1JREFUCNdjYGRiZkACLBKsbOwILgenhAQXNw+czysBAnwwPfwCYD5cj6AEFED0wLlCwiIIxaIQxRCjxKBGiQMtEuIWQThDFNkZqI4EACMBBiJGmpbaAAAAAElFTkSuQmCC")no-repeat
    0 center;
}
</style>
