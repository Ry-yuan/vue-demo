(function (Vue) {
    var loadTemplate = function (name) {
        return document.getElementById(name + '_temp').innerHTML;
    }
    // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

    // 1. 定义（路由）组件。
    // 可以从其他文件 import 进来
    var songs = [{
        "id": 1,
        "name": "Knockin' On Heaven's Door",
        "artist": "Guns N' Roses",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/Guns N' Roses - Knockin' On Heaven's Door.mp3",
        "poster": "http://127.0.0.1:2080/uploads/Guns N' Roses.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/Guns N' Roses - Knockin' On Heaven's Door.lrc"
    }, {
        "id": 2,
        "name": "I Will Be Your Shelter",
        "artist": "Rebecca Blaylock",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/Rebecca Blaylock - I Will Be Your Shelter.mp3",
        "poster": "http://127.0.0.1:2080/uploads/Rebecca Blaylock.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/Rebecca Blaylock - I Will Be Your Shelter.lrc"
    }, {
        "id": 3,
        "name": "我恨我痴心",
        "artist": "刘德华",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/刘德华 - 我恨我痴心.mp3",
        "poster": "http://127.0.0.1:2080/uploads/刘德华.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/刘德华 - 我恨我痴心.lrc"
    }, {
        "id": 4,
        "name": "不说再见",
        "artist": "好妹妹乐队",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/好妹妹乐队 - 不说再见.mp3",
        "poster": "http://127.0.0.1:2080/uploads/好妹妹乐队.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/好妹妹乐队 - 不说再见.lrc"
    }, {
        "id": 5,
        "name": "青城山下白素贞",
        "artist": "好妹妹乐队",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/好妹妹乐队 - 青城山下白素贞.mp3",
        "poster": "http://127.0.0.1:2080/uploads/好妹妹乐队.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/好妹妹乐队 - 青城山下白素贞.lrc"
    }, {
        "id": 6,
        "name": "送情郎(2010.12.11 德云二队张一元晚场)",
        "artist": "岳云鹏",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).mp3",
        "poster": "http://127.0.0.1:2080/uploads/岳云鹏.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).lrc"
    }, {
        "id": 7,
        "name": "往事只能回味",
        "artist": "岳云鹏,宋小宝",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/岳云鹏,宋小宝 - 往事只能回味.mp3",
        "poster": "http://127.0.0.1:2080/uploads/岳云鹏,宋小宝.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/岳云鹏,宋小宝 - 往事只能回味.lrc"
    }, {
        "id": 8,
        "name": "天梯(Live) - live",
        "artist": "张智霖",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/张智霖 - 天梯(Live) - live.mp3",
        "poster": "http://127.0.0.1:2080/uploads/张智霖.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/张智霖 - 天梯(Live) - live.lrc"
    }, {
        "id": 9,
        "name": "友情岁月",
        "artist": "李克勤",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/李克勤 - 友情岁月.mp3",
        "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 友情岁月.lrc"
    }, {
        "id": 10,
        "name": "合久必婚",
        "artist": "李克勤",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/李克勤 - 合久必婚.mp3",
        "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 合久必婚.lrc"
    }, {
        "id": 11,
        "name": "天梯",
        "artist": "李克勤",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/李克勤 - 天梯.mp3",
        "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 天梯.lrc"
    }, {
        "id": 12,
        "name": "爱不释手",
        "artist": "李克勤",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/李克勤 - 爱不释手.mp3",
        "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 爱不释手.lrc"
    }, {
        "id": 13,
        "name": "飞花",
        "artist": "李克勤",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/李克勤 - 飞花.mp3",
        "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 飞花.lrc"
    }, {
        "id": 14,
        "name": "充满希望",
        "artist": "玛莉亚",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/玛莉亚 - 充满希望.mp3",
        "poster": "http://127.0.0.1:2080/uploads/玛莉亚.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/玛莉亚 - 充满希望.lrc"
    }, {
        "id": 15,
        "name": "友谊之光",
        "artist": "玛莉亚",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/玛莉亚 - 友谊之光.mp3",
        "poster": "http://127.0.0.1:2080/uploads/玛莉亚.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/玛莉亚 - 友谊之光.lrc"
    }, {
        "id": 16,
        "name": "老中医",
        "artist": "花粥",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/花粥 - 老中医.mp3",
        "poster": "http://127.0.0.1:2080/uploads/花粥.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/花粥 - 老中医.lrc"
    }, {
        "id": 17,
        "name": "静静的看着你装逼",
        "artist": "花粥&四四",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/花粥&四四 - 静静的看着你装逼.mp3",
        "poster": "http://127.0.0.1:2080/uploads/花粥&四四.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/花粥&四四 - 静静的看着你装逼.lrc"
    }, {
        "id": 18,
        "name": "也曾相识",
        "artist": "谭咏麟",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/谭咏麟 - 也曾相识.mp3",
        "poster": "http://127.0.0.1:2080/uploads/谭咏麟.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/谭咏麟 - 也曾相识.lrc"
    }, {
        "id": 19,
        "name": "夏日寒风",
        "artist": "谭咏麟",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/谭咏麟 - 夏日寒风.mp3",
        "poster": "http://127.0.0.1:2080/uploads/谭咏麟.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/谭咏麟 - 夏日寒风.lrc"
    }, {
        "id": 20,
        "name": "雾之恋",
        "artist": "谭咏麟",
        "duration": 342,
        "music": "http://127.0.0.1:2080/uploads/谭咏麟 - 雾之恋.mp3",
        "poster": "http://127.0.0.1:2080/uploads/谭咏麟.jpg",
        "lyric": "http://127.0.0.1:2080/uploads/谭咏麟 - 雾之恋.lrc"
    }]
    var Home = {
        // 这是模板，点击后跳转为这个模板
        template: loadTemplate('home')
    }
    var List = {
        // jsonp跨域
        template: loadTemplate('list'),
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
        data: function(){
            return {
                // item: params.id

                // console.log(items);
            }
        },
       
    }
    // 2. 定义路由
    // 每个路由应该映射一个组件。 其中"component" 可以是
    // 通过 Vue.extend() 创建的组件构造器，
    // 或者，只是一个组件配置对象。
    // 我们晚点再讨论嵌套路由。
    var routes = [{
            path: '/home',
            // name : "home",
            component: Home
        },
        {
            path: '/songs',
            component: List
        },
        {
            // name:'item',
            path: '/songs/:id',
            component: Item
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