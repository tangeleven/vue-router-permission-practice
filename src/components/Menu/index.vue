<template>
  <div>
    <!-- <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="2">
          <el-submenu index="2-1">
              <template slot="title">关于</template>
              <el-menu-item index="2-1-1"><router-link to="/about/index">关于我们</router-link></el-menu-item>
              <el-menu-item index="2-1-2"><router-link to="/about/product">产品列表</router-link></el-menu-item>
              <el-menu-item index="2-1-3"><router-link to="/about/company">公司简介</router-link></el-menu-item>
          </el-submenu>
      </el-menu-item>
      <el-menu-item index="3">
        <el-submenu index="3-1">
              <template slot="title">我的</template>
              <el-menu-item index="3-1-1"><router-link to="/my/index">个人信息</router-link></el-menu-item>
              <el-menu-item index="3-1-2"><router-link to="/my/bank">银行卡</router-link></el-menu-item>
              <el-menu-item index="3-1-3"><router-link to="/my/share">分享</router-link></el-menu-item>
          </el-submenu>
      </el-menu-item>
      <el-menu-item index="4"><router-link to="/consult">咨询</router-link></el-menu-item>
    </el-menu>

    <hr /> -->

    <!-- <MenuItem :routerList="routerList"></MenuItem> -->
    <el-menu class="el-menu-demo" mode="horizontal">
        <menu-item 
            v-for="route in routerList" 
            :key="route.path" 
            :item="route"
            :base-path="route.path"
        >
        </menu-item>
    </el-menu>
  </div>
</template>

<script>

import { constRouter, asyncRoutes } from '@/router.js'
import MenuItem from './MenuItem.vue'


export default {
    data() {
        return {
            routerList: []
        }
    },
    components: {
        MenuItem
    },
    methods: {
        
    },
    computed: {
        
    },
    mounted() {
        // console.log(1111, item);
        console.log(constRouter, asyncRoutes);
        let temp = [...constRouter, ...asyncRoutes]
        console.log(temp);
        
        this.routerList = temp;
    }
};
</script>
<style lang='scss' scoped>
</style>