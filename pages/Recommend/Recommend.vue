<template>
	<view class="recipe-detail">
		<image class="cover-image" :src="recipe.pic"></image>
		<view class="recipe-name">{{ recipe.name }}</view>
		<view class="recipe-ingredients">
			<view class="recipe-name" style="font-size: 40rpx;"><text style="color: red;">原料: </text>{{ recipe.menuDesc }}</view>
			<!-- <view class="ingredient" v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}
			</view> -->
		</view>
		<view class="favorite-icon">
			<image :src="recipe.like===1 ? '/static/stored.png' : '/static/store.png'" @click="toggleFavorite"></image>
		</view>
		<text style="color: red; font-size: 40rpx;">制作步骤: </text>
		<view class="recipe-steps">
			<view class="step" v-for="(step, index) in recipe.stepList" :key="index">{{index+1}}: {{ step }}</view>
		</view>
	</view>
</template>

<script>
	import { getCurrentInstance,ref, reactive,onMounted } from 'vue';
	export default {
		setup(){
			const current = getCurrentInstance();
			const { $request } = current.appContext.config.globalProperties;
			return {
				$request
			}
		},
		onLoad(option){
			this.id = option.id
			
		},
		mounted(){
			this.$request({
				url:'/foodMenu/recommend/'+this.id,
				method: 'GET'
			}).then(res=>{
				if(res.data != null){
					this.recipe = res.data
					this.foodId = res.data.id;
				}
			})
		},
		
		data() {
			return {
				recipe: {
					pic: '',
					name: '',
					menuDesc: '',
					like: 0,
					stepList: []
				},
				id: 0,
				foodId: 0
			};
		},
		methods: {
			toggleFavorite() {
				if(this.recipe.like==1){
					this.recipe.like = 0;
				}else{
					this.recipe.like = 1;
				}
				this.$request({
					url:'/foodMenu/relationChange',
					method: 'POST',
					data:{
						like: this.recipe.like,
						foodMenuId: this.foodId
					}
				}).then(res=>{
					
				})
			}
		}
	};
</script>

<style>
	.recipe-detail {
		padding: 20px;
	}

	.cover-image {
		width: 100%;
		height: 300px;
	}

	.recipe-name {
		font-size: 24px;
		margin-top: 20px;
	}

	.recipe-ingredients {
		margin-top: 10px;
	}

	.ingredient {
		font-size: 16px;
		margin-bottom: 5px;
	}

	.favorite-icon {
		margin-top: 20px;
	}

	.favorite-icon image {
		width: 30px;
		height: 30px;
	}

	.recipe-steps {
		margin-top: 20px;
	}

	.step {
		font-size: 16px;
		margin-bottom: 10px;
	}
	image {
		image-rendering:-moz-crisp-edges;
	        image-rendering:-o-crisp-edges;
	        image-rendering:-webkit-optimize-contrast;
	        image-rendering: crisp-edges;
	        -ms-interpolation-mode:nearest-neighbor;
	}
</style>