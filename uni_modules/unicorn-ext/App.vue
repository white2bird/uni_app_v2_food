<script>
	// #ifndef VUE3
	import Vue from 'vue'
	// #endif
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let that = this;
			uni.getSystemInfo({
				success: function(e) {
					that.$cuCustomJS.setStatusBar(e.statusBarHeight);
					// #ifndef MP
					if (e.platform == 'android') {
						that.$cuCustomJS.setCustomBar(e.statusBarHeight + 50);
					} else {
						that.$cuCustomJS.setCustomBar(e.statusBarHeight + 45);
					};
					// #endif
									
					// #ifdef MP-WEIXIN
					let custom = wx.getMenuButtonBoundingClientRect();
					that.$cuCustomJS.setCustom(custom);
					that.$cuCustomJS.setCustomBar(custom.bottom + custom.top - e.statusBarHeight);
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
</style>
