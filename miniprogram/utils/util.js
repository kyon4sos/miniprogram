const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const func = async (name, data) => {
  console.log("loading");
  wx.showLoading({
    title: '加载中',
  })
  const res = await wx.cloud.callFunction({
    name: name,
    data: data
  })
  wx.hideLoading()
  return res
}
const getSystemInfo =  (that)=> {
  let app = getApp();
  if (app.globalData._SystemInfo&&app.globalData._rect) {
    return {sysInfo:app.globalData._SystemInfo,rect:app.globalData._rect}
  } else {
    let sysInfo = wx.getSystemInfoSync();
    let rect = wx.getMenuButtonBoundingClientRect();
    app.globalData._rect = rect
    app.globalData._SystemInfo = sysInfo
    that.setData({
      rect:rect,
      screenWidth:sysInfo.screenWidth,
      statusBarHeight:sysInfo.statusBarHeight
    })
    return {sysInfo,rect}
  }
}
module.exports = {
  formatTime: formatTime,
  func,
  getSystemInfo 
}
