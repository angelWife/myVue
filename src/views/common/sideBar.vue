<template>
  <div class="pageSide" :style="`width:${width}px;padding-top:${height}px;`"></div>
</template>

<script>
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
    return {};
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
}
</style>
