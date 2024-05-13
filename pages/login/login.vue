<template>
	<view>
		<view style="width: 90%; margin: 200rpx auto;">
			
		<view style="margin-bottom: 70rpx; font-size: 60rpx; color: royalblue; text-align: center;">
			登录
		</view>
		
		<view style="margin: 40rpx 0;">
			<uni-easyinput v-model="form.username" prefix-icon="person" placeholder="请输入用户名"></uni-easyinput>
		</view>
		
		<view style="margin: 40rpx 0;">
			<uni-easyinput type="password" v-model="form.password" prefix-icon="locked" placeholder="请输入密码"></uni-easyinput>
		</view>
		
		
		<button type="primary" @click="login">登录</button>
		<navigator url="/pages/register/register" style="margin: 40rpx 0; color: deepskyblue;">前往注册</navigator>
			
			
			
			
			
		</view>
	</view>
</template>

<script lang="ts" setup>

	import { getCurrentInstance,ref, reactive } from 'vue';
	 
	const instance = getCurrentInstance();
	const { $request } = instance.appContext.config.globalProperties;
	
	
	const login = ()=>{
		$request({
			url:'/user/login',
			method: 'POST',
			data:form
		}).then(res=>{
			if(res.code==200){
				uni.setStorageSync("token", res.data.token)
				uni.setStorageSync("username", form.username)
				uni.switchTab({
					url:"/pages/My/My"
				})
			}
		})
	}
	const form = reactive({
		username: '',
		password: ''
	})

	
	// export default {
	// 	data() {
	// 		return {
	// 			form:{
	// 				username:'',
	// 				password:''
	// 			}
	// 		}
	// 	},
	// 	methods: {
	// 		login(){
	// 			const baseUrl = "http://localhost:8080"
	// 			$request({
	// 				url: '/user/login',
	// 				method: "POST",
	// 				data: this.form
	// 			}).then(res=>{
	// 				console.log(res)
	// 				return res.data
	// 			}).then(res=>{
	// 				if(res.code==200){
	// 					uni.setStorageSync("token", res.data.token)
	// 					uni.navigateTo({
	// 						url:"/pages/index/index"
	// 					})
	// 				}
	// 			})
	// 		}
	// 	}
	// }
</script>

<style>

</style>
