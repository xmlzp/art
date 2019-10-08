<template>
	<view style="background: #f3f3f3;">
		<view class="tit">
		  <view class="tit-back" catchtap="goBack">返回</view>
		  <text class="tit-text">详情(滑动可移除)</text>
		  <view class="tit-tool" @click="clearCart()">清空</view>
		</view>
		<view class="pro" >
		  <view class="pro-con" v-for="(item, index) in sum">
		    <view class="pimg">
		      <image :src="item.img" mode="aspectFill"></image>
		    </view>
		    <view class="pname">
		      <view class="name">{{item.name}}</view>
		    </view>
		    <view class="ptprice">￥{{item.price*item.cartNum}}</view>
		    <view class="pnum">
		      <view class="num num-a" @click="changeNum(item,index)"><text>-</text></view>
		      <text class="num-text">{{item.cartNum}}</text>
		      <view class="num num-b"  @click="changeAdd(item,index)"><text>+</text></view>
		    </view>
		  </view>
		  <view class="del">
		    <text>删除</text>
		  </view>
		</view>
		<view class="tool">
		  <view class="total">总金额：
		    <text>￥{{total}}</text>
		  </view>
		  <view class="gobuy" @click="goOrder()">确认下单</view>
		</view>
		<view class="tool-layer"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				sum:[],
				total:0 //商品的总金额
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods:{
			//生成订单
			goOrder:function(){
				
			},
			clearCart:function(){
				uni.request({
					method: 'GET',
					dataType: 'json',
					url:'http://localhost:3000/index/delece',
					header:{
						"Content-Type":"application/x-www-form-urlencoded"  //自定义点击事件
					}, 
					success: (res)=>{
							console.log(res.data)
						},
				})
			},
			changeNum:function(item){
				console.log(item.id)
				console.log(item.cartNum)
				let cartNum = item.cartNum;
				if(cartNum >1){
					 item.cartNum --
				}else{
					 return
				}
				let sumid = item.id
				let _that = this;
				let l = _that.sum;
				console.log(_that.sum)
				let t = 0;
				for(let i = 0; i < l.length; i++){
					 t += l[i].price * l[i].cartNum;
				}
				_that.total = t
			},
			changeAdd:function(item){
				item.cartNum ++
				let _that = this;
				let l = _that.sum;
				console.log(_that.sum)
				let t = 0;
				for(let i = 0; i < l.length; i++){
					 t += l[i].price * l[i].cartNum;
				}
				_that.total = t
			}
		},
		mounted() {
			//this.changeTotal()
		},
		onTabItemTap:function(){
			let _that = this;
			console.log("onTabItemTap")
			uni.request({
				method: 'GET',
				dataType: 'json',
				url:'http://localhost:3000/index/sum',
				header:{
					"Content-Type":"application/x-www-form-urlencoded"  //自定义点击事件
				}, 
				success: (res)=>{
						_that.sum = res.data
						let l = _that.sum;
						console.log(_that.sum)
						let t = 0;
						for(let i = 0; i < l.length; i++){
							 t += l[i].price * l[i].cartNum;
						}
						_that.total = t
						console.log(_that.total +'文字')
					},
			})
		}
	}
</script>

<style>
	
	.tit {
	  border-bottom: 1rpx solid #ddd;
	  padding: 20rpx 25rpx;
	  display: flex;
	  align-items: center;
	  background-color: #f0f0f0;
	}
	
	.tit-back {
	  flex: 1;
	  text-align: left;
	  color: #576b95;
	}
	
	.tit-text {
	  font-size: 11pt;
	  color: #999;
	  flex: 2;
	}
	
	.tit-tool {
	  flex: 1;
	  text-align: right;
	  color: #576b95;
	}
	
	.pro {
	  border-bottom: 1rpx solid #eee;
	  position: relative;
	  overflow-x: hidden;
	}
	
	.del {
	  position: absolute;
	  right: 0;
	  top: 0;
	  width: 80px;
	  height:99.5%;
	  text-align: center;
	  background-color: #f00;
	  color: #fff;
	  z-index: 1;
	  font-size: 15pt;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.del text {
	  flex: 1;
	}
	
	.pro-con {
	  height: 140rpx;
	  position: relative;
	  z-index: 2;
	  background-color: #fff;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.pro-con .pimg {
	  width: 150rpx;
	  text-align: center;
	}
	
	.pro-con .pimg image {
	  width: 110rpx;
	  height: 100rpx;
	  border-radius: 5px;
	}
	
	.pro-con .pname {
	  flex: 1;
	}
	
	.pname .name {
	  font-size: 11pt;
	}
	
	.pname .des {
	  font-size: 11pt;
	  color: #999;
	}
	
	.pro-con .ptprice {
	  width: 150rpx;
	  text-align: right;
	  padding: 0 30rpx 0 0;
	  color: #ff6a00;
	  font-size: 13pt;
	}
	
	.pro-con .pnum {
	  width: 110px;
	  display: flex;
	  align-items: center;
	}
	
	.num {
	  width: 30px;
	  height: 30px;
	  border-radius: 50%;
	  text-align: center;
	  font-size: 20px;
	  font-weight: bold;
	  display: flex;
	  align-items: center;
	  align-content: center;
	}
	.num text{flex: 1;}
	.num-a {
	  border: 1rpx solid #999;
	  color: #ff6a00;
	  background-color: #f6f6f6;
	}
	
	.num-b {
	  border: 1rpx solid #ff6a00;
	  background-color: #ff6a00;
	  color: #fff;
	}
	
	.num-text {
	  width: 30px;
	  line-height: 30px;
	  text-align: center;
	}
	
	.null {
	  text-align: center;
	  padding: 20px 0;
	  color: #ccc;
	  background-color: #fff;
	}
	
	.tool {
	  position: fixed;
	  left: 0;
	  bottom: 54px;
	  z-index: 3;
	  display: flex;
	  width: 750rpx;
	  height: 7vh;
	  align-items: center;
	  background: #f3f3f3;
	}
	
	 .total {
	  flex: 2;
	  text-align: left;
	  padding: 0 20rpx;
	  font-size: 11pt;
	  color: #999;
	}
	
	 .total text {
	  color: #ff6a00;
	  font-size: 15pt;
	}
	
	.gobuy {
	  flex: 1;
	  height: 40px;
	  line-height: 40px;
	  text-align: center;
	  border-radius: 3px;
	  background-color: #576b95;
	  border: 1rpx solid #576b95;
	  color: #fff;
	  margin: 0 20rpx 0 10rpx;
	}
	
	.tool-layer {
	  position: fixed;
	  left: 0;
	  bottom: 0;
	  z-index: 2;
	  width: 100%;
	  height: 53px;
	  background-color: #fff;
	  opacity: 0.9;
	  box-shadow: 0 -1px 5px 0 #eee;
	}

</style>
