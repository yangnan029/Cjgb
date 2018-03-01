<template>
<div class="main">
  <div class="main_container clearfix">
    <div class="lefts">
      <ul>
        <li><a href="#">我的资产</a></li>
        <li><a href="#">产品列表</a></li>
      </ul>
    </div>
    <div class="rights">
      <div class="top">
        <ul class="clearfix">
          <li>活期产品</li>
          <li>定期产品</li>
        </ul>
      </div>
      <div class="lists1">
        <div class="titles">
          <span>券商资管</span>
        </div>
        <div class="items" v-for="(items,index) in arr3" :key="index">
          <div class="tops">
            <p><a href="#">{{items.name}}</a></p>
          </div>
          <ul class="clearfix">
            <li>
              <p class="info">七日年化收益率</p>
              <p class="number">{{(items.seventhYearYield*100).toFixed(2)}}%</p>
              </li>
            <li>
              <p  class="info">万份收益</p>
              <p class="number">{{items.yieldPerMillion}}</p>
            </li>
            <li>
              <p>投资期限：每日申赎</p>
              <p>更新日期：2018.02.28</p>
              <p>爱心值：255/亿元（日终存量）</p>
            </li>

          </ul>
          <div class="btns">
              <a href="#">申购</a>
              <a href="#">赎回</a>
              <a href="#" class="open">开户</a>
            </div>
        </div>
 
      </div>
      <div class="lists2">
        <div class="titles">
          <span>场内基金</span>
          <span class="ques"><a href="#">
            什么是期权？</a></span>
        </div>
        <div class="items" v-for="(items,index) in arr2" :key="index">
          <div class="tops">
            <p><a href="#">{{items.name}}</a></p>
          </div>
          <ul class="clearfix">
            <li>
              <p class="info">七日年化收益率</p>
              <p class="number">{{items.seventhYearYield*100}}%</p>
              </li>
            <li>
              <p  class="info">万份收益</p>
              <p class="number">{{items.yieldPerMillion}}元</p>
            </li>
            <li>
              <p>投资期限：每日申赎</p>
              <p>更新日期：2018.02.28</p>
              <p>爱心值：255/亿元（日终存量）</p>
            </li>

          </ul>
          <div class="btnn">
              <a href="#">场内确权</a>
          </div>
        </div>
      </div>
      <div class="lists3">
        <div class="titles">
          <span>场外基金</span>
          <span class="ques"><a href="#">
            长信开户</a></span>
        </div>
        <div class="items" v-for="(items,index) in arr4" :key="index">
          <div class="tops">
            <p><a href="#">{{items.name}}</a></p>
          </div>
          <ul class="clearfix">
            <li>
              <p class="info">七日年化收益率</p>
              <p class="number">{{items.seventhYearYield*100}}%</p>
              </li>
            <li>
              <p  class="info">万份收益</p>
              <p class="number">{{items.yieldPerMillion}}元</p>
            </li>
            <li>
              <p>投资期限：每日申赎</p>
              <p>更新日期：2018.02.28</p>
              <p>爱心值：255/亿元（日终存量）</p>
            </li>

          </ul>
          <div class="btnn">
              <a href="#">场外确权</a>
          </div>
        </div>
        
        <div class="items" v-for="(items,index) in arr1" :key="index">
          <div class="tops">
            <p><a href="#">{{items.name}}</a></p>
          </div>
          <ul class="clearfix">
            <li>
              <p class="info">七日年化收益率</p>
              <p class="number">{{(items.seventhYearYield*100).toFixed(2)}}%</p>
              </li>
            <li>
              <p  class="info">万份收益</p>
              <p class="number">{{items.yieldPerMillion}}</p>
            </li>
            <li>
              <p>投资期限：每日申赎</p>
              <p>更新日期：2018.02.28</p>
              <p>爱心值：255/亿元（日终存量）</p>
            </li>

          </ul>
          <div class="btns">
              <a href="#">申购</a>
              <a href="#">赎回</a>
              <a href="#" class="open">开户</a>
            </div>
        </div>
      </div>
    </div>
</div>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "product",

  data() {
    return {
arr3:[],
arr2:[],
arr4:[],
arr1:[]
    };
  },
  computed: {},
  beforeCreate(){

  },
  created() {
    // console.log(JSON.parse(localStorage.getItem("userInfo")).organName)
    this.getProList();
    console.log(this)
  },
beforeMount(){

},
  methods: {

    getProList() {
      const _self = this;
      axios
        .get("/jgb-web/v1/products")
        .then(function(res) {
          if(res.data.status){
            const data=res.data.data;
            const arr4=data.filter((item)=>{
 return item.issueId===1
});
console.log(arr4);
let arr1=[];
let arr2=[];
let arr3=[];
for (let index = 0; index < data.length; index++) {
  if(data[index].issueId===2){
    arr1.push(data[index]);
  }else if(data[index].issueId===3){
    arr2.push(data[index]);
  }else if(data[index].issueId===4){
    arr3.push(data[index]);
  }
}
console.log(arr1)
console.log(arr2)
console.log(arr3)
          _self.arr3=arr3;
          _self.arr2=arr2;
          _self.arr4=arr4;
          _self.arr1=arr1;
           _self.productList=res.data.data
          }else{alert('未登录')};
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
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
