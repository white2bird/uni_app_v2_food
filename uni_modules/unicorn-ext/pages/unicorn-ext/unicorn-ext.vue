<template>
	<view>
		<!-- bgColor样式统一定义在/colorui/components/unicorn-custom-style.css 中 -->
		<cu-custom :isBack="true" :bgColor="'cu-custom-class-' + extName">
			<block slot="content">元咏插件库</block>
		</cu-custom>

		<unicorn-page-shop-jd v-if="extName=='unicorn-page-shop-jd'" />
		<unicorn-page-order v-else-if="extName=='unicorn-page-order'" />
		<unicorn-page-video-slide v-else-if="extName=='unicorn-page-video-slide'" ref="unicorn-page-video-slide" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				extName: null
			}
		},
		/**
		 * option参数是通过/pages/unicorn-base/index.vue页面跳转传递
		 * 
		 * @param {Object} option
		 */
		onLoad: function(option) {
			this.extName = option.extName
		},
		onPageScroll: function(e) {
			if (this.extName == 'unicorn-page-video-slide') {
				this.$refs['unicorn-page-video-slide'].onPageScrollUnicorn(this.$children[1], e);
			}
		}
	}
</script>

<style>
</style>
