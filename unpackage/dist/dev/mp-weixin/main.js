"use strict";
const common_vendor = require("./common/vendor.js");
const utils_request = require("./utils/request.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./pages/register/register.js";
  "./pages/My/My.js";
  "./pages/Videos/Videos.js";
  "./pages/Voices/Voices.js";
  "./pages/unicorn-ext/unicorn-ext.js";
  "./pages/Pic/Pic.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/App.vue"]]);
function getCustom() {
  return common_vendor.index.getStorageSync("cache_Custom");
}
function setCustom(custom) {
  common_vendor.index.setStorageSync("cache_Custom", custom);
}
function getCustomBar() {
  return common_vendor.index.getStorageSync("cache_CustomBar");
}
function setCustomBar(CustomBar) {
  common_vendor.index.setStorageSync("cache_CustomBar", CustomBar);
}
function getStatusBar() {
  return common_vendor.index.getStorageSync("cache_StatusBar");
}
function setStatusBar(StatusBar) {
  common_vendor.index.setStorageSync("cache_StatusBar", StatusBar);
}
const cuCustomJS = {
  getCustom,
  setCustom,
  getCustomBar,
  setCustomBar,
  getStatusBar,
  setStatusBar
};
const cuCustom = () => "./colorui/components/cu-custom.js";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.component("cu-custom", cuCustom);
  app.config.globalProperties.$cuCustomJS = cuCustomJS;
  app.config.globalProperties.$request = utils_request.request;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
exports.cuCustomJS = cuCustomJS;
