import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './layout/index.vue'

Vue.use(Router)


export const asyncRoutes = [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    meta: {
      title: '关于'
    },
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        meta: {
          title: '关于我们'
        }
      },
      {
        path: 'product',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ './views/Product.vue'),
        meta: {
          title: '产品列表'
        }
      },
      {
        path: 'company',
        name: 'company',
        component: () => import(/* webpackChunkName: "company" */ './views/Company.vue'),
        meta: {
          title: '公司简介'
        }
      }
    ]
  },
  {
    path: '/my',
    component: Layout,
    redirect: '/my/index',
    meta: {
      title: '我的',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'index',
        name: 'my',
        component: () => import(/* webpackChunkName: "my" */ './views/My.vue'),
        meta: {
          title: '个人信息'
        }
      },
      {
        path: 'bank',
        name: 'bank',
        component: () => import(/* webpackChunkName: "bank" */ './views/Bank.vue'),
        meta: {
          title: '银行卡'
        }
      },
      {
        path: 'share',
        name: 'share',
        component: () => import(/* webpackChunkName: "share" */ './views/Share.vue'),
        meta: {
          title: '分享'
        }
      }
    ]
  },
  {
    path: '/consult',
    component: Layout,
    redirect: '/consult/index',
    meta: {
      title: '咨询'
    },
    children: [
      {
        path: 'index',
        name: 'consult',
        component: () => import(/* webpackChunkName: "consult" */ './views/Consult.vue'),
        meta: {
          title: '咨询',
          roles: ['admin']
        }
      }
    ]
  },
]

export const constRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    meta: {
      title: '登录',
      hidden: true
    }
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})
