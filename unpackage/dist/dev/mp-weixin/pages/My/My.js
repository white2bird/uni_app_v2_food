"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "My",
  setup(__props) {
    const instance = common_vendor.getCurrentInstance();
    const { $request } = instance.appContext.config.globalProperties;
    const menus = common_vendor.ref([
      { id: 2, name: "联系客服", icon: "/static/comment.png", arrow: true },
      { id: 3, name: "分享应用", icon: "/static/share.png", arrow: false },
      { id: 4, name: "退出登录", icon: "/static/poweroff.png", arrow: false }
    ]);
    const name = common_vendor.reactive({
      name: common_vendor.index.getStorageSync("username")
    });
    const register = () => {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    };
    const login = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    const ck = (id) => {
      if (id === 4) {
        $request({
          url: "/user/logout",
          method: "GET"
        }).then((res) => {
          if (res.code === 200) {
            common_vendor.index.setStorageSync("token", "");
            common_vendor.index.setStorageSync("username", "");
            name.name = "";
          }
        });
      }
    };
    common_vendor.onShow(() => {
      name.name = common_vendor.index.getStorageSync("username");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(name.name),
        b: common_vendor.o(login),
        c: common_vendor.o(register),
        d: common_vendor.f(menus.value, (v, k0, i0) => {
          return common_vendor.e({
            a: v.icon,
            b: common_vendor.t(v.name),
            c: v.arrow
          }, v.arrow ? {} : {}, {
            d: v.id,
            e: common_vendor.o(($event) => ck(v.id), v.id)
          });
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/pages/My/My.vue"]]);
wx.createPage(MiniProgramPage);
