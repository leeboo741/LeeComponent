// lee-components/leeImageUpload/index.js


/** ====================================================================== */
/**                                                                        */
/** ============================ 图片上传 组件 ============================== */
/**                                                                        */
/** ====================================================================== */

const DEFAULT_MAX_IMAGE_COUNT = 9;

const UploadFileService = require("../request/uploadFile/uploadFileService.js");
const { UploadParamProperty } = require("../leeImageUpload/uploadParamProperty.js")

Component({
  /** ==================================================== */
  /** ================= 组件数据 Start ==================== */
  /** ==================================================== */
  /**
   * 组件的属性列表
   */
  properties: {
    uploadParamProperty: {
      type: UploadParamProperty,
      value: null,
    },
    maxImageCount: {
      type: Number,
      value: DEFAULT_MAX_IMAGE_COUNT,
    }, // 最大上传图片数量
    ableDelete: {
      type: Boolean,
      value: false,
    }, // 是否允许删除图片
    autoUpload: {
      type: Boolean,
      value: true,
    }, // 是否允许自动上传
    startUpload: {
      type: Boolean,
      value: false,
    }, // 上传开关
  },

  /**
   * 组件的初始数据 内部属性
   */
  data: {
    uploadImagePathList: [], // 要上传的图片地址列表
    serviceImagePathList: [], // 上传完成后返回的服务器地址列表
    uploadImageTask: null, // 上传图片任务
    uploadImageProgress: -1, // 当前上传图片进度
    currentUploadIndex: 0, // 当前上传图片下标
  },

  /**
   * 属性监听
   */
  observers: {
    "startUpload": function (startUpload) {
      if (startUpload) {
        this.uploadListImage();
      } else {
        this.cancelUpload();
      }
    },
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
    /**
     * 点击添加新图
     */
    tapAddNewUploadImage: function() {
      let that = this;
      wx.chooseImage({
        count: this.data.maxImageCount,
        success: function(res) {
          that.setData({
            uploadImagePathList: res.tempFilePaths,
            serviceImagePathList: [],
          })
          if (that.data.autoUpload) {
            that.setData({
              startUpload: true
            })
          }
        },
      })
    },

    /**
     * 取消上传
     */
    cancelUpload: function () {
      if (this.data.uploadImageTask != null) {
        // 取消图片上传进度监听
        this.data.uploadImageTask.offProgressUpdate();
        // 中止图片上传任务
        this.data.uploadImageTask.abort();
        // 图片上传任务置空
        this.data.uploadImageTask = null;
      }
    },

    /**
     * 上传列表图片
     * @param uploadCompleteCallback 列表上传完成
    */
    uploadListImage: function (uploadCompleteCallback) {
      if (this.data.serviceImagePathList == null) {
        this.data.serviceImagePathList = [];
      }
      let that = this;
      this.cancelUpload();
      that.data.uploadImageTask = UploadFileService.fileUpload("http://192.168.3.103:5050/file/upload", that.data.uploadImagePathList[that.data.currentUploadIndex],
        // 监听图片上传任务
        function uploadCallback(res) {
          console.log("uploadimage upload callback: \n" + JSON.stringify(res));
          that.data.serviceImagePathList.push(res.root[0].fileAddress);
          that.data.currentUploadIndex++;
          that.setData({
            serviceImagePathList: that.data.serviceImagePathList
          })
          if (that.data.currentUploadIndex >= that.data.uploadImagePathList.length) {
            that.setData({
              currentUploadIndex: 0,
              uploadImageProgress: -1,
              startUpload: false,
            })
            that.cancelUpload();
            if (uploadCompleteCallback != null && typeof uploadCompleteCallback == "function") {
              uploadCompleteCallback();
            }
          } else {
            that.setData({
              currentUploadIndex: that.data.currentUploadIndex,
              uploadImageProgress: 0
            })
            that.uploadListImage()
          }
        },
        // 监听图片上传进度
        function onProgressCallback(res) {
          console.log("uploadimage on progress callback: \n" + JSON.stringify(res));
          that.setData({
            uploadImageProgress: res.progress
          })
        },
      )
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
  lifeTimes: {
    created: function () {
      // 在组件实例刚刚被创建时执行
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

