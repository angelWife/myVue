<template>
  <div class="pageHeader flex" :style="`height:${height}px`">
      <div class="logo" :style="`height:${height}px;line-height:${height}px;`">
          {{title}}
      </div>
      <div class="headerOper flex-group1 flex justify-between">
          <div class="oper-left">
              <span class="iconfont icon-liebiao" @click="$emit('changeSidebar')"></span>
              {{width}}
          </div>
          <div class="oper-right"></div>
      </div>
  </div>
</template>

<script>
import {getCurrentInstance} from 'vue'
export default {
    props:{
        height:{
            type:Number,
            default:60,
            require:true
        },
        width:{
            type:Number,
            default:240,
            require:true
        }
    },
    data() {
        return {
            title:'vue3.0',
        }
    },
    setup() {
        
        const { ctx } = getCurrentInstance();
       
        const setSideBar = ()=>{
             
        }
        return {
            setSideBar,
        };
    }
};
</script>

<style lang="less" scoped>
.pageHeader {
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    z-index: 1;
    height: 60px;
    background: #222;
    color:#f1f1f1;
    .logo{
        font-size:20px;
        text-align: center;
        font-weight: 600;
        width: 240px;
    }
    .icon-liebiao{
        line-height: 60px;
        font-size:20px;
        margin-left:10px;
        cursor: pointer;
    }
    
}
</style>
