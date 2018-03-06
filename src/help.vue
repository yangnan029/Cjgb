<template>
    <div class="contain">
        <div class="container clearfix">
            <div class="left">
                <ul>
                    <li class="active"><a href="#">帮助中心</a></li>
                    <li><a href="#">新手指南</a></li>
                </ul>
            </div>
            <div class="right">
                <div class="title">
                    <span>活期机构宝</span>
                </div>
                <div class="help_list">
                    <ul>
                        <li>
                            <div class="name" @click="toggles($event)">什么是机构宝？</div>
                            <div class="details">
                                <p>机构宝平台“活期机构宝”对标的金融产品，是货币市场基金。目前主要包括：</p>
                                <p>1，长信利息收益货币市场基金（场内：利息B（519598）；场外：长信利息收益B（519998））。</p>
                                <p>注：单个账户单次申购低于500万份的，（场内：利息A（519599）；场外：长信利息收益A（519999））。</p>
                                <p>2，广发钱袋子货币市场基金（000509）</p>
                                <p> 3，广发货币B货币市场基金（270014）</p>
                                <p> 注：单个账户单次申购不得低于500万份。</p>
                            </div>
                        </li>
                        <li>
                            <div class="name" @click="toggles($event)">什么是机构宝？</div>
                            <div class="details">
                                <p>机构宝平台“活期机构宝”对标的金融产品，是货币市场基金。目前主要包括：</p>
                                <p>1，长信利息收益货币市场基金（场内：利息B（519598）；场外：长信利息收益B（519998））。</p>
                                <p>注：单个账户单次申购低于500万份的，（场内：利息A（519599）；场外：长信利息收益A（519999））。</p>
                                <p>2，广发钱袋子货币市场基金（000509）</p>
                                <p> 3，广发货币B货币市场基金（270014）</p>
                                <p> 注：单个账户单次申购不得低于500万份。</p>
                            </div>
                        </li>
                        <li>
                            <div class="name" @click="toggles($event)">什么是机构宝？</div>
                            <div class="details">
                                <p>机构宝平台“活期机构宝”对标的金融产品，是货币市场基金。目前主要包括：</p>
                                <p>1，长信利息收益货币市场基金（场内：利息B（519598）；场外：长信利息收益B（519998））。</p>
                                <p>注：单个账户单次申购低于500万份的，（场内：利息A（519599）；场外：长信利息收益A（519999））。</p>
                                <p>2，广发钱袋子货币市场基金（000509）</p>
                                <p> 3，广发货币B货币市场基金（270014）</p>
                                <p> 注：单个账户单次申购不得低于500万份。</p>
                            </div>
                        </li>
                        <li>
                            <div class="name" @click="toggles($event)">什么是机构宝？</div>
                            <div class="details">
                                <p>机构宝平台“活期机构宝”对标的金融产品，是货币市场基金。目前主要包括：</p>
                                <p>1，长信利息收益货币市场基金（场内：利息B（519598）；场外：长信利息收益B（519998））。</p>
                                <p>注：单个账户单次申购低于500万份的，（场内：利息A（519599）；场外：长信利息收益A（519999））。</p>
                                <p>2，广发钱袋子货币市场基金（000509）</p>
                                <p> 3，广发货币B货币市场基金（270014）</p>
                                <p> 注：单个账户单次申购不得低于500万份。</p>
                            </div>
                        </li>
                        <li>
                            <div class="name" @click="toggles($event)">什么是机构宝？</div>
                            <div class="details">
                                <p>机构宝平台“活期机构宝”对标的金融产品，是货币市场基金。目前主要包括：</p>
                                <p>1，长信利息收益货币市场基金（场内：利息B（519598）；场外：长信利息收益B（519998））。</p>
                                <p>注：单个账户单次申购低于500万份的，（场内：利息A（519599）；场外：长信利息收益A（519999））。</p>
                                <p>2，广发钱袋子货币市场基金（000509）</p>
                                <p> 3，广发货币B货币市场基金（270014）</p>
                                <p> 注：单个账户单次申购不得低于500万份。</p>
                            </div>
                        </li>
                    </ul>
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
    // this.getProList();
    // console.log(this);
  },
  beforeMount() {},
  methods: {
    toggles(event){
        const name= event.target;
        console.log($(name).text());
        $(name).closest("li").find('.details').toggle();
        $(name).closest("li").siblings().find('.details').css("display","none");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/css/common.scss";
@import "./assets/css/login.scss";
@import "./assets/css/help.scss";
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
