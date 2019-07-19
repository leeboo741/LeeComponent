// pages/countDown/countDown.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countDownTarget: 10000, // 倒计时
    stopCountDown: false, // 是否停止倒计时
  },

  countDownEnd: function () {
    console.log("倒计时结束")
    this.setData({
      countDownTarget: 5000,
    })
  },

  countDownStop: function () {
    console.log('倒计时暂停')
  },

  countDownRestart: function () {
    console.log('倒计时重启')
  },

  stopAndRestart: function () {
    this.setData({
      stopCountDown: !this.data.stopCountDown
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
})