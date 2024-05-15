<template>
	<view class="page">
		<view class="header">
			<view class="user">
				<image src="/static/avatar.png"></image>
				<text>{{name.name}}</text>
			</view>
			<view class="info" style="margin-top: 20rpx;">
				<view class="item" @click="login">
					<!-- <text>12</text> -->
					<text>{{denglu}}</text>
				</view>
				<view class="item" @click="register">
					<!-- <text>43</text> -->
					<text>注册</text>
				</view>
			</view>
		</view>

		<view class="menu">
			<view class="item" v-for="v in menus" :key="v.id" @click="ck(v.id)">
				<image :src="v.icon"></image>
				<view>{{v.name}}</view>
				<image class="arrow" v-if="v.arrow" src="/static/right.png"></image>
			</view>
		</view>
	</view>
</template>


<script lang="ts" setup>
	import { getCurrentInstance,ref, reactive,onMounted } from 'vue';
	 import {
	 		onLoad,
	 		onShow
	 	} from "@dcloudio/uni-app";
	const denglu = ref('登录')
	const instance = getCurrentInstance();
	const { $request } = instance.appContext.config.globalProperties;
	const menus = ref([
					{id: 1, name: '联系客服', icon: '/static/comment.png', arrow: true},
					{id: 2, name: '我的收藏', icon: '/static/share.png', arrow: true},
					// {id: 3, name: '购物车', icon: '/static/book.png', arrow: false},
					{id: 4, name: '退出登录', icon: '/static/poweroff.png', arrow: false},
				]);
				
	const name = reactive({
		name:uni.getStorageSync('username')
	});
	const register = ()=>{
		uni.navigateTo({
			url:'/pages/register/register'
		})
	}
	const login = ()=>{
		uni.navigateTo({
			url:'/pages/login/login'
		})
	}

	const ck = (id)=>{
		if(id===4){
			$request({
				url:'/user/logout',
				method: 'GET'
			}).then(res=>{
				if(res.code === 200){
					uni.setStorageSync("token", "")
					uni.setStorageSync("username", "")
					name.name = ''
					denglu.value = '登录'
				}
			})
		}
		if(id === 2){
			uni.navigateTo({
				url: '/pages/UserStore/UserStore'
			})
		}
		if(id === 3){
			uni.navigateTo({
				url: '/pages/Cart/Cart'
			})
		}
	}
	
	onShow(() => {
	   name.name = uni.getStorageSync('username');
	})

</script>

<style lang="scss">
	.page {
		background: #f5f5f5;
		min-height: 100vh;

		.header {
			background: #3C9BFD;
			height: 300rpx;

			.user {
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					margin: 10rpx;
					background: #ccc;
				}

				text {
					color: #fff;
					font-size: 12px;
				}
			}
		}

		.info {
			display: flex;
			width: 750rpx;
			margin-top: 30rpx;

			.item {
				display: flex;
				flex-direction: column;
				width: 375rpx;
				text-align: center;
						
				text {
					color: #fff;

					&:nth-child(1) {
						font-size: 20px;
						margin-bottom: 10rpx;
					}

					&:nth-child(2) {
						font-size: 12px;
					}
				}
			}
		}
		
		.menu{
			background: #fff;
			margin-top: 20rpx;
			
			.item{
				border-bottom: 1px solid #f0f0f0;
				display: flex;
				height: 80rpx;
				align-items: center;
				padding: 0 20rpx;
				box-sizing: border-box;
				width: 750rpx;
				
				&:active{
					background: #f0f0f0;
				}
				
				image{
					height: 40rpx;
					width: 40rpx;
				}
				
				view{
					font-size: 14px;
					color: #444;
					padding-left: 10rpx;
					box-sizing: border-box;
					width: calc(100% - 70rpx);
				}
				
				.arrow{
					width: 30rpx;
					height: 36rpx;
				}
			}
		}
		
		
	}
</style>