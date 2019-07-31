// pages/calendar/calendar.js
const timeUtils = require("../../lee-components/utils/timeUtils.js")
const {LightingDayObj} = require('../../lee-components/leeCalendar/calendarObj.js')
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
    let tempDay = e.detail.currentTarget.dataset.day;
    let tempMonth = e.detail.currentTarget.dataset.month;
    let tempYear = e.detail.currentTarget.dataset.year;
    // 判断是否点亮 点亮就取消
    for (let i = 0; i < this.data.lightingDayList.length; i++) {
      let tempLightDayObj = this.data.lightingDayList[i];
      if (tempLightDayObj.compareDateSame(tempYear, tempMonth, tempDay)) {
        this.data.lightingDayList.splice(i, 1);
        isLight = true;
        this.setData({
          lightingDayList: this.data.lightingDayList
        })
        break;
      }
    }
    // 没有点亮 弹窗 选择点亮方式
    if (!isLight) {
      let that = this;
      wx.showActionSheet({
        itemList: ["warning", "alert", "remind", "complete"],
        success(res) {
          console.log(res.tapIndex)
          let tempData = new LightingDayObj(tempYear, tempMonth, tempDay);
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