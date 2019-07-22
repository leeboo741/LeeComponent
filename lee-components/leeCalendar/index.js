

/** ====================================================================== */
/**                                                                        */
/** ============================= 日历 组件 ============================== */
/**                                                                        */
/** ====================================================================== */
const timeUtils = require("../utils/timeUtils.js")
Component({
  /** ==================================================== */
  /** ================= 组件数据 Start ==================== */
  /** ==================================================== */
  /**
   * 组件的属性列表
   */
  properties: {
    haveContentTimeList:{
      type: Array,
      value: [],
    }, // 选中的时间列表
  },

  /**
   * 组件的初始数据 内部属性
   */
  data: {
    currentDate: null, // 当前时间
    weeks: [
      "周日",
      "周一",
      "周二",
      "周三",
      "周四",
      "周五",
      "周六"
    ],
  },

  /**
   * 属性监听
   */
  observers: {
  },

  /** ==================================================== */
  /** ================= 组件数据 End ==================== */
  /** ==================================================== */

  /** ==================================================== */
  /** ================= 方法 Start ==================== */
  /** ==================================================== */

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取 开始 和 结束 的星期
    _getStartAndEndDayWeek: function () {
      let startWeek = timeUtils.getStartDayForMonth(this.data.currentDate).getDay();
      let endWeek = timeUtils.getEndDayForMonth(this.data.currentDate).getDay();
      let dayCount = timeUtils.getDayCountForMonth(this.data.currentDate);
    },
  },

  /** ==================================================== */
  /** ================= 方法 End ==================== */
  /** ==================================================== */

  /** ==================================================== */
  /** ================= 生命周期 Start ==================== */
  /** ==================================================== */

  /**
   * 生命周期
   */
  created: function () {
    // 在组件实例刚刚被创建时执行
    this.setData({
      currentDate: timeUtils.getDate(new Date(), 0, 0, 0, 0, 0,0,0)
    })
    this._getStartAndEndDayWeek();
  },
  attached: function () {
    // 在组件实例进入页面节点树时执行
  },
  ready: function () {
    // 在组件在视图层布局完成后执行
  },
  moved: function () {
    // 在组件实例被移动到节点树另一个位置时执行
  },
  detached: function () {
    // 在组件实例被从页面节点树移除时执行
  },
  error: function () {
    // 每当组件方法抛出错误时执行
  },
  /**
   * 组件所在页面的生命周期
   */
  pageLifetimes: {
    show: function () {
      // 页面被展示
    },
    hide: function () {
      // 页面被隐藏
    },
    resize: function (size) {
      // 页面尺寸变化
    }
  },

  /** ==================================================== */
  /** ================= 生命周期 End ==================== */
  /** ==================================================== */

  /** ==================================================== */
  /** ================= 样式 Start ==================== */
  /** ==================================================== */

  /**
   * 外部样式类
   */
  externalClasses: ["i-class"],

  /** ==================================================== */
  /** ================= 样式 End ==================== */
  /** ==================================================== */
})
