// lee-components/leeImageUpload/index.js


/** ====================================================================== */
/**                                                                        */
/** ============================ 图片上传 组件 ============================== */
/**                                                                        */
/** ====================================================================== */

const DEFAULT_MAX_IMAGE_COUNT = 9;

const UploadFileService = require("../request/uploadFile/uploadFileService.js");

Component({
  /** ==================================================== */
  /** ================= 组件数据 Start ==================== */
  /** ==================================================== */
  /**
   * 组件的属性列表
   */
  properties: {
    formData: {
      type: Object,
      value: null,
    }, // 上传附带信息
    name: {
      type: String,
      value: null,
    }, // 上传字段名称
    uploadUrl: {
      type: String,
      value: null,
    }, // 上传地址
    maxImageCount: {
      type: Number,
      value: DEFAULT_MAX_IMAGE_COUNT,
    }, // 最大上传图片数量 默认为 9
    selectImageMode: {
      type: String,
      value: "cover", 
    }, // 选择图片模式 cover 覆盖已选 | append 增量选择  权限高于abelDelete 当值为append时 ableDelete必然为true 不接受更改
    ableDelete: {
      type: Boolean,
      value: false,
    }, // 是否允许删除图片 true 展示 删除按钮 允许删除已经添加的图片 false 隐藏删除按钮  
    autoUpload: {
      type: Boolean,
      value: false,
    }, // 是否允许自动上传 true 添加图片自动上传 false 添加图片后 需要手动 更改 startUpload 为 true 开始上传
    startUpload: {
      type: Boolean,
      value: false,
    }, // 上传开关 true 开始上传 false 取消上传

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
    // 监听 startUpload 变化， 开始或停止上传
    "startUpload": function (startUpload) {
      if (startUpload) {
        this.uploadListImage();
      } else {
        this.cancelUpload();
      }
    },
    "selectImageMode": function (selectImageMode) {
      if (selectImageMode == "append") {
        this.setData({
          ableDelete: true
        })
      }
    },
    "ableDelete": function (ableDelete) {
      if (this.data.selectImageMode == "append" && this.data.ableDelete == false) {
        this.setData({
          ableDelete: true
        })
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
     * 点击删除
     */
    deleteImageAction: function (e) {
      // 要删除的下标
      let tempIndex= e.currentTarget.dataset.index;
      // 要删除的地址
      let tempImagePath = e.currentTarget.dataset.imagepath;
      // 选中图片中删除数据
      this.data.uploadImagePathList.splice(tempIndex, 1);
      // 如果已经上传过，将上传数据中对应的数据删除
      if (tempIndex < this.data.serviceImagePathList.length) {
        this.data.serviceImagePathList.splice(tempIndex, 1);
      }
      // 如果已经上传过，上传的下标也要回退一格
      if (tempIndex <= this.data.currentTarget) {
        this.data.currentUploadIndex--;
      }
      this.setData({
        uploadImagePathList: this.data.uploadImagePathList,
        serviceImagePathList: this.data.serviceImagePathList,
        currentUploadIndex: this.data.currentUploadIndex
      })
    },

    /**
     * 点击添加新图
     */
    tapAddNewUploadImage: function() {
      let count = 0;
      if (this.data.selectImageMode == "cover") {
        // 覆盖 可选择最大数量
        count = this.data.maxImageCount;
      } else if (this.data.selectImageMode == "append") {
        // 追加 可选择 除去已选择数量的 剩余数量
        // 如果已经超过了数量 提醒用户
        if (this.data.uploadImagePathList.length >= this.data.maxImageCount) {
          wx.showToast({
            title: '最多选择' + this.data.maxImageCount + "张图片",
            icon: 'none'
          })
          return;
        }
        count = this.data.maxImageCount - this.data.uploadImagePathList.length;
      } else {
        throw new Error("leeImageUpload selectImageMode 错误");
        return;
      }
      let that = this;
      wx.chooseImage({
        count: count,
        success: function(res) {
          if (that.data.selectImageMode == "cover") {
            // 覆盖 
            // 覆盖 上传列表
            // 重置 返回值列表
            // 重置 上传下标
            that.setData({
              uploadImagePathList: res.tempFilePaths,
              serviceImagePathList: [],
              currentUploadIndex: 0,
            })
          } else if (that.data.selectImageMode == "append") {
            // 追加
            // 上传列表 追加
            // 返回值列表不动 等待上传后追加
            // 下标不动 上传完成后已经+1 当前下标正确
            that.data.uploadImagePathList = that.data.uploadImagePathList.concat(res.tempFilePaths);
            that.setData({
              uploadImagePathList: that.data.uploadImagePathList,
            })
          }
          // 如果开启了自动上传 开始上传
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
      // 如果返回值列表 为 null , 初始化成 列表
      if (this.data.serviceImagePathList == null) {
        this.data.serviceImagePathList = [];
      }
      let that = this;
      // 为了安全 先取消之前的上传任务
      this.cancelUpload();
      let tempParam = {};
      if (this.data.uploadUrl == null || this.data.uploadUrl.length <= 0) {
        throw new Error("leeImageUpload uploadUrl 不能为空");
        return;
      }
      // 上传地址
      tempParam.url = this.data.uploadUrl;
      // 图片地址
      tempParam.filePath = this.data.uploadImagePathList[this.data.currentUploadIndex];
      if (this.data.name != null && this.data.name.length > 0) {
        tempParam.name = this.data.name;
      }
      // 附属上传信息 
      /*
       * 如果还需要带上上传的图片信息，需要在这里根据自己需要进行修改
       */
      if (this.data.formData != null && this.data.formData.length > 0) {
        tempParam.formData = this.data.formData;
      }
      // 上传成功回调
      tempParam.successCallback = function successCallback(res) {
        console.log("uploadimage success callback: \n" + JSON.stringify(res));
        /*
         * 这里需要根据自己需要去修改，返回自己需要的数据
         */
        that.data.serviceImagePathList.push(res.root[0].fileAddress);
        // 上传下标 +1
        that.data.currentUploadIndex++;
        that.setData({
          serviceImagePathList: that.data.serviceImagePathList
        })
        if (that.data.currentUploadIndex >= that.data.uploadImagePathList.length) {
          // 下标超出 上传列表长度 上传完成
          that.setData({
            currentUploadIndex: that.data.currentUploadIndex,
            uploadImageProgress: -1,
            startUpload: false,
          })
          that.cancelUpload();
          // if (uploadCompleteCallback != null && typeof uploadCompleteCallback == "function") {
          //   uploadCompleteCallback();
          // }
          that.uploadComplete();
        } else {
          // 下标 没有超出 继续上传下一张图片
          that.setData({
            currentUploadIndex: that.data.currentUploadIndex,
            uploadImageProgress: 0
          })
          that.uploadListImage()
        }
      };
      // 上传失败回调
      tempParam.failCallback = function failCallback(res) {
        console.log("uploadimage fail callback: \n" + JSON.stringify(res));
        wx.showToast({
          title: '第' + that.data.currentUploadIndex + "张图片上传失败",
          icon: 'none'
        })
        that.data.uploadImagePathList.splice(that.data.currentUploadIndex, 1);
        if (that.data.currentUploadIndex >= that.data.uploadImagePathList.length) {
          that.setData({
            currentUploadIndex: 0,
            uploadImageProgress: -1,
            startUpload: false,
          })
          that.cancelUpload();
          // if (uploadCompleteCallback != null && typeof uploadCompleteCallback == "function") {
          //   uploadCompleteCallback();
          // }
          that.uploadComplete();
        } else {
          that.setData({
            uploadImageProgress: 0
          })
          that.uploadListImage();
        }
      };
      // 监听上传进度回调
      tempParam.onProgressCallback = function onProgressCallback(res) {
        // console.log("uploadimage on progress callback: \n" + JSON.stringify(res));
        that.setData({
          uploadImageProgress: res.progress
        })
      };
      // 发起请求
      that.data.uploadImageTask = UploadFileService.fileUpload(tempParam);
    },
    
    /**
     * 上传完成
     */
    uploadComplete: function () {
      let callBackFunctionName = 'upload-complete'; // 触发事件 方法名
      let myEventDetail = {
        uploadReturnDataList: this.data.serviceImagePathList
      }; // detail对象，提供给事件监听函数
      let myEventOption = {
        'bubbles': false, // 事件是否冒泡
        'composed': false, // 事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
        'capturePhase': false, // 事件是否拥有捕获阶段
      }; // 触发事件的选项
      this.triggerEvent(callBackFunctionName, myEventDetail, myEventOption);
    }
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
      this.cancelUpload();
    },
    error: function () {
      // 每当组件方法抛出错误时执行
    },
  },

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
    this.cancelUpload();
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
      this.cancelUpload();
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

