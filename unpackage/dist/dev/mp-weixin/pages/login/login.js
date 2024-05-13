"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const instance = common_vendor.getCurrentInstance();
    const { $request } = instance.appContext.config.globalProperties;
    const login = () => {
      $request({
        url: "/user/login",
        method: "POST",
        data: form
      }).then((res) => {
        if (res.code == 200) {
          common_vendor.index.setStorageSync("token", res.data.token);
          common_vendor.index.setStorageSync("username", form.username);
          common_vendor.index.switchTab({
            url: "/pages/My/My"
          });
        }
      });
    };
    const form = common_vendor.reactive({
      username: "",
      password: ""
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => form.username = $event),
        b: common_vendor.p({
          ["prefix-icon"]: "person",
          placeholder: "请输入用户名",
          modelValue: form.username
        }),
        c: common_vendor.o(($event) => form.password = $event),
        d: common_vendor.p({
          type: "password",
          ["prefix-icon"]: "locked",
          placeholder: "请输入密码",
          modelValue: form.password
        }),
        e: common_vendor.o(login)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
