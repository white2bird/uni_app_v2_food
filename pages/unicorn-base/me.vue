<template>
	<view>
		<view class='margin-xl bg-white padding-xl radius shadow-lg'>
		  <view class='text-center margin-bottom text-lg  text-grey'>关于元咏插件库</view>
		  <view class='text-content'>
		    <view>Hi！开发者~欢迎使用元咏插件库！</view>
		    <view class='margin-top-sm'>该项目是由<span style="font-weight: 900;">元咏科技</span>打造的一款高颜值产品插件库，回归到开发当中，让开发更简单。</view>
		    <view class='margin-top-sm'>更多功能敬请期待！</view>
			<view class='margin-top-sm'>特别感谢ColorUI提供的基础元素！！！</view>
			<view class="cu-list grid col-2 no-border margin-top">
				<view class="cu-item" v-for="(item,index) in logoList" :key="index"
				style="display: flex;align-items: center;justify-content: center;">
					<image class="ibanimg" mode="aspectFill" :src="item.logoUrl"></image>
					<text>{{item.name}}</text>
				</view>
			</view>
			
			<view class='margin-top-sm' style="text-align: center;font-size: 16px;">因为信任  所以简单</view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logoList:[
					{
						logoUrl: "/static/unicorn-ext/logo.png",
						name:"元咏科技"
					},{
						logoUrl: "../../static/unicorn-base/about/logo-colorUI.png",
						name:"ColorUI"
					}
				]
			}
		}
	}
</script>

<style>
	.ibanimg {
	    width: 120rpx;
	    height: 120rpx;
	    margin-bottom: 10rpx;
	}
</style>
