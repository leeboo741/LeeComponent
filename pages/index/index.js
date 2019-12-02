//index.js
//获取应用实例
const app = getApp()

Page({
  
  data: {
    dataSource: [
      {
        name: "倒计时 -- leeCountDown",
        target: "/pages/countDown/countDown"
      },
      {
        name: "时间展示 -- leeShowTime",
        target: "/pages/showTime/showTime"
      },
      {
        name: "日历 -- leeCalendar",
        target: "/pages/calendar/calendar"
      },
      {
        name: "图标 -- leeIcon",
        target: "/pages/icon/icon"
      },
      {
        name: "通知 | 公告 -- leeNotice(未)",
        target: "/pages/notice/notice"
      },
      {
        name: "获取验证码按钮 -- leeGetVerifiCodeButton(未)",
        target: ""
      },
      {
        name: "自定义NavigationBar -- leeNavigationBar",
        target: "/pages/navigationBar/navigationBar"
      },
      {
        name: "电话 -- leePhoneCall(未)",
        target: "/pages/phoneCallButton/phoneCallButton"
      },
      {
        name: "带占位图Image -- leePlaceholdImage",
        target: "/pages/placeholdImage/placeholdImage"
      },
      {
        name: "loadmore底部item -- leeLoadingFootItem",
        target: "/pages/loadingFootItem/loadingFootItem"
      },
      {
        name: "进度条 -- leeProgress",
        target: "/pages/progress/progress"
      },
      {
        name: "图片选择和上传 -- leeImageUpload",
        target: "/pages/uploadImage/uploadImage",
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
