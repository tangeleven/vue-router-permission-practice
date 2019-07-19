
<template>
    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item 
            :key="route.path" 
            v-for="route in routerList"
            
        >
            <router-link to="/">{{route.meta&&route.meta.title ? route.meta.title : '无'}}</router-link>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    props: {
        routerList: {
            typeL: Object,
            required: true
        }
    },
    methods: {

    }
}

</script>
<style lang='scss' scoped>

</style>