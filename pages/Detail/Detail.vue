<template>
	<view class="xingsheng" v-if="mpGoodsShow=='xingsheng'">
		<view class="XS_items" v-for="(res,index) in goodsList" @click="toGoodsDetail()">
			<image :src="res.goodPic" mode="widthFix" style="width: 100%;border-radius: 10rpx 10rpx 0 0;"></image>
			<view class="XS_items_name">{{res.goodName}}</view>
			<view class="XS_items_predate">
				<view class="XS_items_predate1">预售时间:2022-03-01
				</view>
				<view class="XS_items_predate2">
					<!-- <view>已售<text style="color: #f74145;">99</text>份 -->
					<!-- </view> -->
				</view>
			</view>
			<view class="XS_items_pickdate">
				<view>提货时间:2022-03-02</view>
				<view>仅剩{{res.goodCount}}份
				</view>
			</view>
			<view class="XS_items_price">
				<view class="XS_items_price1">￥{{res.price}}</view>
				<view class="XS_items_price2">￥298</view>
			</view>
			<view class="XS_items_btn">
				<view class="XS_items_btn1"></view>
				<view class="XS_items_btn2" @click.stop="addShopCart()">
					加入购物车
				</view>
			</view>
			<!-- <view class="XS_items_buyer" v-if="res.buyerList.length!=0">
				<image v-for="(item,index1) in res.buyerList.slice(0,6)" src="item.mbImg" mode="aspectFill"
					style="width: 50rpx;height: 50rpx;border-radius: 50%;"></image>
				<view style="padding-left: 60rpx;">...{{i18n.index.Product_list.BoughtGoods || '等购买了此商品'}}</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import { getCurrentInstance,ref, reactive,onMounted } from 'vue';
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		    this.detail_good_id = option.id; //打印出上个页面传递的参数。
		},
		setup(){
			const current = getCurrentInstance();
			const { $request } = current.appContext.config.globalProperties;
			return {
				$request
			}
		},
		
		mounted(){
			this.$request({
				url:'/good/getDetailById?id='+this.detail_good_id,
				method: 'GET'
			}).then(res=>{
				console.log(res)
				this.goodsList.push(res.data)
			})
		},
		

		props: {
			
		},
		data() {
			return {
				mpGoodsShow: 'xingsheng',
				goodsList: [],
				detail_good_id : 0
			}
		},
		methods: {
			// 跳转商品详情
			toGoodsDetail(e) {
				let seqId = e
				this.$emit('toGoodsDetail', )
			},
			//弹出购物车
			addShopCart(e) {
				this.$request({
					url:'/cart/addCart',
					method: 'POST',
					data:{
						goodId: this.detail_good_id
					},
					Headers:{
						
					}
				}).then(res=>{
					console.log(res)
					// this.goodsList.push(res.data)
					if(res.code == 200){
						uni.navigateTo({
							url: '/pages/Cart/Cart',
						});
					}
				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	/* 商品列表 */
	.allGoods {
		background-color: #FFFFFF;
		padding-bottom: 200rpx;

		.title {
			width: 100%;
			line-height: 100rpx;
			// background-color: #FEFEFE;
			text-align: center;
			margin-top: 20rpx;

			.title_text {
				display: inline-flex;
				align-items: center;
				font-size: 32rpx;
				color: #333333;
			}
		}
	}

	// 瀑布流
	.pubuBox {
		padding: 20rpx;

		.pubuItem {
			column-count: 2;
			column-gap: 20rpx;
		}

		.item-masonry {
			box-sizing: border-box;
			// border-radius: 15rpx;
			overflow: hidden;
			// background-color: #fff;
			break-inside: avoid;
			/*避免在元素内部插入分页符*/
			box-sizing: border-box;
			margin-bottom: 30rpx;
			// box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
		}

		.item-masonry image {
			width: 100%;
		}

		.listtitle {
			// padding-left: 22rpx;
			font-size: 24rpx;
			// padding-bottom: 22rpx;
			position: relative;

			.listtitle1 {
				line-height: 28rpx;
				color: #333333;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.listtitle3 {
				font-size: 22rpx;
				color: #666666;
				padding-top: 20rpx;
				padding-bottom: 20rpx;
			}

			.listtitle4 {
				display: flex;
				align-items: baseline;

				.price1 {
					font-size: 32rpx;
					color: #FF7433;
					font-weight: bold;
					margin-right: 15rpx;
				}

				.price2 {
					font-size: 22rpx;
					color: #999999;
					text-decoration: line-through;
				}

			}

			.shop {
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}
	}

	//兴盛
	.xingsheng {
		padding: 20rpx;

		.XS_items {
			box-shadow: 0rpx 0rpx 16rpx #b5b3b4;
			border-radius: 10rpx;
			margin-bottom: 30rpx;
			position: relative;

			.XS_items_name {
				font-size: 30rpx;
				color: #262628;
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				padding-left: 20rpx;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				line-height: 60rpx;
			}

			.XS_items_predate {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-left: 20rpx;
				padding-right: 20rpx;

				.XS_items_predate1 {
					color: #fd7424;
				}

				.XS_items_predate2 {
					color: #3f3f41;
				}
			}

			.XS_items_pickdate {
				padding-left: 20rpx;
				padding-right: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #fd7424;
			}

			.XS_items_price {
				display: flex;
				align-items: baseline;
				padding-left: 20rpx;

				.XS_items_price1 {
					font-size: 48rpx;
					color: #f74145;
				}

				.XS_items_price2 {
					font-size: 24rpx;
					color: #818181;
					text-decoration: line-through;
				}
			}

			.XS_items_btn {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-top: 10rpx;
				padding-bottom: 20rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;

				.XS_items_btn1 {
					width: 300rpx;
					line-height: 74rpx;
					background: #FF6429;
					border-radius: 50rpx;
					color: #fff;
					font-size: 30rpx;
					text-align: center;
				}

				.XS_items_btn2 {
					width: 300rpx;
					line-height: 74rpx;
					text-align: center;
					border-radius: 50rpx;
					color: #fff;
					font-size: 30rpx;
					background-color: #f74145;
				}
			}

			.XS_items_buyer {
				display: flex;
				align-items: center;
				padding-left: 20rpx;
				padding-bottom: 20rpx;
			}
		}
	}

	// 大图模式
	.bigImg {
		.big_item {
			padding-bottom: 30rpx;

			.big_item_name {
				width: 100%;
				line-height: 60rpx;
				font-size: 28rpx;
				color: #000;
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}

			.big_item_sale {
				font-size: 26rpx;
				color: #878787;
				display: flex;
				align-items: center;
				width: 250rpx;
				justify-content: space-between;
				padding-bottom: 20rpx;
			}

			.big_item_price {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.big_item_price1 {
					font-size: 34rpx;
					color: #f74145;
				}

				.big_item_price2 {
					font-size: 29rpx;
					color: #878787;
					padding-left: 10rpx;
					text-decoration: line-through;
				}
			}

		}
	}


	// 嘀嗒
	.dida {

		.dida_item {
			margin-bottom: 20rpx;
			padding: 20rpx;

			.dida_item_name {
				line-height: 70rpx;
				font-size: 28rpx;
				color: #000;
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}

		.dida_item_price {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.dida_item_price1 {
				font-size: 45rpx;
				color: #ff2772;
			}

			.dida_item_price2 {
				font-size: 24rpx;
				padding-left: 10rpx;
				text-decoration: line-through;
				color: #c6c6c6;
			}

			.dida_item_cart {
				width: 160rpx;
				line-height: 64rpx;
				text-align: center;
				border-radius: 10rpx;
				color: #ff2772;
				border: 1rpx solid #ff2772;
				font-size: 24rpx;
			}
		}

		.dida_item_sale {
			font-size: 24rpx;
			color: #c6c6c6;
		}

		.dida_item_date {
			font-size: 24rpx;
			color: #c6c6c6;
			padding-top: 10rpx;
			padding-bottom: 20rpx;
		}

		.dida_item_buyer {
			display: flex;
			align-items: center;
			padding-left: 20rpx;
			padding-bottom: 20rpx;
		}
	}


	// 小图
	.small {
		.small_item {
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;

			.small_item_left {
				padding-left: 20rpx;
			}

			.small_item_right {
				height: 250rpx;
				width: 435rpx;
				margin-left: 20rpx;
				position: relative;

				.small_item_name {
					font-size: 28rpx;
					color: #000;
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}

				.small_item_sale {
					font-size: 24rpx;
					color: #a3a3a3;
					padding-top: 10rpx;
				}

				.small_item_stock {
					font-size: 24rpx;
					color: #a3a3a3;
					padding-top: 10rpx;
				}

				.small_item_price {
					position: absolute;
					bottom: 0;
					left: 0;
					display: flex;
					align-items: baseline;

					.small_item_price1 {
						font-size: 34rpx;
						color: #ff5b22;
					}

					.small_item_price2 {
						padding-left: 10rpx;
						font-size: 25rpx;
						color: #818181;
						text-decoration: line-through;
					}
				}

				.small_item_cart {
					position: absolute;
					right: 0;
					bottom: 0;
				}


			}
		}
	}

	// 左图右文
	.ImgLeftTextRight {
		padding: 20rpx;

		.ImgLeftTextRight_item {
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;

			.ImgLeftTextRight_left {
				width: 350rpx;
				height: 350rpx;
				margin-right: 20rpx;
			}

			.ImgLeftTextRight_right {
				width: 400rpx;
				height: 350rpx;
				position: relative;

				.ImgLeftTextRight_name {
					font-size: 28rpx;
					color: #000;
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.ImgLeftTextRight_sale {
					font-size: 24rpx;
					color: #a3a3a3;
					display: flex;
					align-items: center;
					padding-top: 15rpx;
				}

				.ImgLeftTextRight_price {
					display: flex;
					align-items: baseline;
					position: absolute;
					bottom: 0;
					left: 0;

					.ImgLeftTextRight_price1 {
						color: #ff5b22;
						font-size: 34rpx;
						font-weight: bold;
					}

					.ImgLeftTextRight_price2 {
						margin-left: 10rpx;
						font-size: 25rpx;
						color: #818181;
						text-decoration: line-through;
					}
				}

				.ImgLeftTextRight_cart {
					position: absolute;
					right: 0;
					bottom: 0;
				}
			}
		}
	}

	// 图上文下
	.imgUpTxtDown {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;

		.imgUpTxtDown_item {
			width: 45%;
			position: relative;
			margin-bottom: 20rpx;

			.imgUpTxtDown_name {
				font-size: 28rpx;
				color: #000;
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}

			.imgUpTxtDown_sale {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #a3a3a3;
				margin-top: 10rpx;
			}

			.imgUpTxtDown_price {
				display: flex;
				align-items: baseline;
				margin-top: 10rpx;

				.imgUpTxtDown_price1 {
					font-size: 34rpx;
					font-weight: bold;
					color: #ff5b22;
				}

				.imgUpTxtDown_price2 {
					padding-left: 10rpx;
					font-size: 25rpx;
					color: #818181;
					text-decoration: line-through;
				}
			}

			.imgUpTxtDown_cart {
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}
	}

	// 同程生活
	.tongcheng {
		padding: 20rpx;

		.tongcheng_item {
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;

			.tongcheng_left {
				width: 250rpx;
				height: 250rpx;
				margin-right: 20rpx;
			}

			.tongcheng_right {
				width: 450rpx;
				height: 250rpx;
				position: relative;

				.tongcheng_name {
					font-size: 30rpx;
					color: #000;
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					font-weight: bold;
				}

				.tongcheng_depict {
					font-size: 22rpx;
					color: rgba(145, 145, 145, 1);
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					padding-top: 10rpx;
				}

				.tongcheng_sale {
					font-size: 24rpx;
					color: #a3a3a3;
					padding-top: 10rpx;
				}

				.tongcheng_price {
					display: flex;
					align-items: baseline;
					position: absolute;
					bottom: 0;
					left: 0;

					.tongcheng_price1 {
						font-size: 38rpx;
						font-weight: bold;
						color: #ff5b22;
					}

					.tongcheng_price2 {
						padding-top: 5rpx;
						padding-left: 10rpx;
						font-size: 26rpx;
						color: #818181;
						text-decoration: line-through;
					}
				}

				.tongcheng_cart {
					position: absolute;
					right: 0;
					bottom: 0;
					width: 128rpx;
					line-height: 49rpx;
					background: rgba(255, 59, 2, 1);
					border-radius: 50rpx;
					font-size: 24rpx;
					text-align: center;
					color: #FFFFFF;
				}
			}
		}
	}


	// 图文对称
	.tuwen {
		padding: 20rpx;

		.tuwen_item {
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;

			.tuwen_left {
				width: 280rpx;
				height: 280rpx;
				margin-right: 20rpx;
			}

			.tuwen_right {
				width: 450rpx;
				height: 280rpx;
				position: relative;

				.tuwen_name {
					font-size: 28rpx;
					color: #000;
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
				}

				.tuwen_price {
					display: flex;
					align-items: center;
					position: absolute;
					bottom: 0;
					left: 0;
					height: 100rpx;
					width: 290rpx;

					.tuwen_price1 {
						height: 100rpx;
						width: 145rpx;

						.tuwen_price1_item1 {
							width: 145rpx;
							line-height: 40rpx;
							text-align: center;
							background: rgba(247, 215, 94, 1);
							color: #FFFFFF;
							font-size: 28rpx;
						}

						.tuwen_price1_item2 {
							width: 145rpx;
							line-height: 60rpx;
							background: rgba(240, 96, 70, 1);
							color: #FFFFFF;
							font-size: 32rpx;
							text-align: center;
						}

					}

					.tuwen_price2 {
						height: 100rpx;
						width: 145rpx;
						background: #F3F0F7;
						color: #5F5E7D;

						.tuwen_price2_item1 {
							width: 145rpx;
							line-height: 40rpx;
							font-size: 28rpx;
							text-align: center;
						}

						.tuwen_price2_item2 {
							width: 145rpx;
							line-height: 60rpx;
							font-size: 32rpx;
							font-weight: bold;
							text-align: center;
						}
					}


				}

				.tuwen_cart {
					position: absolute;
					right: 0;
					bottom: 0;
				}
			}
		}
	}


	/* 秒杀模块 */
	// 美团
	.meituan {
		padding: 20rpx;
		background-color: #F2F2F2;
		margin-bottom: 20rpx;

		.meituan_item {
			margin-bottom: 30rpx;
			padding: 10rpx;
			background: #ffffff;
			border-radius: 10rpx;

			.meituan_head {
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;

				.meituan_head_left {
					width: 280rpx;
					height: 280rpx;
					margin-right: 20rpx;
				}

				.meituan_head_right {
					width: 400rpx;
					height: 280rpx;
					position: relative;

					.meituan_head_right_name {
						color: #333333;
						font-size: 28rpx;
						font-weight: bold;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						line-clamp: 2;
						-webkit-box-orient: vertical;
					}

					.meituan_head_right_depict {
						display: block;
						color: #999999;
						font-size: 22rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						word-break: break-all;
						line-height: 32rpx;
						height: 32rpx;
					}

					.meituan_head_right_sale {
						display: block;
						color: #FF7433;
						font-size: 22rpx;
					}

					.meituan_head_right_price {
						position: absolute;
						bottom: 0;
						left: 0;

						.meituan_head_right_price1 {
							font-size: 32rpx;
							color: #FF7433;
						}

						.meituan_head_right_price2 {
							font-size: 22rpx;
							text-decoration: line-through;
							color: #CCCCCC;
						}
					}

					.meituan_head_right_cart {
						position: absolute;
						right: 10rpx;
						bottom: 0;
						display: inline-block;
						color: #FFFFFF;
						font-size: 28rpx;
						background-color: #FF7433;
						border-radius: 50rpx;
						line-height: 70rpx;
						width: 200rpx;
						text-align: center;
					}
				}
			}


			.meituan_foot {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.meituan_foot_left {
					justify-content: center;
					background-color: #FFF1EA;
					border-radius: 50rpx;
					width: 280rpx;
					line-height: 50rpx;
					text-align: center;
					color: #FF7433;
				}

				.meituan_foot_right {
					display: flex;
					align-items: center;
					color: #999999;
					font-size: 22rpx;
				}
			}

		}
	}

	// 普通
	.normal_seckill {
		padding: 20rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;

		.normal_seckill_head {
			line-height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.normal_seckill_head1 {
				font-size: 32rpx;
				color: #333333;
				font-weight: bold;
			}

			.normal_seckill_head2 {
				font-size: 22rpx;
				color: #999999;
			}
		}

		.normal_seckill_foot {
			display: flex;
			align-items: center;
			overflow: hidden;
			white-space: nowrap;
			margin-top: 20rpx;

			.normal_seckill_item {
				display: inline-block;
				width: 250rpx;
				position: relative;
				margin-right: 20rpx;

				.normal_seckill_name {
					font-size: 28rpx;
					color: #333333;
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}

				.normal_seckill_price {
					display: flex;
					align-items: baseline;
					margin-top: 15rpx;

					.normal_seckill_price1 {
						font-size: 28rpx;
						color: #FF7433;
						font-weight: bold;
					}

					.normal_seckill_price2 {
						font-size: 22rpx;
						font-weight: 400;
						text-decoration: line-through;
						color: #999999;
						margin-left: 10rpx;
					}
				}

				.normal_seckill_cart {
					position: absolute;
					right: 0;
					bottom: 0;
				}
			}
		}
	}


	// 多时段
	.moreTime {
		padding: 20rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;

		.moreTime_title {
			line-height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.moreTime_title1 {
				font-size: 32rpx;
				color: #333333;
				font-weight: bold;
			}

			.moreTime_title2 {
				font-size: 22rpx;
				color: #999999;
			}
		}

		.moreTime_head {
			margin-top: 20rpx;
			border-radius: 10rpx 10rpx 0 0;
			background: linear-gradient(90deg, #FF7433, #FF9333);
			line-height: 50rpx;

			.moreTime_head_item {
				color: #FFFFFF;
				display: inline-block;
				text-align: center;
				width: 200rpx;

				.moreTime_head_item1 {
					font-size: 32rpx;
				}

				.moreTime_head_item2 {
					font-size: 20rpx;
				}
			}
		}

		.moreTime_foot {
			display: flex;
			align-items: center;
			overflow: hidden;
			white-space: nowrap;
			padding-top: 20rpx;

			.moreTime_foot_item {
				display: inline-block;
				width: 250rpx;
				position: relative;
				margin-right: 20rpx;

				.moreTime_foot_name {
					font-size: 28rpx;
					color: #333333;
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}

				.moreTime_foot_price {
					display: flex;
					align-items: baseline;
					margin-top: 15rpx;

					.moreTime_foot_price1 {
						font-size: 28rpx;
						color: #FF7433;
						font-weight: bold;
					}

					.moreTime_foot_price2 {
						font-size: 22rpx;
						font-weight: 400;
						text-decoration: line-through;
						color: #999999;
						margin-left: 10rpx;
					}
				}

				.moreTime_foot_cart {
					position: absolute;
					right: 0;
					bottom: 0;
				}
			}
		}
	}
</style>
