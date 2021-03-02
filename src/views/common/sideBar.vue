<template>
  <div class="pageSide" :style="`width:${width}px;padding-top:${height}px;`">
      <ul>
          <li v-for="(item,index) in navList" :key="index" @click="changeNav(index)">
              <router-link :class="item.active?'active':''" :to="item.path">{{item.title}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import {computed,getCurrentInstance} from 'vue';
import {navList} from '../../assets/js/sidebar.js'
export default {
  name: "PageSide",
  props:{
        width:{
            type:Number,
            default:240,
            require:true
        },
        height:{
            type:Number,
            default:60,
            require:true
        },
    },
  data() {
    return {
        navList,
    };
  },
  setup() {
      const changeNav = (index)=>{
          navList.filter((v,i)=>{
              v.active = false;
              if(i==index){
                  v.active = true;
              }
          })
      }
      return {
          changeNav
      }
  }
};
</script>

<style lang="less" scoped>
.pageSide {
    position: fixed;
    top:0;
    left:0;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
    height: 100vh;
    background: #f1f1f1;
    transition: all 0.3s;
    li{
        height:40px;
        line-height: 40px;
        font-size:16px;
        overflow: hidden;
        cursor: pointer;
        a{
            display: block;
            height:100%;
            padding:0 20px;
            color:#333;
            text-decoration: none;
            transition: all 0.3s;
            background: #f9f9f9;
            &:hover{
                color:#0099ff;
            }
            &.active{
                background: #0099ff;
                color:#fff;
            }
        }
    }
}
</style>
