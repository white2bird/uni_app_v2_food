"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    register() {
      const baseUrl = "http://localhost:8080";
      common_vendor.index.request({
        url: baseUrl + "/user/createUser",
        method: "POST",
        data: this.form
      }).then((res) => {
        return res.data;
      }).then((res) => {
        if (res.code == 200) {
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
        } else {
          common_vendor.index.showToast({
            icon: "error",
            title: "创建失败"
          });
        }
      }).catch((res) => {
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.form.username = $event),
    b: common_vendor.p({
      ["prefix-icon"]: "person",
      placeholder: "请输入用户名",
      modelValue: $data.form.username
    }),
    c: common_vendor.o(($event) => $data.form.password = $event),
    d: common_vendor.p({
      type: "password",
      ["prefix-icon"]: "locked",
      placeholder: "请输入密码",
      modelValue: $data.form.password
    }),
    e: common_vendor.o((...args) => $options.register && $options.register(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
