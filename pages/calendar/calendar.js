// pages/calendar/calendar.js
const timeUtils = require("../../lee-components/utils/timeUtils.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lightingDayList:{}, // 点亮的时间
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
      }
    }
    if (!isLight) {
      let tempData = {
        day: e.detail.currentTarget.dataset.day,
        month: e.detail.currentTarget.dataset.month,
        year: e.detail.currentTarget.dataset.year,
        lightingType: "remind",
      }
      this.data.lightingDayList.push(tempData);
    }

    this.setData({
      lightingDayList: this.data.lightingDayList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tempDate1 = timeUtils.getDate(new Date(), 0, 0, 0, 1, 0, 0, 0);
    let tempDate2 = timeUtils.getDate(new Date(), 0, 0, 1, 0, 0, 0, 0);
    let tempDate3 = timeUtils.getDate(new Date(), 0, 0, 0, 3, 0, 0, 0);
    let tempDate4 = timeUtils.getDate(new Date(), 0, 0, 0, 5, 0, 0, 0);
    let tempDate5 = timeUtils.getDate(new Date(), 0, 1, 0, 0, 0, 0, 0);
    let tempDate6 = timeUtils.getDate(new Date(), 0, 0, 0, 8, 0, 0, 0);

    // warning 红色 | alert 黄色 | remind 蓝色 | complete 绿色 | default 灰色
    let tempData1 = {
      day: tempDate1.getDate(),
      month: tempDate1.getMonth() + 1,
      year: tempDate1.getFullYear(),
      lightingType: "warning",
    };
    let tempData2 = {
      day: tempDate2.getDate(),
      month: tempDate2.getMonth() + 1,
      year: tempDate2.getFullYear(),
      lightingType: "default",
    };
    let tempData3 = {
      day: tempDate3.getDate(),
      month: tempDate3.getMonth() + 1,
      year: tempDate3.getFullYear(),
      lightingType: "remind",
    };
    let tempData4 = {
      day: tempDate4.getDate(),
      month: tempDate4.getMonth() + 1,
      year: tempDate4.getFullYear(),
      lightingType: "complete",
    };
    let tempData5 = {
      day: tempDate5.getDate(),
      month: tempDate5.getMonth() + 1,
      year: tempDate5.getFullYear(),
      lightingType: "alert",
    };
    let tempData6 = {
      day: tempDate6.getDate(),
      month: tempDate6.getMonth() + 1,
      year: tempDate6.getFullYear(),
      lightingType: "alert",
    };
    let tempList = [];
    tempList = [tempData1, tempData2, tempData3, tempData4, tempData5, tempData6];

    this.setData({
      lightingDayList: tempList
    })
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