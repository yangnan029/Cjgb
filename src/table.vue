<template>
    <div class="contain">

        <div class="container">

            <div class="title clearfix">
                <div class="logo">
                    <img src="./assets/images/table/logo.png" alt="">
                </div>
                <div class="icons">
                    <span>
                        <img src="./assets/images/table/clock.png" alt="">
                    </span>
                    <span>
                        <img src="./assets/images/table/email.png" alt="">
                    </span>
                    <span>
                        <img src="./assets/images/table/touxiang.png" alt="">
                        <span class="name">阿里巴巴</span>
                    </span>
                </div>
            </div>
            <div class="left">
                <ul>
                    <li>
                        <dl>
                            <dt>
                                <i></i>
                                企业查询</dt>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>
                                <i></i>企业监控</dt>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>
                                <i></i>企业收藏</dt>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt class="active">
                                <i></i>系统管理</dt>
                            <dd>用户中心</dd>
                            <dd>通知中心</dd>
                            <dd class="active">用户管理</dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="right_tit">
                    <span>用户管理</span>
                    <button @click="showBox(false)">新增用户</button>
                </div>
                <div class="searchs">
                    <ul>
                        <li @click="sortYear">正序</li>
                        <li @click="sortYearSec">倒序</li>
                        <li>
                            <div class="search_dock">
                                <input type="text" value="请输入您想搜索的内容">
                                <i></i>
                            </div>
                            <div class="release">
                                <span></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="shows">
                    <table ellpadding="0" cellspacing="0" border="0" style="border:1px solid #666;">
                        <thead>
                            <tr>
                                <td>账户类型</td>
                                <td>账号姓名</td>
                                <td>电子邮箱</td>
                                <td>手机号码</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(items,index) in list" :key="index">
                                <td>{{items.types}}</td>
                                <td>{{items.name}}</td>
                                <td>{{items.email}}</td>
                                <td>{{items.numbers}}</td>
                                <td>
                                    <button @click="delItem(index)">删除</button>
                                </td>
                                <td>
                                    <button @click="showBox(items,index)">修改</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="bottoms">
                        <span>每条显示10条</span>
                        <span>共计15条数据</span>
                        <div class="yema">
                            <span>回到首页</span>
                            <span class="point">。。。</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span class="point">。。。</span>
                            <span>59</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="upPages" v-show="editUser">
            <div class="box">
                <div class="top">
                    <span class="title">新增用户</span>
                    <span class="del" @click="cancel">X</span>
                </div>
                <div class="forms">
                    <div class="row">
                        <label for="types">年龄：
                            <input class="types" type="text" value="Admin" v-model="types">
                        </label>
                    </div>
                    <div class="row">
                        <label for="name">用户姓名：
                            <input type="text" value="姜文" class="name" v-model="name">
                        </label>
                    </div>
                    <div class="row">
                        <label for="numbers">电话号码
                            <input type="text" placeholder="请输入您的电话号码" class="numbers" v-model="numbers">
                        </label>
                    </div>
                    <div class="row">
                        <label for="email">电子邮箱
                            <input type="text" placeholder="请输入您的邮箱" class="emails" v-model="email">
                        </label>
                    </div>
                </div>
                <div class="btns">
                    <button class="cancel" @click="cancel">取消</button>
                    <button class="sure" @click="handleItem">确定</button>
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
      types: "",
      name: "",
      numbers: "",
      email: "",
      index: -1,
      editUser: false,
      list: [{ types: "10", name: "2131", numbers: "1232", email: "232" }]
    };
  },
  computed: {},
  created() {
    console.log();
  },
  methods: {
    newUser() {
      $(".upPages").show();
    },
    cancel() {
      this.editUser = false;
      // $(".upPages").hide();
    },
    showBox(item, index) {
      const _self = this;

      console.log(item);
      if (item) {
        _self.types = item.types;
        _self.name = item.name;
        _self.numbers = item.numbers;
        _self.email = item.email;
        _self.index = index;
      } else {
          _self.types='';
          _self.name='';
          _self.numbers='';
          _self.email='';
        _self.index = -1;
      }
      _self.editUser = true;
    },
    delItem(index) {
      this.list.splice(index, 1);
    },
    handleItem() {
      const _self = this;
      const obj = {
        types: _self.types,
        name: _self.name,
        numbers: _self.numbers,
        email: _self.email
      };
      if (_self.index != -1) {
        _self.list[_self.index] = obj;
      } else {
        _self.list.push(obj);
      }
      this.editUser = false;
    },
    sortYear(){
        const _self=this;
        const arr=_self.list.sort((item,item1)=>{
            return Number(item.types)>Number(item1.types);
        });
        console.log(arr);
    },
    sortYearSec(){
        const _self=this;
        const arr=_self.list.sort((item,item1)=>{
            return Number(item.types)<Number(item1.types);
        });
        console.log(arr);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/css/userManager.scss";
</style>
