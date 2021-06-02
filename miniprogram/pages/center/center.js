// miniprogram/pages/center/center.js
import create from '../../utils/create'
import store from '../../store/index'
import { func } from '../../utils/util.js'
create.Page(store,{
  use: [
    'isLogin',
    'userInfo',
    'barColor',
    'canIUse'
  ],
  data: {
  },
  onLoad: function (options) {
    this.checkFirstLogin()
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
  },
  
  async handleRegister() {
    try {
      const userInfo = await wx.getUserProfile({
        desc: "展示用户信息"
      })
      let res = await func('register', userInfo)
      this.initUserInfo(res.result)
    } catch (error) {
      console.log(err);
      wx.showToast({
        title: '请允许授权',
        icon: 'error',
        duration: 2000
      })
    }
  },
  async checkFirstLogin() {
    // const token = wx.getStorageSync('token')
    const res = await func('checkFirstLogin')
    if (res.result.code == 20001) {
      this.store.data.isLogin = false
    }
    if (res.result.code == 20000) {
      this.initUserInfo(res.result)
     this.store.data.isLogin = true
    }
  },
  async initUserInfo(data) {
    wx.setStorage({
      data: data.token,
      key: 'token',
    })
    this.store.data.userInfo = data.userInfo
    this.store.data.isLogin = true
  },
})