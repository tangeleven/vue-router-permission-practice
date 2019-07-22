<template>
   <div>
       <h3>login</h3>
       <input type="text" v-model="value"><button @click="loginHandle">登录</button>
   </div>
</template>

<script>
import { setCookie } from '@/utils/auth'
import router from '../router';
export default {
    data() {
        return {
            value: ""
        }
    },
    methods: {
        loginHandle() {
            setCookie(this.value)
            console.log(this.$route);
            console.log(router);
            // this.router.push({path: this.$route.query.redirect})

            router.push({path: this.$route.query.redirect})
            
        }
    }
}

</script>
<style lang='scss' scoped>

</style>