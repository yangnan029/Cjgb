<template>
    <div class="main">
        <div class="main_container">
            <div class="first">
                <div class="first_container clearfix">
                    <div class="left">
                        <div class="left_container">
                            <div class="top">
                                <p>活期机构宝</p>
                            </div>
                            <div class="bottom">
                                <ul>
                                    <li>收益远超银行活期</li>
                                    <li>支持随存随取</li>
                                    <li>安全合规无风险</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right_container">
                            <p class="time">2018.03.03</p>
                            <p class="name">机构宝七日年化收益率</p>
                            <p class="number">{{(seventhYearYield*100).toFixed(4)}}%</p>
                            <p><button class="logined">已登录</button><button class="register_fast">快速注册</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second">
                <div class="second_container">
                    <div class="tits">
                        <p>为您优选的货币基金</p>
                    </div>
                    <div class="pros clearfix">
                        <div class="pros_name">
                            <p>{{name}}</p>
                        </div>
                        <div class="weeks">
                            <p class="num">{{(obj.seventhYearYield*100).toFixed(4)}}%</p>
                            <p>七日南华收益率</p>
                        </div>
                        <div class="days">
                            <p class="num">{{yieldPerMillion}}元</p>
                            <p>日万份收益</p>
                        </div>
                        <div class="on_time">
                            <p class="num">实时到账</p>
                            <p>取现到账时间</p>
                        </div>
                        <div class="buys">
                            <button>立即投资</button>
                        </div>
                    </div>
                    <div class="imgs">
                        <ul>
                            <li>
                                <img src="data:image/png;base64,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" alt="">
                                <p class="nam">收益远超活期</p>
                                <p>机构宝货币基金收益远超银行活期存款利息，日日复利，每日结转。一分起存，轻松享受企业理财收益。</p>
                            </li>
                            <li>
                                <img src="data:image/png;base64,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" alt="">
                                <p class="nam">收益远超活期</p>
                                <p>机构宝货币基金收益远超银行活期存款利息，日日复利，每日结转。一分起存，轻松享受企业理财收益。</p>
                            </li>
                            <li>
                                <img src="data:image/png;base64,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" alt="">
                                <p class="nam">收益远超活期</p>
                                <p>机构宝货币基金收益远超银行活期存款利息，日日复利，每日结转。一分起存，轻松享受企业理财收益。</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="third">
                <div class="third_container">
                    <div class="tits">
                        <p>准备以下资料，立即开户吧</p>
                    </div>
                    <div class="img">
                        <img src="http://51jigoubao.com/static/img/img004.d714032.png" alt="">
                    </div>
                    <div class="buttons">
                        <button class="yuyue">预约咨询（请联系：021-64859676）</button><button>自主开户</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: "current",

  data() {
    return {
        seventhYearYield:0,
        name:'',
        yieldPerMillion:0,
        obj:{}
    };
    },
    computed: {},
    beforeCreate(){

    },
    created() {
        // console.log(JSON.parse(localStorage.getItem("userInfo")).organName)
        // this.getProList();
        // console.log(this)
        this.getNums();
    },
    beforeMount(){

    },
    methods: {
        getNums(){
           const _self=this;
           axios.get("/jgb-web/v1/products/rec")
            .then(function (response) {
                
          if(response.data.status)
            {
                const data=response.data.data;
                console.log(_self);
                _self.seventhYearYield =data.seventhYearYield;
                _self.name=data.name;
                _self.obj=data;
                _self.yieldPerMillion=data.yieldPerMillion;
                console.log();
            }
            else{
                alert("未登录")
            }
               // console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
 }
</script>
<style lang="scss" scoped>
@import "./assets/css/common.scss";
@import "./assets/css/current.scss";
</style>
