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
