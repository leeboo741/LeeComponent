// pages/icon/icon.js
Page({

  /**
   * 点击图标
   */
  tapIcon: function (e) {
    let temp = this.data.iconData[e.currentTarget.dataset.index];
    temp.iconSelected = !temp.iconSelected;
    this.setData({
      iconData: this.data.iconData
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  /**
   * 页面的初始数据
   */
  data: {
    selected: false,
    iconData: [
      {
        "iconType": "home",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "user",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "user-2",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "left-arrow",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "right-arrow",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "folder",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "folder-2",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "refresh",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "phone",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "book",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "book-2",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "notice",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "notice-2",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "wallet",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "vip",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "location",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "filter",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "label",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "gift",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "heart",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "heart-2",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "search",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "money",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "money-2",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "setting",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "share",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "pic",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "reload",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "joypad",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "power",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "pen",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "printer",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "link",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "in",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "out",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "music",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "camera",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "video",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "tv",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "mail",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "openletter",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "medal",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "mic",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "lock",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "lockopen",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "many",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "map",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "lighting",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "lightbulb",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "infinity",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "cup",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "card",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "graph",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "bluetooth",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "headphones",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "bubble",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "dublebubble",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "doc",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "coding",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "copy",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "cloud",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "cloudup",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "clouddown",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "clipboard",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "clip",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "cocktail",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "check",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "doubt",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "alert",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "cancel",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "clock",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "calendar",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "timer",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "anchor",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "calc",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "box",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "basket",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "bell",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "archive",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "pad",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "tree",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "delete",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "star",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "qrcode",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "scanner",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "save",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
      {
        "iconType": "data",
        "iconSize": 50,
        "iconNormalColor": "#778899",
        "iconSelectedColor": "#ee2c2c",
        "iconSelected": false,
      },
    ],
  },
})