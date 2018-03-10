<template>
  <div class="total">
    <div class="main">
      <div class="main_container clearfix">
        <div class="lefts">
          <ul>
            <li>
              <a href="#">我的资产</a>
            </li>
            <li>
              <a href="#">产品列表</a>
            </li>
          </ul>
        </div>
        <div class="rights">
          <div class="top">
            <ul class="clearfix">
              <li class="huobtn" @click="showHuos">活期产品</li>
              <li class="dingbtn" @click="showDings">定期产品</li>
            </ul>
          </div>
          <div class="huo">

            <div class="lists1">
              <div class="titles">
                <span>券商资管</span>
              </div>
            </div>
            <div class="lists2">
              <div class="titles">
                <span>场内基金</span>
                <span class="ques">
                  <a href="#">
                    什么是期权？</a>
                </span>
              </div>
            </div>
            <div class="lists3">
              <div class="titles">
                <span>场外基金</span>
                <span class="ques">
                  <a href="#">
                    长信开户</a>
                </span>
              </div>
            </div>
          </div>
          <div class="ding" style="display:none">
            <div class="lists5">
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="upPages" style="display:none">
      <div class="shows">
        <span class="del" @click="dels">x</span>
        <div class="showsIcon">
          <input type="text" name="" id="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "product",

  data() {
    return {
      arr3: [],
      arr2: [],
      arr4: [],
      arr1: [],
      box: false,
      box1:true,
    };
  },
  computed: {},
  beforeCreate() {},
  created() {
    // console.log(JSON.parse(localStorage.getItem("userInfo")).organName)
    //this.getProList();
    //console.log(this);
    this.getProListSec();

  },
  beforeMount() {},
  methods: {

    showHuos(){
      $('.ding').hide();
      $('.huo').show();
    },
    showDings(){
      $('.ding').show();
      $('.huo').hide();
    },
    changnei() {
      $('.upPages').show();
    },
    dels() {
      $('.upPages').hide();
    },    
    getProListSec(){
      const _self=this;
      console.log(_self);
      $.ajax({
        type:'get',
        contentType: "application/json",
        url: "/jgb-web/v1/products",
        //data: JSON.stringify(data),
        success: function(resp){
          console.log(resp.data);
          //console.log(resp.data.organName)
          // _self.$router.push({ path: "/product" });
          var arr1=[];
          var arr2=[];
          var arr3=[];
          var arr4=[];
          // console.log(resp.data.issueId);
          for(var i=0;i<resp.data.length;i++){
            if(resp.data[i].issueId==1){
              arr1.push(resp.data[i]);
            }
            else if(resp.data[i].issueId==2){
              arr2.push(resp.data[i]);
            }else if(resp.data[i].issueId==3){
              arr3.push(resp.data[i]);
            }else if(resp.data[i].issueId==4){
              arr4.push(resp.data[i]);
            }
          }

          var html1='';
          for (let index = 0; index < arr1.length; index++) {
            html1+='<div class=\'items\'><div class=\'tops\'><p><a href=\'#\'>'+arr1[index].name+'</a></p></div><ul class=\'clearfix\'><li><p class=\'info\'>七日年化收益率</p><p class=\'number\'>'+(arr1[index].seventhYearYield*100).toFixed(2)+'%</p></li><li><p class=\'info\'>万份收益</p><p class=\'number\'>'+arr1[index].yieldPerMillion+'</p></li><li><p>投资期限：每日申赎</p><p>更新日期：2018.02.28</p><p>爱心值：255/亿元（日终存量）</p></li></ul><div class=\'btns\'><a href=\'#\'>申购</a><a href=\'#\'>赎回</a><a href=\'#\' class=\'open\'>开户</a></div></div>';
          }
          var html2='';
          for (let index = 0; index < arr2.length; index++) {
            html2+='<div class=\'items\'><div class=\'tops\'><p><a href=\'#\'>'+arr2[index].name+'</a></p></div><ul class=\'clearfix\'><li><p class=\'info\'>七日年化收益率</p><p class=\'number\'>'+(arr2[index].seventhYearYield*100).toFixed(2)+'%</p></li><li><p class=\'info\'>万份收益</p><p class=\'number\'>'+arr2[index].yieldPerMillion+'</p></li><li><p>投资期限：每日申赎</p><p>更新日期：2018.02.28</p><p>爱心值：255/亿元（日终存量）</p></li></ul><div class="btnn"><a href="javascript:void(0)" @click="changnei">场内确权</a></div></div>';
          }
          var html3='';
          for (let index = 0; index < arr3.length; index++) {
            html3+='<div class=\'items\'><div class=\'tops\'><p><a href=\'#\'>'+arr3[index].name+'</a></p></div><ul class=\'clearfix\'><li><p class=\'info\'>七日年化收益率</p><p class=\'number\'>'+(arr3[index].seventhYearYield*100).toFixed(2)+'%</p></li><li><p class=\'info\'>万份收益</p><p class=\'number\'>'+arr3[index].yieldPerMillion+'</p></li><li><p>投资期限：每日申赎</p><p>更新日期：2018.02.28</p><p>爱心值：255/亿元（日终存量）</p></li></ul><div class="btnn"><a href="javascript:void(0)" @click="changnei">场外确权</a></div></div>';
          }
          var html4='';
          for (let index = 0; index < arr4.length; index++) {
            html4+='<div><div class=\'its clearfix\'><div class=\'items\' ><div class=\'tops\'><p><a href=\'#\'>'+arr4[index].name+'</a></p></div><ul class=\'clearfix\'><li><p class=\'info\'>预期报价收益率</p><p class=\'number\'>'+(arr4[index].seventhYearYield*100).toFixed(2)+'%</p></li><li><p class=\'info\'>期限</p><p class=\'number\'>'+arr4[index].yieldPerMillion+'</p></li><li><p>资金追加日：每日申赎</p><p>产品计息日：2018.02.28</p></li><li><p>产品到期日：每日申赎</p><p>资金到账日：2018.02.28</p></li></ul></div><div class=\'radius\'><p>爱心值:300/亿元（日终存量）</p><span>已结束</span></div></div></div>';
           }
          $('.lists1').append(html1);
          $('.lists2').append(html2);
          $('.lists3').append(html3);
          $('.lists5').append(html4);
        }, 
        error: function(error){
          console.log(error)
        }
      });
    }
    
  }
};
</script>
<style lang="scss" >
@import "./assets/css/common.scss";
@import "./assets/css/login.scss";
@import "./assets/css/product.scss";
.row {
  background: url("./assets/images/common/arrow.png") no-repeat 0;
}

// li {
//   margin-bottom: 10px;
//   color: #666666;
//   padding-left: 20px;
//   font-size: 14px;
//   background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAMAAABlXnzoAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkAAACy0jMDAAAAGHRSTlMAkFoGXuZ+GAjr+KM1h8ce/bD5pDbnyAd4gMQGAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAE1JREFUCNdjYGRiZkACLBKsbOwILgenhAQXNw+czysBAnwwPfwCYD5cj6AEFED0wLlCwiIIxaIQxRCjxKBGiQMtEuIWQThDFNkZqI4EACMBBiJGmpbaAAAAAElFTkSuQmCC")no-repeat
//     0 center;
// }
</style>
