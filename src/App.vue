<template>
    <Header :width="width" :height="height" @changeSidebar="changeSidebar"></Header>
    <SideBar :width="width" :height="height"></SideBar>
    <div class="pageContainer" :style="`padding-top:${height+20}px;margin-left:${width}px`">
        <router-view />
    </div>
</template>
<script>
import Header from '@/views/common/header.vue'
import SideBar from '@/views/common/sideBar.vue'
import {created,ref,computed,watch,getCurrentInstance} from 'vue'
export default {
    components: {
        Header,
        SideBar,
    },
    data() {
        return {
            message:'ceshi',
            // width:0,
            // height:0,
        }
    },
    setup() {
        console.log(ref(0))
        const { ctx } = getCurrentInstance();
        console.log(ctx)
        let height = computed (()=>ctx.$store.state.headerHeight)   
        let width = computed (()=>ctx.$store.state.sideBar)   
        const changeSidebar = ()=>{
            let showleft = !ctx.$store.state.showleft;
             
            if(!showleft){
                width = 0
                
            }else{
                width = 240
            }
            ctx.$store.commit('setSidebarshown',showleft)
            ctx.$store.commit('setSidebarWidth',width)
        }
        return {
            changeSidebar,height,width
        }
    }
    
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100vh;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
