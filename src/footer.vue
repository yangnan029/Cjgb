<template>
    <div class="footer">
      <div class="footer_container clearfix">
        <div class="footer_list">
          <dl>
            <dd>机构宝首页</dd>
            <dd>帮助中心</dd>
            <dd>新手指南</dd>
          </dl>
          <dl>
            <dd>联系我们</dd>
            <dd class="wechat">微信公众号：jigoubao</dd>
            <dd class="wechat">公司地址：上海市徐汇区乐山路33号1号楼210室</dd>
          </dl>
          <dl>
            <dd class="tel_tit">客服电话(工作时间:9:00-18:00)</dd>
            <dd class="num">021-64859676</dd>
          </dl>
        </div>
        <div class="download">
          <img src="http://51jigoubao.com/static/img/qrcode.93c21f4.jpg" alt="">
          <p>机构宝微信:jigoubao</p>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright© 2014-2017 51jigoubao All Rights Reserved 版权所有: 上海基智信息咨询有限公司</p>
        <p>沪公网安备 31010402001819 号</p>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "activate",

  data() {
    return {
    };
  },
  computed:{

  },
created(){
},
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/css/common.scss";
@import "./assets/css/footer.scss";
</style>