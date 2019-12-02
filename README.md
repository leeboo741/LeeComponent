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
  2019/07/31
 * 状态
  完成
 * 功能
  > 1. 展示日历，日期，星期，年份
  > 2. 日历标注，当日自有标注，并且相对放大，不接受样式改变，另有warning，alert，remind，complete 四种标注颜色可以进行标注
  > 3. 时间选择，可以选中标注和取消
  > 4. 添加子节点，(slot-day-item-empty | slot-calendar-footer)
  > 5. 可以进行月份调整 暂时没想好怎么做年份调整 和 别的时间选择 样式不好决定 所以先放着吧
  > 6. 接受外部样式（"i-class", "i-week-title-class", "i-day-item-empty-class", "i-day-item-class", "i-day-item-title-class", "i-day-item-lighting-class"）
  > 7. 接受传入 LightingDayObj （/calendarObj/LightingDayObj） 对象
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/calendar.png)
  
 ##### 图标icon LeeIcon
 * 时间
  2019/08/01
 * 状态
  完成
 * 功能
  > 1. 内置105个iconfont上的图标（具体请查看demo）
  > 2. type 样式 size 大小 color 颜色
  > 3. 接受外部样式（"i-class"）
  > 4. 接受自定义图标（"custome"）
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/icon.png)
  
  ##### 自定义NavigationBar LeeNavigationBar
 * 时间
  2019/09/04
 * 状态
  完成
 * 功能
  > 1. 使用自定义NavigationBar需要先在app.json => windows中添加 "navigationStyle": "custom"，并且会影响所有页面
  > 2. 可以自定义左侧自定义按钮的图标，目前仅支持leeIcon库中的图标
  > 3. 可以自定义中间区域的标题栏，可以使用自定义的其他控件或者View来代替
  > 4. 回退按钮目前默认调用navigationBack delta:1，在考虑要不要开放出来 自主选择回退方式
  > 5. 如果想做贯通式的抬头，可以尝试将背景颜色设置为透明色，ableFloat设置为true，正常页面流中的数据就会从最顶部贯通展示
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/navigationBar_1.png)
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/navigationBar_2.png)
  
  ##### 带placeholder的image LeePlaceholdImage
 * 时间
  2019/10/14
 * 状态
  完成
 * 功能
  > 1. 加载前显示占位图 placeholderSrc
  > 2. 加载后显示图片 imageSrc
  > 3. 加载失败显示失败图 failSrc
  > 4. 没有失败图显示占位图
  > 5. 支持mode lazyload 同 image 标签 mode lazy-load 属性
  > 6. 支持自定义 i-class
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/placeholderImage.png)
  
  ##### 加载更多时底部item LeeLoadFootItem 
 * 时间
  2019/10/16
 * 状态
  完成
 * 功能
  > 1. 传入loadState控制状态
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/loadFootItem.gif)
  
  ##### 加载进度条 LeeProgress 
 * 时间
  2019/11/28
 * 状态
  完成
 * 功能
  > 1. 四种样式 custom 自定义 | normal 正常 | success 成功 | wrong 警告 | error 错误 custom 接受自定义颜色
  > 2. ableActive 定义是否有动画效果
  > 3. showInfoStatus 默认展示进度数值
  > 4. 允许自定义子页面 header footer left right center  其中right left 和 showInfoStatus 冲突 showInfoStatus 展示权限更高
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/progress(1).jpg)
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/progress(2).jpg)
    
  ##### 图片选择和上传 LeeImageUpload
 * 时间
  2019/11/28
 * 状态
  待完成
 * 待完成项
  > 1. 视频的选择和上传
 * 功能
  > 1. 图片的选择和上传
  > 2. 传入 uploadUrl name formData 上传图片信息  可能需要微调 具体请查看代码内部注释
  > 3. 允许选择图片选择模式 selectImageMode 是覆盖选择 还是增量选择 cover append
  > 4. 是否展示删除按钮 ableDelete 权限和 selectImageMode append 冲突 已append 为主
  > 5. autoUpload 是否开启自动上传 为true 时  图片选择完成后 自动开始上传操作
  > 6. startUpload 图片上传开关 手动开启图片上传时 请传入true, 传入false 时 停止上传
  > 7. maxImageCount 最大图片选择数量
  
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/imageUpload(1).jpg)
  ![demo截图](https://github.com/leeboo741/ImageRepository/blob/master/WXLeeComponent/imageUpload(2).jpg)
  
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
