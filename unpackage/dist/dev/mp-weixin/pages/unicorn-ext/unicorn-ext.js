"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      extName: null
    };
  },
  /**
   * option参数是通过/pages/unicorn-base/index.vue页面跳转传递
   * 
   * @param {Object} option
   */
  onLoad: function(option) {
    this.extName = option.extName;
  },
  onPageScroll: function(e) {
    if (this.extName == "unicorn-page-video-slide") {
      this.$refs["unicorn-page-video-slide"].onPageScrollUnicorn(this.$children[1], e);
    }
  }
};
if (!Array) {
  const _component_cu_custom = common_vendor.resolveComponent("cu-custom");
  const _easycom_unicorn_page_shop_jd2 = common_vendor.resolveComponent("unicorn-page-shop-jd");
  const _easycom_unicorn_page_order2 = common_vendor.resolveComponent("unicorn-page-order");
  const _easycom_unicorn_page_video_slide2 = common_vendor.resolveComponent("unicorn-page-video-slide");
  (_component_cu_custom + _easycom_unicorn_page_shop_jd2 + _easycom_unicorn_page_order2 + _easycom_unicorn_page_video_slide2)();
}
const _easycom_unicorn_page_shop_jd = () => "../../components/unicorn-page-shop-jd/unicorn-page-shop-jd.js";
const _easycom_unicorn_page_order = () => "../../components/unicorn-page-order/unicorn-page-order.js";
const _easycom_unicorn_page_video_slide = () => "../../components/unicorn-page-video-slide/unicorn-page-video-slide.js";
if (!Math) {
  (_easycom_unicorn_page_shop_jd + _easycom_unicorn_page_order + _easycom_unicorn_page_video_slide)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      isBack: true,
      bgColor: "cu-custom-class-" + $data.extName
    }),
    b: $data.extName == "unicorn-page-shop-jd"
  }, $data.extName == "unicorn-page-shop-jd" ? {} : $data.extName == "unicorn-page-order" ? {} : $data.extName == "unicorn-page-video-slide" ? {
    e: common_vendor.sr("unicorn-page-video-slide", "65dcb7d4-3")
  } : {}, {
    c: $data.extName == "unicorn-page-order",
    d: $data.extName == "unicorn-page-video-slide"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/pages/unicorn-ext/unicorn-ext.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
