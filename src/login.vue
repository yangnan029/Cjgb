<template>
<div class="container">
        <div class="main_container clearfix">
            <div class="header clearfix">
                <div class="logo">
                    <img src="data:image/png;base64,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"
                        alt="">
                </div>
                <div class="head_list">
                    <ul class="clearfix">
                        <li>
                            <a href="#">首页</a>
                        </li>
                        <li>
                            <a href="#">活期</a>
                        </li>
                        <li>
                            <a href="#">安全保障</a>
                        </li>
                        <li>
                            <a href="#">帮助中心</a>
                        </li>
                        <li>
                            <a href="#">我的账户</a>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="#">注册</a>
                        </li>
                        <li>
                            <a href="#">登录</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="login">
                <div class="login_content clearfix">
                    <div class="title">
                        <span>登录</span>
                    </div>
                    <div class="left">
                        <div class="head">
                            <p>登录</p>
                        </div>
                        <div class="row">
                            <span>手机号码：</span>
                            <input type="text" name="" placeholder="请输入您的手机号码" v-model="userName">
                        </div>
                        <div class="row">
                            <span>登录密码：</span>
                            <input type="password" name="" placeholder="请输入您的登录密码" v-model="pwd">
                            <div class="forget">
                                <span><a href="#">忘记密码？</a></span>
                            </div>
                        </div>
                        <div class="row">
                            <button @click="loginIn">登录</button>
                        </div>
                        <div class="register">没有账号？
                            <a href="#">立即注册</a>
                        </div>
                    </div>
                    <div class="right">
                        <p>机构宝-机构个性化现金管理工具</p>
                        <div class="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
                        <div class="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
                        <div class="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
                        <div class="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
                        <div class="img">
                            <img src="http://51jigoubao.com/static/img/qrcode.93c21f4.jpg" alt="">
                            <span>关注机构宝微信:jigoubao</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer">
                <div class="footer_container">
                    <div class="footer_list clearfix">
                        <div class="left">
                            <dl>
                                <dt>机构宝首页</dt>
                                <dd>帮助中心</dd>
                                <dd>新手指南</dd>
                            </dl>
                        </div>
                        <div class="middle">
                            <dl>
                                <dt>联系我们</dt>
                                <dd>
                                    <img src="http://51jigoubao.com/static/img/footer-weixin.24d5c94.png" alt=""> 微信公众号：jigoubao</dd>
                                <dd>
                                    <img src="http://51jigoubao.com/static/img/footer-address.1532586.png" alt=""> 公司地址：上海市徐汇区乐山路33号1号楼210室</dd>
                            </dl>
                        </div>
                        <div class="right">
                            <span>客服电话（工作时间9:00-18:00）</span>
                            <span>021-64859676</span>
                        </div>
                        <div class="wechat_img">
                            <img src="http://51jigoubao.com/static/img/qrcode.93c21f4.jpg" alt="">
                            <p>机构宝微信：jigoubao</p>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright© 2014-2017 51jigoubao All Rights Reserved 版权所有: 上海基智信息咨询有限公司
                        </p>
                    </div>
                </div>
    
                <div class="footer_bottom">
                    <p>
                        <img src="http://51jigoubao.com/static/img/copyright.d0289dc.png" alt="">沪公网安备 31010402001819 号</p>
                </div>
            </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "activate",

  data() {
    return {
      userName: "",
      pwd: ""
    };
  },
  computed:{

  },
created(){
console.log(JSON.parse(localStorage.getItem("userInfo")).organName)
this.getNumber();
console.log(this)
},
  methods: {
    loginIn() {
      axios
        .post("/jgb-web/v1/organ/login", {
          telphone:this.userName ,
          passwd: this.pwd
        })
        .then(function(response) {
          console.log(response.data.data);
          localStorage.setItem('userInfo',JSON.stringify(response.data.data) );
        })
        .catch(function(error) {
          console.log(error);
        });

    },
    getNumber(){
        axios
        .get(
          "/jgb-web/v1/products/rec"
        )
        .then(function(response) {
            const num=Number(response.data.data.seventhYearYield)*100;

          console.log(num.toFixed(2)+'%')
        })
        .catch(function(error) {
          
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/css/common.scss";
@import "./assets/css/login.scss";
@import "./assets/css/huoqi.scss";
.row {
  background: url("./assets/images/common/arrow.png") no-repeat 0;
}
</style>