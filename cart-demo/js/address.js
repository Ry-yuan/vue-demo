var vm = new Vue({
	el:".container",
	data:{
		addressList:[],
		limitNum:3,
		currentIndex:0,
		shippingMethod:1
	},
	// 渲染数据前做的函数mounted
	mounted:function(){
		this.$nextTick(function(){
			this.getAddress();
		});
	},
	computed:{
		fliterAddress:function(){
			return this.addressList.slice(0,this.limitNum);
		}
	},
	// 函数存放的地方
	methods:{
		getAddress:function(){
			_this = this;
			this.$http.get('../data/address.json').then(function(res){
				_this.addressList = res.data.result;
			});
		},
		loadMore:function(){
			this.limitNum = this.addressList.length;
		},
		setDefaultAddress:function(address){
			this.addressList.forEach(function(item,index){
				if(item.addressId == address.addressId){
					item.isDefault = true;
				}
				else{
					item.isDefault = false;
				}
			})
		}
	}
})