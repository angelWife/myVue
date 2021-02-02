const webpack = require("webpack");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
  //部署应用包时的基本 URL
  publicPath: IS_PROD ? "/dist/" : "./",
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: "dist",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "assets",
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true,
  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾
  productionSourceMap: true,
  indexPath: "index.html", //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: "src/main.js", // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: "public/index.html", // 模板来源
      filename: "index.html", // 在 dist/index.html 的输出
      title: "Index Page", // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ["chunk-vendors", "chunk-common", "index"] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    },
    subpage: "src/main.js" //官方解释：当使用只有入口的字符串格式时,模板会被推导为'public/subpage.html',若找不到就回退到'public/index.html',输出文件名会被推导为'subpage.html'
  },
  configureWebpack: config => {
    if (IS_PROD) {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(true);
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    // extract: IS_PROD,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // webpack-dev-server 相关配置
  devServer: {
    // 设置代理
    hot: true, //热加载
    host: "0.0.0.0", //ip地址
    port: 7783, //端口
    https: false, //false关闭https，true为开启
    open: true, //自动打开浏览器
    proxy: {
      "/api": {
        //本地
        target: "xxx",
        // 如果要代理 websockets
        ws: true,
        changeOrigin: true
      },
      "/test": {
        //测试
        target: "xxx"
      },
      "/pre": {
        //预发布
        target: "xxx"
      },
      "/pro": {
        //正式
        target: "xxx"
      }
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
};
