<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  created () {
    //解决苹果
    var u = navigator.userAgent
    var flag
    var myFunction
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isIOS) {
      document.body.addEventListener('focusin', () => { //软键盘弹起事件
        flag = true
        clearTimeout(myFunction)
      })
      document.body.addEventListener('focusout', () => { //软键盘关闭事件
        flag = false
        if (!flag) {
          myFunction = setTimeout(function () {
            //重点  =======当键盘收起的时候让页面回到原始位置(这里的top可以根据你们个人的需求改变，并不一定要回到页面顶部)
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }, 200)
        }
      })
    } else {
      // 解决微信浏览器键盘弹回后页面被顶上去问题
      document.addEventListener('focusout', () => {
        document.body.scrollTop = document.body.scrollHeight
      })
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
