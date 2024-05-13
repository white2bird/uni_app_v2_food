<template>

	<view>

	<!-- 此组件因为版权问题，请关注"前端组件开发"公众号，私信后获得授权 -->
	</view>

</template>

<script>
	export default {
		props: {

			data: {
				type: Array,
				default () {
					return []
				}
			}


		},
		data() {
			return {
				currentTab: 0,
				mainCur: 0,
				verticalNavTop: 0,
				list: [{}],

			}
		},
		mounted() {
			this.getHeight();
		},
		methods: {
			itemClick(item) {

				this.$emit('itemClick', item)

			},
			//点击左侧按钮
			tapselect(index) {
				this.currentTab = index;
				this.mainCur = index;
				this.verticalNavTop = (index - 1) * 50;
			},
			//右侧滚动
			mainScroll(e) {
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						// 此处屏蔽，避免点击最后一个回退， 但是没有右边滚动指示
						if(this.currentTab != this.list.length - 1){
							this.currentTab = i;
							this.verticalNavTop = (i - 1) * 50
							return false
						}
						
					}
				}
			},
			//获取右侧每项的top和bottom,里面需获取对应dom元素的高度，所以只能在mounted生命周期里调用
			getHeight() {
				var top = 0;
				var bottom = 0;
				var temp = 0;
				for (let i = 0; i < this.data.length; i++) {
					let view = uni.createSelectorQuery().select("#cate-" + i)

					// #ifdef  MP-WEIXIN
					view = uni.createSelectorQuery().in(this).select("#cate-" + i);
					//	#endif


					view.fields({
						size: true
					}, data => {
						top = temp;
						bottom = temp + data.height;
						this.list[i] = {
							top: top,
							bottom: bottom
						};
						temp = bottom;
					}).exec();
				}

			}
		}


	}
</script>

<style>
	.cateBox {
		position: absolute;
		top: 120rpx;
		bottom: 0;
		background: #fff;
		width: 100%;
		display: flex;
	}

	.cate-left {
		width: 200rpx;
		background: #f4f4f4;
		height: 100%;
	}

	.cate-left-item {
		background: #f4f4f4;
		height: 50px;
		display: flex;
		align-items: center;
	}

	.cate-left-item.activeItem {
		background: #fff;
	}
	/* 	<view class="cateBox">
			<!-- 左侧列表 -->
			<scroll-view class="cate-left" scroll-y="true" :scroll-top="verticalNavTop" scroll-with-animation>
				<view class="cate-left-list" v-for="(item,index) in data" :key="index" @click="tapselect(index)">
					<!-- activeItem为选中状态 -->
					<view class="cate-left-item " :class="{activeItem:currentTab==index}">
						<label></label><text>{{item.navtitle}}</text>
					</view>
				</view>
				
				<!-- 右侧列表 -->
				<scroll-view class="cate-right" scroll-y="true" @scroll="mainScroll" :scroll-into-view="'cate-'+mainCur"
					scroll-with-animation>
					<view v-for="(item,index) in data" :key="index" :id="'cate-'+index">
						<view class="cate-right-title">
							<view class="line"></view>
							<text>{{item.navtitle}}</text>
						</view>
						<view class="cate-right-list">
							<view class="cate-right-item" v-for="(child,childindex) in item.shop" :key="childindex"
								@click="itemClick(child)">
								<image :src="child.shopimage" mode=""></image>
								<text>{{child.shoptitle}}</text>
							</view>
						</view>
					</view>
					
					<view style="height: 100px;"></view>
				</scroll-view>
			</scroll-view>

			
		</view>
 */

	.cate-left-item label {
		width: 4rpx;
		height: 15px;
		float: left;
		background: #f4f4f4;
	}

	.cate-left-item.activeItem label {
		background: #0bbbef;
	}

	.cate-left-item text {
		width: 196rpx;
		font-size: 28rpx;
		display: block;
		text-align: center;
	}

	/* 右侧*/
	.cate-right {
		flex: 1;
	}

	.cate-right-title {
		text-align: center;
		font-size: 28rpx;
		margin-top: 20rpx;
		line-height: 80rpx;
		position: relative;
	}

	.cate-right-title .line {
		position: absolute;
		height: 2rpx;
		width: 300rpx;
		background: orange;
		top: 39rpx;
		left: 50%;
		margin-left: -150rpx;
	}

	.cate-right-title text {
		background: #fff;
		padding: 0 10px;
		position: relative;
		color: #999;
	}

	.cate-right-list {
		height: auto;
		overflow: hidden;
	}

	.cate-right-item {
		width: 33.33%;
		float: left;
		margin-top: 20rpx;
	}

	.cate-right-item image {
		width: 160rpx;
		height: 160rpx;
		display: block;
		margin: 0 auto;
	}

	.cate-right-item text {
		display: block;
		text-align: center;
		font-size: 24rpx;
	}
</style>