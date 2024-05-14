<template>
	<view class="recipe-detail">
		<image class="cover-image" :src="recipe.coverImage"></image>
		<view class="recipe-name">{{ recipe.name }}</view>
		<view class="recipe-ingredients">
			<view class="ingredient" v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}
			</view>
		</view>
		<view class="favorite-icon">
			<image :src="recipe.isFavorite ? '/static/stored.png' : '/static/store.png'" @click="toggleFavorite"></image>
		</view>
		<view class="recipe-steps">
			<view class="step" v-for="(step, index) in recipe.steps" :key="index">{{ step }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option){
			this.id = option.id
		},
		data() {
			return {
				recipe: {
					coverImage: 'http://127.0.0.1:8080/static/goose-8740266_640.jpg',
					name: '菜谱名称',
					ingredients: ['原料1', '原料2', '原料3'],
					isFavorite: false,
					steps: ['制作步骤1', '制作步骤2', '制作步骤3']
				},
				id: 0
			};
		},
		methods: {
			toggleFavorite() {
				this.recipe.isFavorite = !this.recipe.isFavorite;
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
</style>