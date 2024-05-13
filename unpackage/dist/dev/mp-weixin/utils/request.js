"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://localhost:8080";
const request = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + options.url,
      method: options.method || "GET",
      header: { token: common_vendor.index.getStorageSync("token") },
      data: options.data || {},
      success: (res) => {
        const data = res.data;
        if (data.code == 304) {
          common_vendor.index.showToast({
            icon: "error",
            title: "用户未登录"
          });
          setTimeout(common_vendor.index.navigateTo({
            url: "/pages/login/login"
          }), 4e4);
          return;
        } else if (data.code !== 200) {
          common_vendor.index.showToast({
            icon: "error",
            title: "操作错误"
          });
        }
        resolve(data);
      },
      fail: (error) => {
        common_vendor.index.showToast({
          icon: "error",
          title: "系统错误"
        });
        reject(error);
      }
    });
  });
};
exports.request = request;
