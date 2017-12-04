(function (Vue) {
    // 定义一个模板获取函数
    var loadTemplate = function (name) {
        return document.getElementById(name + '_temp').innerHTML;
    }
    // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
    // 1. 定义（路由）组件。
    // 可以从其他文件 import 进来
    var Home = {
        // 这是模板，点击后跳转为这个模板
        template: loadTemplate('home')
    }
    var List = {
        template: loadTemplate('list'),
        // jsonp跨域
        data: function () {
            this.$http.jsonp('http://localhost:2080/api/music')
            .then(res =>{
                // console.log(res.data);
                this.list = res.data;
            })
            return {
                list: []
            }
        }
    }
    var Item = {
        template: loadTemplate('item'),
        data: function () {    
            return {
                item: []
            }
        },
        //路由守卫，进入路由前做的事情
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            // 获得路由的id
            var id = parseInt( to.params.id);
            // 因为不能使用this，用next的vm代替
            next(vm=>{
                vm.$http.jsonp('http://localhost:2080/api/music/' + id)
                .then(res =>{
                    // console.log(res.data);
                    vm.item  = res.data;
                })
            })
          }
    }
    // 2. 定义路由
    // 每个路由应该映射一个组件。 其中"component" 可以是
    // 通过 Vue.extend() 创建的组件构造器，
    // 或者，只是一个组件配置对象。
    // 我们晚点再讨论嵌套路由。

    // 可以理解为路由和组件映射的关系
    var routes = [{
            path: '/home',
            // name : "home",
            component: Home
        },
        {
            path: '/songs',
            component: List,
        },
        {
            // name:'item',
            path: '/songs/:id',
            component: Item,
            name:"item"
        },
        {
            path: '/*',
            component: Home
        }
    ]

    // 3. 创建 router 实例，然后传 `routes` 配置
    // 你还可以传别的配置参数, 不过先这么简单着吧。
    var router = new VueRouter({
        routes // （缩写）相当于 routes: routes
    })

    // 4. 创建和挂载根实例。
    // 记得要通过 router 配置参数注入路由，
    // 从而让整个应用都有路由功能
    var app = new Vue({
        router
    }).$mount('#app')
})(Vue)