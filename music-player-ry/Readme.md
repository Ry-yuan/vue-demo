# vue 的音乐播放器的简单搭建（单页面的应用）

## 1.前期的资料准备：
有静态的页面  
有后台，后天使用了express来搭建的  
有数据，通过json来返回


## 2.了解vue的基本使用方法
基本的数据绑定知识  
通用的一些指令  


## 3.了解vue-router 路由的使用（通过vue的官网例子）
vue-router的作用，通过不同的url路由选择不同的页面显示内容  
用于切换不同的视图  
路由里面的data需要是一个function

```js
//这是一个路由组件，点击某个列表路由就会加载这个组件
 var List = {
        template: loadTemplate('list'),
        //这里
        data: function () {
            return {
                list: songs
            }
        }
    }
```

重点：  
1.给每一个列表定义一个自己的路由：
```
 <router-link :to="{name :'item',params:{id :item.id}}">
 ```
 
难点：
2.路由守卫：  
在进入某个路由组件之前，进入后，离开时做的事before   
https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
 
3.理解整个流程  
路由模板放在了，script标签中，随便定义type类型。script标签不会显示在页面上。再通过innerHTML来获取对应的html模板

组件的定义（一个组件相当于一个特定的功能块，有自己的样式和js，html）  

组件的切换：通过路由的选择来调到不同的组件

单页面应用就是只有一个连接页面，不同的页面切换通过路由(vue-router)的选择来进行，数据通过ajax的请求获得，格式是json格式。

vue-resource是一个vue的ajax请求插件，支持jsonp。
 