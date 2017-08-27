var vm = new Vue({
	el:'#app',
	data:{
 		productList:[],
 		Quantity:0,
 		checkAllFlag:false,
 		totalMoney:0,
 		active:false
	},
	// 过滤器
	filters:{
		// money为过滤器的名称 ， 使用方法是再参数后面加上|后加上过滤器的名称
		// value是接受的参数，需要返回参数
		money:function(value){
			return "￥"+value.toFixed(2);
		}
	},
	// 渲染完以后做的事情,mounted 方法取代了原来的ready 但还要加入$nextTick（）来保证文本渲染
	mounted:function(){
		this.$nextTick(function(){
			this.cartView();
		})
	},
	// 事件的绑定在methods 里面
	methods:{
		cartView:function(){
			_this = this;
			this.$http.get("data/cartData.json").then(function(res){
				_this.productList = res.body.result.list;
			})
		},
		changeMoney:function(item,way){
			if(way>0){
				item.productQuantity++;
			}
			else{
				item.productQuantity--;
				if(item.productQuantity<1){
					item.productQuantity=1;
				}
			}
			this.calcTotalMoney();	
		},
		// 单选
		selectedProduct:function(item){
			// 如果item.checked不存在
			if(typeof item.checked == "undefined"){
				// 全局注册
				// Vue.set(item,'checked',true);
				// 局部注册
				this.$set(item,'checked',true);
			}
			else{
				item.checked = !item.checked;
			}
			this.calcTotalMoney();
		},
		// 全选/取消全选
		checkAll:function(flag){
			this.checkAllFlag = flag;
			var _this = this;
			this.productList.forEach( function(item, index) {
				if(typeof item.checked == "undefined"){
					_this.$set(item,'checked',_this.checkAllFlag);
				}
				else{
					item.checked = _this.checkAllFlag;
				}
			});
			this.calcTotalMoney();		
		},
		// 计算总金额
		calcTotalMoney:function(){
			var _this = this;
			_this.totalMoney=0;
			// 遍历商品表格，对选中的做累计
			this.productList.forEach( function(item, index) {
				if(item.checked){
					_this.totalMoney += item.productPrice*item.productQuantity;
				}
			});
		},
		// 获取当前删除的对象，点击删除的是哪个的信息
		delConfirm:function(item){
			// this指向当前的vm实例
			this.active = true;
			this.curProduct1 = item;
		},
		// 删除产品的函数使用了js 的 splice 函数
		delProduct:function(){
			var index = this.productList.indexOf(this.curProduct1);
			this.productList.splice(index,1);
			this.active = false;
		}
	}
})