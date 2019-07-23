 
import router from '@/router'
import store from '@/store'
import { getCookie } from '@/utils/auth'

console.log(getCookie('token'));

let whiteList = ['/login'];


router.beforeEach((to, from, next) => {

    console.log('==== ', store.state)

    let hasToken = getCookie('token');
    

    if (hasToken) {

        const hasRoles = store.state.role;

        if (hasRoles) {
            console.log('888', to);
            
            next()
        } else {
            store.commit('SET_ROLE', hasToken)
            store.commit('SET_ROUTE', hasToken)
            router.addRoutes(store.state.permission_routes)
            console.log('9999', to);
            // 这里 next({...to}) 很重要, 不传参数，页面空白，就像路由没有匹配似的
            // 有一个问题，我写的整个vuex router ，使用 next({...to, replace: true})  会有问题，刷新页面的时候，显示空白，就像是路由没有匹配到似的。
            next({...to})
        }

        
        
    } else {
        // 白名单是为了防止这里的路由一直循环
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({
                path: `/login?redirect=${to.path}`
            })
        }
        
    }
})


















