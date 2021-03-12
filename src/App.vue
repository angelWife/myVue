<template>
  <div class="pageMain flex flex-col">
    <Header
      :width="width"
      :height="height"
      @changeSidebar="changeSidebar"
      :message="message"
    ></Header>
    <div
      class="flex-group1 flex flex-row"
      :style="`height:calc(100% - ${height}px);position:relative;`"
    >
      <SideBar :width="width" :height="height"></SideBar>
      <div class="flex-group1 pageContainer">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/views/common/header.vue";
import SideBar from "@/views/common/sideBar.vue";
import { created, reactive, ref, toRefs, computed, watch, getCurrentInstance } from "vue";
export default {
  components: {
    Header,
    SideBar
  },
  setup() {
    const _num = ref(0)
    const _obj = reactive({name:'小明',age:'19'})
    console.log(_num.value);
    console.log(_obj.name);
    const { ctx } = getCurrentInstance();
    console.log(ctx);
    const data = {
        message: "ceshi"
    }
    let height = computed(() => ctx.$store.state.headerHeight);
    let width = computed(() => ctx.$store.state.sideBar);
    const changeSidebar = () => {
      let showleft = !ctx.$store.state.showleft;

      if (!showleft) {
        width = 0;
      } else {
        width = 240;
      }
      ctx.$store.commit("setSidebarshown", showleft);
      ctx.$store.commit("setSidebarWidth", width);
    };
    return {
        ...toRefs(data),
      changeSidebar,
      height,
      width
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
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
.pageMain {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
.pageContainer {
  background: #fff;
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 20px;
  overflow: hidden;
  overflow-y: auto;
  /*sidebar滚动条样式*/
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
    background: #0781f3;
  }

  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background: #abc0ee;
  }
}
</style>
