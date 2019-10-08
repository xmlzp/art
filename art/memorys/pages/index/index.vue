<template>
	<view class="content">
		<view class="swipers">
			 <view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" style="width: 100%;"  :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-color="cos">
							<swiper-item>
								<view class="swiper-item uni-bg-red">
									<image src="../../static/banner/bannerone.jpg" mode=""></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">
									<image src="../../static/banner/bannerthree.jpg" mode=""></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">
									<image src="../../static/banner/bannertow.jpeg" mode=""></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		<view style="background: #ffffff; height: 6vh; line-height: 6vh;">
			<view style="display: flex; width: 96%; margin: 0 auto;">
				<view class="floor_one">
					<image class="floor_one_image" src="../../static/images/icon1.png"></image>
					<view class="text_one">全店包邮</view>
				</view>
				<view class="floor_ones">
					<image class="floor_one_image" src="../../static/images/mincancel.png"></image>
					<view class="text_one">先行赔付</view>
				</view>
				<view class="floor_onees">
					<image class="floor_one_image" src="../../static/images/icon3.png"></image>
					<view class="text_one">七天无理由退货</view>
				</view>
			</view>
		</view>
		<view style="background: #ffffff; height: 6vh; line-height: 6vh; margin-top: 1.5vh;">
			<view style="display: flex; width: 96%; margin: 0 auto;">
				<view class="floor_oness">
					<view class="text_one">全部</view>
				</view>
				<view class="floor_oness">
					<view class="text_one">玫瑰花</view>
				</view>
				<view class="floor_oness">
					<view class="text_one">康乃系</view>
				</view>
				<view class="floor_oness">
					<view class="text_one">郁金香</view>
				</view>
				<view class="floor_oness">
					<view class="text_one">多肉</view>
				</view>
			</view>
		</view>
		<view>
				<view style="margin-left: 2%;">
					<view class="viode">
						<view class="viode_flexs viode_flexes" v-for="(item, index) in courser" @click="floor(item,index)">
							<image class="yuejitu" :src="item.img"></image>
							<view class="viode_text">{{item.name}}</view>
							<view class="viode_texts">¥{{item.price}}</view>
						</view>
					</view>
				</view>
		</view>
	<!-- 	<view style="height:10vh;">已经到底了</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cos:'#fc904a',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				heigth:'',
				courser:[] ,//首页循环的
				Id:''
			}
		},
		onLoad() {
		},
		methods: {
			floor:function(item){
				let Id = item.id;
				this.Id = Id;
				uni.navigateTo({
						url: `../detailes/detailes?Id=${this.Id}`
					}); 
			},
			histor:function(){
				uni.request({
					method: 'GET',
					dataType: 'json',
					url:'http://localhost:3000/index/historyList', 
					header:{
						"Content-Type":"application/x-www-form-urlencoded"  //自定义点击事件
					}, 
					success: (res)=>{
						console.log(res.data)
						this.courser = res.data
					},
					fail:(error)=>{
						console.log(error)
					}
				})
			},
			hegeht:function(){
					let _that = this
					uni.getSystemInfo({
						success: function (res) {
							console.log(res.windowWidth);
							console.log(res.windowHeight);
							_that.heigth = res.windowHeight
						}
					});
					// const query = uni.createSelectorQuery().in(this);
					// 	query.select('#content').boundingClientRect(data => {
					// 	  console.log("得到布局位置信息" + JSON.stringify(data));
					// 	  console.log("节点离页面顶部的距离为" + data.top);
					// 	}).exec();
				}
			},
			created() {
				this.hegeht()
				this.histor()
		}
	}
</script>

<style lang="scss">
	.content{background: #f5f4f4;}
	.swipers{ height: 28vh;	margin: 8rpx 0rpx 16rpx 0rpx;box-shadow:0px 1px 4px 2px #c7c7c7;
	}
	.swiper{height: 28vh;border-radius:10px;}
	.swiper-item image{	width: 100%	}
	// /楼层one/
	.floor_one{
		display: flex;
		align-items: center
	}
	.floor_one_image{
		width: 30upx;
		height: 30upx
	}
	.text_one{
		font-size:30rpx;
		font-family: Arial, Helvetica, sans-serif 
		}
	.floor_ones{
		display: flex;
		align-items: center;
		margin-left: 15%
	}
	.floor_onees{
		display: flex;
		align-items: center;
		margin-left: 9%
	}
	.floor_oness{ 
		width: 25%;
		text-align: center
	}
	.yuejitu{
		width: 95%;
		height: 400upx
		}
	.viode_text{
		font-size: 25rpx;color: #818182;
	}
	.viode_texts{
		font-size: 30rpx
	}
	.viode_flexes{width: 50%;}
	.viode{display:flex;width:100%; margin: 0 auto; flex-wrap: wrap; margin-bottom: 10rpx; }
</style>
