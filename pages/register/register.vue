<template>
	<view>
		<view style="width: 90%; margin: 200rpx auto;">
			
		<view style="margin-bottom: 70rpx; font-size: 60rpx; color: royalblue; text-align: center;">
			注册
		</view>
		
		<view style="margin: 40rpx 0;">
			<uni-easyinput v-model="form.username" prefix-icon="person" placeholder="请输入用户名"></uni-easyinput>
		</view>
		
		<view style="margin: 40rpx 0;">
			<uni-easyinput type="password" v-model="form.password" prefix-icon="locked" placeholder="请输入密码"></uni-easyinput>
		</view>
		

		<button type="primary" @click="register">注册</button>
		
			
			
			
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					username:'',
					password:''
				}
			}
		},
		methods: {
			register(){
				const baseUrl = "http://localhost:8080"
				uni.request({
					url: baseUrl + '/user/createUser',
					method: "POST",
					data: this.form
				}).then(res=>{
					return res.data
				}).then(res=>{
					if(res.code==200){
						uni.navigateTo({
							url:"/pages/login/login"
						})
					}else{
						uni.showToast({
							icon: "error",
							title: "创建失败"
						})
					}
				}).catch(res=>{
					
				})
			}
		}
	}
</script>

<style>

</style>
