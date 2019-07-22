 
import router from '@/router'
import { getCookie } from '@/utils/auth'

console.log(getCookie('token'));

let whiteList = ['/login'];


router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    console.log(next)

    let hasToken = getCookie('token');
    

    if (hasToken) {
        next()
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


















