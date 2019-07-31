/**
 * 点亮 对象 
 * 
 * @param year 年
 * @param month 月
 * @param day 日
 * @param lightingType 点亮类型 default 灰色 | warning 红色 | alert 黄色 | remind 蓝色 | complete 绿色 
 */
var LightingDayObj = function (year, month, day, lightingType) {
  this.day = day;
  this.month = month;
  this.year = year;
  if (lightingType != null) {
    this.lightingType = lightingType;
  } else {
    this.lightingType = "default";
  }
}

/**
 * 点亮对象 方法
 * @function 比较日期是否相同 
 */
LightingDayObj.prototype = {
  compareDateSame: function (year, month, day) {
    if (this.year != year) {
      return false;
    }
    if (this.month != month) {
      return false;
    }
    if (this.day != day) {
      return false;
    }
    return true;
  },
}

module.exports = {
  LightingDayObj: LightingDayObj, // 点亮
}