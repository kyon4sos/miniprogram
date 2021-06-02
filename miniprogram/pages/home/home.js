// miniprogram/pages/home/home.js
import store from '../../store/index'
import create from '../../utils/create'
import {
  getSystemInfo
} from '../../utils/util'
create.Page(store, {
  use: [
    'isLogin',
    'userInfo',
    'hasUserInfo',
    'canIUse',
    'barColor'
  ],
  data: {
    width: 100,
    visible: true,
    search: '',
    top: 44,
    navs: [{
        icon: "../../images/1.png",
        title: '文章'
      },
      {
        icon: "../../images/2.png",
        title: '推荐'
      },
      {
        icon: "../../images/1.png",
        title: '圈子'
      },
      {
        icon: "../../images/2.png",
        title: '关注'
      }
    ],
    imgs: [{
      src: "https://lfyfly.gitee.io/vue-basic-components/live-demos/static/carousel-imgs/1.jpg"
    }, {
      src: "https://lfyfly.gitee.io/vue-basic-components/live-demos/static/carousel-imgs/2.jpg"
    }, {
      src: "https://lfyfly.gitee.io/vue-basic-components/live-demos/static/carousel-imgs/3.jpg"
    }, {
      src: "https://lfyfly.gitee.io/vue-basic-components/live-demos/static/carousel-imgs/4.jpg"
    }, {
      src: "https://lfyfly.gitee.io/vue-basic-components/live-demos/static/carousel-imgs/5.jpg"
    }, {
      src: "https://lfyfly.gitee.io/vue-basic-components/live-demos/static/carousel-imgs/1.jpg"
    }, ]
  },
  onClick: function () {
    this.setData({
      visible: true
    })
  },
  onModalClick() {
    wx.showToast({
      title: '报名成功',
      icon: 'success',
      duration: 2000
    })
  },
  onChange(val){
      console.log(val.detail);
      let color =[]
      for(let i =0;i<3;i++) {
        let c =  Math.random()*255
        color.push(c)
      }
      this.store.data.barColor= `rgb(${color.toString()})`
  } ,
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onPageScroll(e) {
    if (e.scrollTop > 30) {
      this.setData({
        top: 0,
        width: 65
      })
    }
    if (e.scrollTop < 30) {
      this.setData({
        top: 40,
        width: 100
      })
      return
    }
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