<template>
    <div class="total">
        <div class="main">
            <div class="main_container clearfix">
                <div class="rights">
                    <div class="top"></div>
                    <div class="bottom">
                        <table>
                            <thead>
                                <tr>
                                    <td>日期</td>
                                    <td>行为</td>
                                    <td>投资人</td>
                                    <td>爱心值</td>
                                    <td>备注</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in arr1" :key="index">
                                    <td width="18%">{{dateFormat(item.time,'yyyy-MM-dd')}}</td>
                                    <td width="18%">{{item.actionDesc}}</td>
                                    <td width="29%">{{item.investorName}}</td>
                                    <td width="10%" class="point">{{item.point}}</td>
                                    <td width="34%">
                                        <span>{{'产品：'+item.productName}}</span><br>
                                        <span>{{'金额：'+item.memo}}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
      arr1: []
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
        .get("/jgb-web/v1/points")
        .then(function(res) {
          // console.log(res.data.data.resultList);
          _self.arr1 = res.data.data.resultList;
          console.log(_self.arr1);
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/css/common.scss";
@import "./assets/css/login.scss";
@import "./assets/css/loveValue.scss";
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
