//index.js
//获取应用实例
const app = getApp()

Page({
  
  data: {
    dataSource: [
      {
        name: "倒计时 -- leeCountDown",
        target: "../countDown/countDown"
      },
      {
        name: "时间展示 -- leeShowTime",
        target: "../showTime/showTime"
      },
      {
        name: "日历 -- leeCalendar",
        target: "../calendar/calendar"
      },
      {
        name: "图标 -- leeIcon",
        target: "../icon/icon"
      }
    ],
  },
  
  onLoad: function () {
    
  },

  tapRow: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.target,
    })
  },
})
