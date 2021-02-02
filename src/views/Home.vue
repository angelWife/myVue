<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    {{ message }}
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {
  ref,
  watch,
  reactive,
  computed,
  getCurrentInstance,
  onMounted
} from "vue";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "first test"
    };
  },
  setup() {
    const { ctx } = getCurrentInstance();
    // console.log(ctx);
    // console.log(ctx.$router);
    // console.log(ctx.$router.currentRoute.value);
    // console.log(ctx.$store.state.a);
    const state = reactive({
      count: 0,
      name: "test"
    });
    const count = ref(0);
    const dfsMethod = () => {
      let tree = {
        id1: {
          message: "hello"
        },
        id2: {
          message: "world",
          children: {
            "id2-1": {
              message: "haha",
              children: {}
            },
            "id2-2": {
              message: "heihei"
            }
          }
        }
      };

      function dfs(tree = {}) {
        const array = [tree];
        let messages = [];
        while (array.length) {
          const top = array.pop();
          if (top.message) {
            messages.push(top.message);
          }
          const keys = Object.keys(top.children || {});
          let i = keys.length;
          while (i > 0) {
            i -= 1;
            array.push(top.children[keys[i]]);
          }
        }
        console.log(messages);
        return messages;
      }
      tree = {
        message: null,
        children: tree
      };
      dfs(tree);
    };
    const initHtml = computed(() => {
      console.log("111111");
    });

    const inflateLZ77 = str => {
      const minMatchedLength = 3;
      const buffer = [];
      const result = [];
      debugger;
      for (let i = 0; i < str.length; ) {
        let foundIndex = -1;
        let foundLength = -1;
        for (let length = buffer.length; length >= minMatchedLength; length--) {
          if (i + length > str.length) continue;
          const substr = str.substring(i, i + length);
          for (let j = 0; j <= buffer.length - length; j++) {
            if (buffer.slice(j, j + length).join("") === substr) {
              foundIndex = j;
              foundLength = length;
              break;
            }
          }
          if (foundIndex > -1) break;
        }
        if (foundIndex > -1) {
          buffer.push(...str.substring(i, i + foundLength));
          result.push(`<${foundIndex},${foundLength}>`);
          i += foundLength;
        } else {
          buffer.push(str[i]);
          result.push(str[i]);
          i += 1;
        }
      }
      return result.join("");
    };

    watch(() => {});
    onMounted(() => {
      // dfsMethod()
      // console.log(inflateLZ77('SayHelloHelloToWord'))
    });
    return {
      initHtml
    };
  }
};
</script>
