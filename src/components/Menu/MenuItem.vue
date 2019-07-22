<template>
  <div :style="{'display': 'inline-block'}" v-if="item.meta&&!item.meta.hidden">
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

    <hr />

    <MenuItem :routerList="routerList"></MenuItem> -->
    <template v-if="hasOneShowingChild()">
        <router-link :to="resolvePath(item.path)">
            <el-menu-item :index="resolvePath(item.path)">
                {{item.meta&&item.meta.title}}
            </el-menu-item>
        </router-link>
    </template>
    
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">{{item.meta&&item.meta.title}}</template>
        
        <menu-item 
            v-for="routeChild in item.children" 
            :key="routeChild.path" 
            :item="routeChild"
            :base-path="item.path"
        ></menu-item>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { routes } from '@/router.js'
import Item from './Item'

export default {
    name: "MenuItem",
    
    props: {
        item: {
            type: Object,
        },
        basePath: {
            type: String,
            default: ""
        }
    },
    components: {
        Item
    },
    methods: {
        hasOneShowingChild() {

            if (this.item.children && this.item.children.length==1 && this.item.redirect) {
                return true;
            }

            if (!this.item.children) {
                return true;
            }
            
            return false;
        },
        resolvePath(routePath) {
            return path.resolve(this.basePath, routePath)
        }
    },
    computed: {
        
    },
    mounted() {
        this.hasOneShowingChild()
        // console.log(1111, this.item);

    }
};
</script>
<style lang='scss' scoped>
</style>