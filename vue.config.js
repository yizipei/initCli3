const path = require('path')
let px2rem = require('postcss-px2rem')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

//const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: 'process.env.VUE_APP_PUB_PATH',
  assetsDir: '',
  lintOnSave: false,
  outputDir: process.env.NODE_ENV === 'development' ? 'devdist' : 'dist',
  productionSourceMap: false, // 生产环境不需要看到源码
  chainWebpack: config => {
    config.resolve.alias
      .set('css', resolve('src/assets/css'))//别名配置
    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  css: { // 自动导入官方配置
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "~@/assets/css/public.scss";`
      },
      postcss: {
        plugins: [px2rem({
          remUnit: 75
        })]
      }
    }
  },
  devServer: {
    port: 12220, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: { //代理配置
      '/api': {
        target: 'http://118.190.169.1:22344', //152 12344 121 8001 118.190.169.1
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //代理的路径
        }
      }
    }
  },
  configureWebpack: config => {
    config.externals = {
      'AMap': 'AMap',
      'AMapUI': 'AMapUI'
    }
    config.devtool = 'source-map'
    if (IS_PROD) {
      const plugins = []
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']//移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  }
}
//css自动加载 webpack插件配置
// function addStyleResource (rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/style/public.scss'),
//       ],
//     })
// }
