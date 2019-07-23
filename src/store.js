import Vue from 'vue'
import Vuex from 'vuex'
import { constRoutes, asyncRoutes } from '@/router'
Vue.use(Vuex)

function filterRoutes(asyncRoutes, role) {
  return asyncRoutes.filter((route, index) => {
    console.log(1111, route);
    let result = route.meta&&route.meta.roles&&route.meta.roles.indexOf(role)!==-1 ? true : false;
    console.log(result);
    // debugger
    return result
  })
  
}


export default new Vuex.Store({
  state: {
    role: '',
    permission_routes: [],
    allRoutes: []
  },
  mutations: {
    SET_ROLE: (state, role) => {
      console.log(state);
      state.role = role
    },
    SET_ROUTE: (state, role) => {
      console.log('----------------')
      console.log(constRoutes, asyncRoutes)
      console.log('----------------')

      let temp = [...constRoutes];
      let tempRoute = filterRoutes(asyncRoutes, role);
      console.log(tempRoute);
      
      
      state.permission_routes = tempRoute;
      state.allRoutes = temp.concat(tempRoute);
      // debugger
    }
  },
  actions: {

  }
})
