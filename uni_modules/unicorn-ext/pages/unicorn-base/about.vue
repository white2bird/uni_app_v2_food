<template>
	<view>
		<scroll-view scroll-y class="scrollPage">
			<view class="UCenter-bg">
				<image src="/static/unicorn-ext/logo.png" class="png" mode="widthFix" style="border-radius: 20px;"></image>
				<view class="text-xl margin-top-sm">元咏插件库
					<text class="text-df"> v1.1.0</text>
				</view>
				<view class="margin-top-sm">
					<text>By:小咏同学</text>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
				<view class="cu-item arrow">
					<navigator class="content" url="/pages/unicorn-base/me" hover-class="none">
						<image src="/static/unicorn-ext/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">关于元咏插件库</text>
					</navigator>
				</view>
				<!-- <view class="cu-item arrow"  @tap="showQrcode">
					<view class="content">
						<text class="cuIcon-appreciatefill text-red"></text>
						<text class="text-grey">赞赏支持</text>
					</view>
				</view> -->
				<view class="cu-item arrow">
					<button class="cu-btn content" open-type="feedback">
						<text class="cuIcon-writefill text-cyan"></text>
						<text class="text-grey">意见反馈</text>
					</button>
				</view>
				<view class="cu-item arrow">
					<button class="cu-btn content" open-type="contact">
						<text class="cuIcon-messagefill text-green"></text>
						<text class="text-grey">联系客服</text>
					</button>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			showQrcode:function(){
				uni.previewImage({
					urls: ['/statis/unicorn-ext/zanCode.jpg'] // 当前显示图片的http链接
				})
			},
		}
	}
</script>

<style>
	.UCenter-bg {
		background-image: url(/static/unicorn-ext/index.jpg);
		background-size: cover;
		height: 550rpx;
		display: flex;
		justify-content: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		color: #fff;
		font-weight: 300;
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}

	.UCenter-bg text {
		opacity: 0.8;
	}

	.UCenter-bg image {
		width: 200rpx;
		height: 200rpx;
	}

	.UCenter-bg .gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	map,.mapBox {
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	map,.mapBox {
		width: 750rpx;
		height: 300rpx;
	}
</style>
