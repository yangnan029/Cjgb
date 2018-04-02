<template>
    <div class="total">
        <div class="main">
            <div class="main_container clearfix">
                <div class="rights">
                    <div class="top">
                        <c-bingtu></c-bingtu>
                    </div>
                    <div class="sec">
                        <table>
                            <thead>
                                <tr>
                                    <td>总资产（元）</td>
                                    <td>昨日收益（元）</td>
                                    <td>累计收益（元）</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{totalAsset}}</td>
                                    <td>{{nowdayIncome}}</td>
                                    <td>{{totalIncome}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="sec_des">
                        <span>*本数据仅供参考，实际数据以基金公司发布为准。</span>
                    </div>
                    <div class="bottom">
                        <div class="titles">
                            <p>持有资产
                                <span>(*机构宝平台所显示的持有资产为经基金公司确认的资产，在途资产可以登录基金公司官网查看。)</span>
                            </p>
                        </div>
                        <div class="bottom_lists">
                            <ul>
                                <li v-for="(item,index) in arr1" :key="index">
                                    <div class="name">
                                        <span>{{item.investorName}}</span>
                                        <a href="javascrip:void(0)" @click="open">展开</a>
                                    </div>
                                    <div class="items" v-for='(ite,index) in item.taWealthAcctlist' :key="index">
                                        <div class="tops">
                                            <p>
                                                <a href="#">{{ite.prodName}}</a>
                                            </p>
                                        </div>
                                        <ul class="clearfix">
                                            <li>
                                                <p class="info">持有资产（元）</p>
                                                <p class="number">{{ite.totalAsset}}</p>
                                            </li>
                                            <li>
                                                <p class="info">昨日收益</p>
                                                <p class="number">{{ite.nowdayIncome}}</p>
                                            </li>
                                            <li>
                                                <p class="info">累计收益</p>
                                                <p class="number">{{ite.totalIncome}}</p>
                                            </li>
                                            <li>
                                                <p>七日年化：{{ite.seventhYearYield*100}}%</p>
                                                <p>万份收益： 1.1201</p>
                                                <p>更新日期： 2018.03.21</p>
                                            </li>
                                        </ul>
                                        <div class="btns">
                                            <a href="#">申购</a>
                                            <a href="#" class="active">赎回</a>
                                        </div>
                                    </div>
                                </li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import cBingtu from "./bingtu.vue";
export default {
  name: "product",
  components:{
      cBingtu
  },
  data() {
    return {
      arr1: [],
      totalAsset: "",
      nowdayIncome: "",
      totalIncome: "",
      show: false
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
    dateFormat(date, fmt) {
      if (!isNaN(date) && date != null) {
        let str = new Date(date);
        let obj = {
          "M+": str.getMonth() + 1,
          "d+": str.getDate(),
          "h+": str.getHours(),
          "m+": str.getMinutes(),
          "s+": str.getSeconds(),
          "q+": Math.floor((str.getMonth() + 3) / 3),
          S: str.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (str.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        for (let k in obj)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? obj[k]
                : ("00" + obj[k]).substr(("" + obj[k]).length)
            );
        return fmt;
      } else {
        return "";
      }
    },
    getProList() {
      const _self = this;
      axios
        .get("/jgb-web/v1/wealth/taAcctDetail")
        .then(function(res) {
          _self.totalAsset = res.data.data.totalAsset;
          _self.nowdayIncome = res.data.data.nowdayIncome;
          _self.totalIncome = res.data.data.totalIncome;
          _self.arr1 = res.data.data.orgTaAcctlist;
        //   console.logconsole.log(_self.arr1);
          //   console.log();
          //   if (res.data.status) {
          //     const data = res.data.data;
          //     const arr4 = data.filter(item => {
          //       return item.issueId === 1;
          //     });
          //     let arr1 = [];
          //   } else {
          //     alert("未登录");
          //   }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    open() {
      const dom = event.target;
      dom.parentNode.parentNode.classList.toggle("active");
      console.log();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/css/common.scss";
@import "./assets/css/login.scss";
@import "./assets/css/wealth.scss";
@import "./assets/css/bingtu.scss";

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
