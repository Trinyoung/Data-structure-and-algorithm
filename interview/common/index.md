## 前端性能优化的点有哪些？
1. 路由懒加载
说明： SPA项目，一个路由代表一个页面，如果不做处理，项目打包后，会把所有页面打包成一个文件，当用户打开首页时，会一次性打开所有的资源， 造成首页加载很慢。通常使用动态导入的方式来实现路由懒加载
vue项目中，路由懒加载的实现方式： 
```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./components/Home.vue')

const router = new Router({
  routes: [
    { path: '/', component: Home }
  ]
})

export default router
```
路由懒加载的原理：懒加载实现的前提是ES6动态的加载模块 `import()`，要实现懒加载，就得将懒加载的子模块分离出来，打包成一个单独的文件。

2. 组件懒加载
除了路由懒加载， 组件的懒加载在很多场景下也有重要的作用
可以减少同一个组件， 在多个页面中，同时加载。使用懒加载就可以只在使用时加载。但是会增加访问请求，所以需要在适当的时候使用路由懒加载。有以下情景建议使用组件懒加载
    1. 该页面JS 文件体积大， 导致页面打开慢，可以通过组件懒加载进行资源拆分，。
    2. 该组件不是已进入页面就显示，需要在一定条件下才触发的。
    3. 该组件复用性高，很多页面都引入，利用组件懒加载抽离出该页面，一方面可以很好的利用缓存，同时也可以减少页面的js体积大小。

3. 合理利用TreeShaking
TreeShaking 消除无用的JS代码，减少代码体积；TressShaking 可以很好利用了函数式编程独立导出的好处。

4. 骨架屏优化白屏时长
使用骨架屏，可以缩短白屏时长，尤其是手机端的项目。常见的骨架平插件就是在打包项目时将骨架屏的内容直接放到html文件的根节点中。

5. 长列表的虚拟滚动
首页中不乏有需要渲染的长列表，当渲染条数过多时，所需要的渲染时长会很长，滚动时还会造成页面卡顿，整体体验非常不好。

6. web worker 优化场任务

7. requestAnimationFrame 制作动画