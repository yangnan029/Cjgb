<template>
  <div class="total">
    <div class="main">
      <div class="main_container clearfix">
        <div class="rights">
          <div class="top">
            <ul class="clearfix">
              <li @click="showHuo" :class="{active:box1}">活期产品</li>
              <li @click="showDing" :class="{active:!box1}">定期产品</li>
            </ul>
          </div>
          <div v-if="box1" class="huo">

            <div class="lists1">
              <div class="titles">
                <span>券商资管</span>
              </div>
              <div class="items" v-for="(items,index) in arr3" :key="'3'+index">
                <div class="tops">
                  <p>
                    <a href="#">{{items.name.replace('华信','随便')}}</a>
                  </p>
                </div>
                <ul class="clearfix">
                  <li>
                    <p class="info">七日年化收益率</p>
                    <p class="number">{{(items.seventhYearYield*100).toFixed(2)}}%</p>
                  </li>
                  <li>
                    <p class="info">万份收益</p>
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
                <span class="ques">
                  <a href="#">
                    什么是期权？</a>
                </span>
              </div>
              <div class="items" v-for="(items,index) in arr2" :key="'2'+index">
                <div class="tops">
                  <p>
                    <a href="#">{{items.name}}</a>
                  </p>
                </div>
                <ul class="clearfix">
                  <li>
                    <p class="info">七日年化收益率</p>
                    <p class="number">{{items.seventhYearYield*100}}%</p>
                  </li>
                  <li>
                    <p class="info">万份收益</p>
                    <p class="number">{{items.yieldPerMillion}}元</p>
                  </li>
                  <li>
                    <p>投资期限：每日申赎</p>
                    <p>更新日期：2018.02.28</p>
                    <p>爱心值：255/亿元（日终存量）</p>
                  </li>

                </ul>
                <div class="btnn">
                  <a href="javascript:void(0)" @click="changnei(items.name)">场内确权</a>
                </div>
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
              <div class="items" v-for="(items,index) in arr4" :key="'4'+index">
                <div class="tops">
                  <p>
                    <a href="#">{{items.name}}</a>
                  </p>
                </div>
                <ul class="clearfix">
                  <li>
                    <p class="info">七日年化收益率</p>
                    <p class="number">{{items.seventhYearYield*100}}%</p>
                  </li>
                  <li>
                    <p class="info">万份收益</p>
                    <p class="number">{{items.yieldPerMillion}}元</p>
                  </li>
                  <li>
                    <p>投资期限：每日申赎</p>
                    <p>更新日期：2018.02.28</p>
                    <p>爱心值：255/亿元（日终存量）</p>
                  </li>

                </ul>
                <div class="btnn">
                  <a href="#" @click="changnei(items.name)">场外确权</a>
                </div>
              </div>

              <div class="items" v-for="(items,index) in arr1" :key="index">
                <div class="tops">
                  <p>
                    <a href="#">{{items.name}}</a>
                  </p>
                </div>
                <ul class="clearfix">
                  <li>
                    <p class="info">七日年化收益率</p>
                    <p class="number">{{(items.seventhYearYield*100).toFixed(2)}}%</p>
                  </li>
                  <li>
                    <p class="info">万份收益</p>
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
          <div v-if="!box1" class="ding">
            <div class="lists5">
              <div v-for="(items,index) in arr3" :key="index">
                <div class="its clearfix" :key="'0'+index">
                  <div class="items">
                    <div class="tops">
                      <p>
                        <a href="#">{{items.name}}</a>
                      </p>
                    </div>
                    <ul class="clearfix">
                      <li>
                        <p class="info">预期报价收益率</p>
                        <p class="number">{{(items.seventhYearYield*100).toFixed(2)}}%</p>
                      </li>
                      <li>
                        <p class="info">期限</p>
                        <p class="number">{{items.yieldPerMillion}}</p>
                      </li>
                      <li>
                        <p>资金追加日：每日申赎</p>
                        <p>产品计息日：2018.02.28</p>
                      </li>
                      <li>
                        <p>产品到期日：每日申赎</p>
                        <p>资金到账日：2018.02.28</p>
                      </li>
                    </ul>
                  </div>
                  <div class="radius" :key="'1'+index">
                    <p>爱心值:300/亿元（日终存量）</p>
                    <span>已结束</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="upPages" v-show="box">
      <div class="shows">
        <div class="titles">
          <span>场内确权</span>
          <span class="del" @click="dels">x</span>
        </div>
        <div class="contents">

          <p>每个股东账户只需确权一次，新的股东账户交易请再确权一次。（确权请在首次交易后即刻进行）</p>
          <div class="showsIcon">
            <div class="rows">
              <label for="pro_name">选择产品：<button class="pro_name">{{productName}}</button>
              </label>
            </div>
            <div class="rows">
              <label for="money">申购金额：<input type="text" class="money"></label>
            </div>
            <div class="rows">
              <label for="counts">股东账号：<input type="text" class="counts" placeholder="例：B123456789"></label>
            </div>
            <div class="rows">
              <label for="date">交易日期：<input type="text" class="date"></label>
            </div>
          </div>
          <div class="sure_btn clearfix">
            <button class="sure">确权</button>
            <button class="cancel" @click="dels">取消</button>
          </div>
          <p class="points">注：请贵公司于当日15:00前在
            <span>场内交易系统</span>
          </p>
          <p class="points2">
            <span>长信利息收益B（519598）</span>交易</p>
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
      arr3: [],
      arr2: [],
      arr4: [],
      arr1: [],
      box: false,
      box1: true,
      productName: ""
    };
  },
  computed: {},
  beforeCreate() {},
  created() {
    // console.log(JSON.parse(localStorage.getItem("userInfo")).organName)
    this.getProList();
    //console.log(this);
  },
  beforeMount() {},
  methods: {
    getProList() {
      const _self = this;
      axios
        .get("/jgb-web/v1/products")
        .then(function(res) {
          if (res.data.status) {
            const data = res.data.data;
            const arr4 = data.filter(item => {
              return item.issueId === 1;
            });
            let arr1 = [];
            let arr2 = [];
            let arr3 = [];
            for (let index = 0; index < data.length; index++) {
              if (data[index].issueId === 2) {
                arr1.push(data[index]);
              } else if (data[index].issueId === 3) {
                arr2.push(data[index]);
              } else if (data[index].issueId === 4) {
                arr3.push(data[index]);
              }
            }

            _self.arr3 = arr3;
            _self.arr2 = arr2;
            _self.arr4 = arr4;
            _self.arr1 = arr1;
            _self.productList = res.data.data;
          } else {
            alert("未登录");
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    changnei(name) {
      console.log("123123123");
      this.productName = name;
      this.box = true;
    },
    dels() {
      this.box = false;
    },
    showDing() {
      this.box1 = false;
    },
    showHuo() {
      this.box1 = true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/css/common.scss";
//@import "./assets/css/login.scss";
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
