"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      elements: [
        {
          title: "视频",
          name: "Videos.vue",
          color: "cyan",
          cuIcon: "newsfill",
          path: "/pages/Videos/Videos"
        },
        {
          title: "音频",
          name: "Voices.vue",
          color: "red",
          cuIcon: "myfill",
          path: "/pages/Voices/Voices"
        },
        {
          title: "图库",
          name: "Pic.vue",
          color: "blue",
          cuIcon: "myfill",
          path: "/pages/Pic/Pic"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.elements, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.name),
        c: common_vendor.n("cuIcon-" + item.cuIcon),
        d: item.path,
        e: common_vendor.n("bg-" + item.color),
        f: common_vendor.s({
          animation: "show " + ((index + 1) * 0.2 + 1) + "s 1"
        }),
        g: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
