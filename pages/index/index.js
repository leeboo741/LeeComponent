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
      },
      {
        name: "通知 | 公告 -- leeNotice",
        target: "../notice/notice"
      },
      {
        name: "获取验证码按钮 -- leeGetVerifiCodeButton",
        target: ""
      },
      {
        name: "自定义NavigationBar -- leeNavigationBar",
        target: "../navigationBar/navigationBar"
      },
      {
        name: "电话 -- leePhoneCall",
        target: "../phoneCallButton/phoneCallButton"
      },
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
