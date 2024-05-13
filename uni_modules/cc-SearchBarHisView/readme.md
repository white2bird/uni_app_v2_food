# cc-SearchBarHisView


#### 使用方法 
```使用方法
	

<view style="margin-top: 16px;">
	
<!-- keyStr: 设置storage存储key  hisClick: 设置历史事件 searchClick:设置搜索事件 -->
<cc-SearchBarHisView keyStr="productHisArr" searchPlaceHolder="请输入产品名称、关键字" @hisClick="selHisClick"
			@searchClick="goSearchClick"></cc-SearchBarHisView>
	
	
</view>	

			
					


```

#### HTML代码实现部分
```html

<template>
	<view class="content">
		<view style="margin-top: 16px;">

			<!-- keyStr: 设置storage存储key  hisClick: 设置历史事件 searchClick:设置搜索事件 -->
			<cc-SearchBarHisView keyStr="productHisArr" searchPlaceHolder="请输入产品名称、关键字" @hisClick="selHisClick"
				@searchClick="goSearchClick"></cc-SearchBarHisView>


		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {


			selHisClick(item) {

				console.log('选择的值 = ' + item);
				uni.navigateTo({
					url: '/pages/index/search?name=' + item
				})
			},
			goSearchClick(item) {



				uni.navigateTo({
					url: '/pages/index/search?name=' + item
				})



			},
		}
	}
</script>

<style scoped>
	page {
	
		background-color: '#F6F7FA' !important;
	}
	

	
	.content {
		display: flex;
		flex-direction: column;
		background-color: #F6F7FA;
		height: 100vh;
	
	
	}

</style>


```
