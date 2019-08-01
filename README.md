# LeeComponent
 微信小程序 组件库 lee-components 导入项目使用
 
 ### 目的
 1. 学习And练习微信小程序组件开发
 2. 解决日常开发中没有合用组件的问题
 3. 重新整理之前的一些微信小程序代码，减少代码冗余
 
 ### 组件目录
 ##### 倒计时 LeeCountDown
 * 时间：
  2019/07/19
 * 状态：
  完成
 * 功能：
  > 1. 中止|重新开始 （stopCountDown）
  > 2. 重新设置倒计时时间（target）
  > 3. 倒计时 （target）
  > 4. 监听中止，重新开始，结束 （bind:countdown-stop | bind:countdown-restart | bind:countdown-end）
  > 5. 接受外部样式（i-class)
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/countDown.png)
  
 ##### 时间展示 LeeShowTime
 * 时间
  2019/07/22
 * 状态
  完成
 * 功能
  > 1. 展示指定时间
  > 2. 接受时间格式指定 年（y）月（M）日（d）时（H|h）分（m）秒（s）毫秒（S）周（E）
  > 3. 接受外部样式 （i-class）
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/showTime.png)
  
 ##### 日历 LeeCalendar
 * 时间
  2019/07/23
 * 状态
  完成
 * 功能
  > 1. 展示日历，日期，星期，年份
  > 2. 日历标注，当日自有标注，并且相对放大，不接受样式改变，另有warning，alert，remind，complete 四种标注颜色可以进行标注
  > 3. 时间选择，可以选中标注和取消
  > 4. 添加子节点，(slot-day-item-empty | slot-calendar-footer)
  > 5. 可以进行月份调整 暂时没想好怎么做年份调整 和 别的时间选择 样式不好决定 所以先放着吧
  > 6. 接受外部样式（"i-class", "i-week-title-class", "i-day-item-empty-class", "i-day-item-class", "i-day-item-title-class", "i-day-item-lighting-class"）
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/calendar.png)
  
 ##### 图标icon LeeIcon
 * 时间
  2019/08/01
 * 状态
  完成
 * 功能
  > 1. 内置87个iconfont上的图标
  > 2. type 样式 size 大小 color 颜色
  > 3. 接受外部样式（"i-class"）
  > 4. 接受自定义图标（"custome"）
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/icon.png)
  
  ### 工具目录
  ##### 时间工具包 TimeUtils
  > 1. getDate() 
  >> 传入 目标时间 相差的年 月 日 时 分 秒 周 获取 结果日期
  > 2. dateFormat()
  >> 传入 目标时间 和 时间格式 获取 格式化时间字符串 年（y）月（M）日（d）时（H|h）分（m）秒（s）毫秒（S）周（E）
  > 3. getStartDayForMonth()
  >> 传入 目标时间 获取 当月 第一天
  > 4. getEndDayForMonth()
  >> 传入 目标时间 获取 当月 最后一天
  > 5. getDayCountForMonth()
  >> 传入 目标时间 获取 当月 天数
