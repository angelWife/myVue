import { createStore } from "vuex";

export default createStore({
  state: {
    a: 10,
    china: {
      aa: 5,
      bb: 6
    },
    headerHeight:60,
    sideBar:240,
    showleft:true,
  },
  mutations: {
    setHeadHeight(state,headerHeight){
        state.headerHeight = headerHeight;
    },
    setSidebarWidth(state,sideBar){
        state.sideBar = sideBar;
    },
    setSidebarshown(state,sideBar){
        state.showleft = sideBar
    }
  },
  actions: {

  },
  modules: {}
});
