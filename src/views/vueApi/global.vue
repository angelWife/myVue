<template>
  <div class="globalBox">
    <div class="item">
      <div class="title">Vue.extend(options)</div>
      <ul>
        <li>
          <p class="fw600">参数:</p>
          <ul>
            <li>
              <code>{Object} options</code>
            </li>
          </ul>
        </li>
        <li>
          <p class="fw600">用法:</p>
          <p>
            使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
          </p>
          <p>
            <code>data</code> 选项是特例，需要注意 - 在
            <code>Vue.extend()</code> 中它必须是函数
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.globalBox {
  width: 800px;
  margin: 0 auto;
  .item {
    line-height: 40px;
    .title {
      font-size: 18px;
      font-weight: 600;
      text-indent: -1em;
    }
    ul {
      font-size: 16px;
      padding-left: 1.25em;
      line-height: 1.4em;
      margin: 1.2em 0 -1.2em;
      padding-bottom: 1.2em;
      li {
        list-style-type: disc;
        ul {
          li {
            list-style-type: circle;
          }
        }
      }
      code,
      per {
        font-family: "Roboto Mono", Monaco, courier, monospace;
        font-size: 0.85em;
        background-color: #f8f8f8;
        -webkit-font-smoothing: initial;
        -moz-font-smoothing: initial;
        font-family: monospace;
        white-space: pre;
        margin: 1em 0px;
        border-radius: 2px;
        position: relative;
      }
    }
    p {
      line-height: 1.6em;
      word-spacing: 0.05em;
      margin: 1.2em 0;
    }
    code {
      color: #d63200;
      padding: 3px 5px;
      margin: 0 2px;
      border-radius: 2px;
      white-space: nowrap;
    }
    pre code {
      overflow-x: auto;
      color: #525252;
      white-space: pre;
      padding: 1.2em 1.4em;
      font-size: 0.85rem;
      line-height: 1.6rem;
      display: block;
    }
  }
}
</style>
