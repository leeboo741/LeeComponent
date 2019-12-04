// pages/uploadImage/uploadImage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [
      "https://img.taochonghui.com/weapp/banner01.jpg",
      "https://img.taochonghui.com/weapp/banner02.jpg",
      "https://media.w3.org/2010/05/sintel/trailer.mp4",
      "https://img.taochonghui.com/weapp/banner01.jpg",
      "https://img.taochonghui.com/weapp/banner02.jpg"
    ],
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
   * 上传完成
   */
  uploadComplete: function(e) {
    console.log("上传图片组件 上传完成 \n" +JSON.stringify(e));

  }
})