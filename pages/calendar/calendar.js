// pages/calendar/calendar.js
const timeUtils = require("../../lee-components/utils/timeUtils.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lightingDayList:[], // 点亮的时间
  },

  /**
   * 选中时间
   */
  tapCalendarDay: function (e) {
    console.log("点击时间：\n" + JSON.stringify(e))
    let isLight = false;
    for (let i = 0; i < this.data.lightingDayList.length; i++) {
      let tempLightDay = this.data.lightingDayList[i];
      if (tempLightDay.day == e.detail.currentTarget.dataset.day
        && tempLightDay.month == e.detail.currentTarget.dataset.month
        && tempLightDay.year == e.detail.currentTarget.dataset.year) {
        this.data.lightingDayList.splice(i,1);
        isLight = true;

        this.setData({
          lightingDayList: this.data.lightingDayList
        })
        break;
      }
    }
    if (!isLight) {
      // warning 红色 | alert 黄色 | remind 蓝色 | complete 绿色 
      let tempData = {
        day: e.detail.currentTarget.dataset.day,
        month: e.detail.currentTarget.dataset.month,
        year: e.detail.currentTarget.dataset.year,
      }
      let that = this;
      wx.showActionSheet({
        itemList: ["warning", "alert", "remind", "complete"],
        success(res) {
          console.log(res.tapIndex)
          if (res.tapIndex == 0) {
            tempData.lightingType = 'warning'
          } else if (res.tapIndex == 1) {
            tempData.lightingType = 'alert'
          } else if (res.tapIndex == 2) {
            tempData.lightingType = 'remind'
          } else {
            tempData.lightingType = 'complete'
          }
          that.data.lightingDayList.push(tempData);
          that.setData({
            lightingDayList: that.data.lightingDayList
          })
        },
      })
    }
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

  }
})