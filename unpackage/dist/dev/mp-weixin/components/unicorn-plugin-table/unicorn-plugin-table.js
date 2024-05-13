"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      version: "1.1.0",
      nowSortKey: "",
      sortType: "desc",
      // asc/desc 升序/降序
      longTable: true,
      lineHeight: common_vendor.index.upx2px(64),
      tableLoaded: false,
      tableShow: true,
      selectAll: false,
      selectArr: []
    };
  },
  // mixin: [tableRender],
  computed: {
    compluteHeight() {
      return this.tableHeight ? "height: " + common_vendor.index.upx2px(this.tableHeight) + "px" : "";
    }
  },
  props: {
    tableData: {
      type: [Array, Boolean],
      default() {
        return false;
      }
    },
    columns: {
      /*
       *
       * [{title: xxx, key: 当前列展示对象名, width: 列宽, render: function}]
       *
       * */
      type: [Array, Boolean],
      required: true
    },
    stickSide: {
      type: Boolean,
      default: false
    },
    showBottomSum: {
      type: Boolean,
      default: false
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    tableHeight: {
      type: [Number, Boolean],
      default: 0
    },
    showSelect: {
      type: Boolean,
      default: false
    },
    singleSelect: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: "left"
      // right|center|left
    },
    titleTextAlign: {
      type: String,
      default: "left"
      // right|center|left
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    columns() {
      this.init();
    },
    tableData() {
      this.init();
    }
  },
  methods: {
    async init() {
      this.selectAll = false;
      this.selectArr = [];
      this.tableLoaded = false;
      this.tableShow = true;
      let _this = this;
      let container = await _this.getPageSize(".z-table-container"), pack = await _this.getPageSize(".z-table-pack");
      _this.timer && clearTimeout(_this.timer);
      if (container && pack) {
        _this.$nextTick(function() {
          if (_this.tableData && _this.tableData.length) {
            _this.tableShow = false;
            _this.timer = setTimeout(function() {
              _this.tableLoaded = true;
            }, 300);
          }
        });
        if (container.height != pack.height) {
          _this.longTable = true;
        } else {
          _this.longTable = false;
        }
      } else {
        _this.tableLoaded = false;
        _this.$nextTick(function() {
          _this.tableShow = true;
        });
      }
    },
    getPageSize: function(selecter) {
      let query = common_vendor.index.createSelectorQuery().in(this);
      return new Promise((resolve, reject) => {
        query.select(selecter).boundingClientRect((res) => {
          resolve(res);
        }).exec();
      });
    },
    dosum: function(key) {
      let sum = "-";
      if (this.tableData) {
        if (this.tableData.every((item) => {
          return !Number.isNaN(item[key] - 0);
        })) {
          sum = 0;
          this.tableData.map((item, index) => {
            if (!key && index != 0) {
              sum = "-";
            } else {
              let val = item[key] - 0;
              if (Number.isNaN(val)) {
                sum += 0;
              } else {
                sum += val;
              }
            }
          });
        }
      }
      return this.numTransform(sum);
    },
    getRowContent: function(row, col) {
      let tempHTML = "";
      let rowKey = row[col.key];
      if ([null, ""].includes(rowKey)) {
        rowKey = "-";
      }
      if (["nvl"].includes(rowKey)) {
        rowKey = "";
      }
      if (rowKey || rowKey === 0) {
        tempHTML = isNaN(rowKey - 0) ? rowKey : this.numTransform(rowKey - 0);
      } else if (!!col.format) {
        let tempFormat = col.format.template;
        col.format.names.map((item) => {
          let regexp = new RegExp(`#${item}#`, "mg");
          tempFormat = tempFormat.replace(regexp, row[item]);
        });
        tempHTML = tempFormat;
      } else if (!col.render) {
        let error = new Error("数据的key或format值至少一个不为空");
        throw error;
      }
      return tempHTML.toString();
    },
    sort: function(key, index) {
      if (!key || !this.columns[index].sort) {
        return;
      }
      if (key != this.nowSortKey) {
        this.nowSortKey = key;
        this.sortType = "desc";
      } else {
        this.toggleSort();
      }
      this.$emit("onSort", {
        key: this.nowSortKey,
        type: this.sortType
      });
    },
    toggleSort: function() {
      this.sortType = this.sortType == "asc" ? "desc" : "asc";
    },
    numTransform: function(n) {
      if (Number.isNaN(n - 0)) {
        return n;
      }
      if (Math.abs(n) >= 1e8) {
        n = Number((n / 1e8).toFixed(1)) + "亿";
      } else if (Math.abs(n) >= 1e4) {
        n = Number((n / 1e4).toFixed(1)) + "万";
      }
      return n.toString();
    },
    resetSort: function() {
      this.nowSortKey = "";
      this.sortType = "desc";
    },
    setUrl: function(row, col) {
      if (!col.isLink) {
        return;
      }
      let urlParam = {};
      let {
        isLink: {
          url,
          params = []
        }
      } = col;
      params.forEach((item) => {
        if (~item.indexOf("|")) {
          let temp = item.split("|");
          urlParam[temp[0]] = row[temp[1]];
        } else {
          urlParam[item] = row[item];
        }
      });
      url = this.setUrlParams(url, urlParam);
      return url;
    },
    setUrlParams: function(url, params) {
      let tempUrl = url, keyArr = Object.keys(params);
      keyArr.forEach((item) => {
        tempUrl += `&${item}=${params[item]}`;
      });
      tempUrl = tempUrl.replace(/\&/, "?");
      return tempUrl;
    },
    itemClick: function(row, col) {
      if (col.listenerClick) {
        this.$emit("onClick", row);
      }
    },
    doSelect: function(isAll = false, index) {
      let temp = /* @__PURE__ */ new Set();
      if (isAll) {
        if (!this.selectAll) {
          for (let i = 0; i < this.tableData.length; i++) {
            temp.add(i);
          }
        }
      } else {
        this.selectArr.forEach((item) => {
          temp.add(item);
        });
        if (temp.has(index)) {
          temp.delete(index);
        } else {
          if (this.singleSelect) {
            temp.clear();
          }
          temp.add(index);
        }
      }
      this.selectArr = Array.from(temp);
      if (this.selectArr.length == this.tableData.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
      this.$emit("onSelect", this.selectArr);
    },
    getTitleText: function(title) {
      let tempHTML = title;
      return tempHTML.toString();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.tableLoaded && (!$props.tableData || !$props.columns)
  }, !$data.tableLoaded && (!$props.tableData || !$props.columns) ? {
    b: common_vendor.n({
      ztableLoading: $data.tableShow
    })
  } : {}, {
    c: common_vendor.f($props.columns, (item, index, i0) => {
      return common_vendor.e({
        a: $props.showSelect && !$props.singleSelect && index === 0
      }, $props.showSelect && !$props.singleSelect && index === 0 ? {
        b: common_vendor.n({
          "selected": $data.selectAll
        }),
        c: common_vendor.o(($event) => $options.doSelect(true), index)
      } : {}, {
        d: $options.getTitleText(item.title),
        e: item.hasOwnProperty("key") && item.hasOwnProperty("sort") && $props.tableData.length
      }, item.hasOwnProperty("key") && item.hasOwnProperty("sort") && $props.tableData.length ? {
        f: $data.nowSortKey == item.key && $data.sortType == "asc" ? 1 : "",
        g: $data.nowSortKey == item.key && $data.sortType == "desc" ? 1 : ""
      } : {}, {
        h: $props.stickSide && index == 0 ? 1 : "",
        i: item.width ? item.width + "rpx" : "200rpx",
        j: index,
        k: common_vendor.o(($event) => $options.sort(item.key, index), index)
      });
    }),
    d: common_vendor.n({
      "text-left": $props.titleTextAlign === "left",
      "text-center": $props.titleTextAlign === "center",
      "text-right": $props.titleTextAlign === "right"
    }),
    e: $props.tableData.length
  }, $props.tableData.length ? {
    f: common_vendor.f($props.tableData, (row, iIndex, i0) => {
      return {
        a: common_vendor.f($props.columns, (col, jIndex, i1) => {
          return common_vendor.e({
            a: $props.showSelect && jIndex === 0
          }, $props.showSelect && jIndex === 0 ? {
            b: common_vendor.n({
              "selected": $data.selectArr.includes(iIndex)
            }),
            c: common_vendor.o(($event) => $options.doSelect(false, iIndex), jIndex)
          } : {}, {
            d: !col.isLink
          }, !col.isLink ? {
            e: $options.getRowContent(row, col)
          } : col.isLink ? {
            g: $options.getRowContent(row, col),
            h: $options.setUrl(row, col)
          } : {}, {
            f: col.isLink,
            i: common_vendor.n({
              "z-table-stick-side z-table-stick-side-color": $props.stickSide && jIndex == 0
            }),
            j: col.width ? col.width + "rpx" : "200rpx",
            k: jIndex,
            l: common_vendor.o(($event) => $options.itemClick(row, col), jIndex)
          });
        }),
        b: iIndex
      };
    }),
    g: common_vendor.n({
      "text-left": $props.textAlign === "left",
      "text-center": $props.textAlign === "center",
      "text-right": $props.textAlign === "right"
    }),
    h: $props.showBottomSum ? 1 : "",
    i: common_vendor.n({
      "short-table": !$data.longTable && $props.showBottomSum
    })
  } : {}, {
    j: $props.showBottomSum && $props.tableData.length
  }, $props.showBottomSum && $props.tableData.length ? {
    k: common_vendor.f($props.columns, (sumCol, sumIndex, i0) => {
      return {
        a: common_vendor.t(sumIndex == 0 ? "总计" : $options.dosum(sumCol.key)),
        b: sumIndex == 0 ? 1 : "",
        c: $props.stickSide && sumIndex == 0 ? 1 : "",
        d: sumCol.width ? sumCol.width + "rpx" : "200rpx",
        e: sumIndex
      };
    }),
    l: common_vendor.n({
      "long-table": $data.longTable
    })
  } : {}, {
    m: $props.tableData && $props.tableData.length == 0 && !$data.tableLoaded
  }, $props.tableData && $props.tableData.length == 0 && !$data.tableLoaded ? {
    n: $props.showLoading ? "" : $props.emptyText
  } : {}, {
    o: common_vendor.s($options.compluteHeight)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mico/Documents/HBuilderProjects/uni_app_v2/components/unicorn-plugin-table/unicorn-plugin-table.vue"]]);
wx.createComponent(Component);
