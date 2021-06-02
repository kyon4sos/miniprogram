export default {
  data: {
    barColor:'#f3aee1',
    isLogin:false,
    userInfo: {
      point:0,
      nickName:'游客',
      avatarUrl:'https://6e6f-note-9gpvzagz1944b75f-1258879474.tcb.qcloud.la/no_login.png?sign=ac432f4daa0348425c955f7455caddea&t=1622533016'
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: []
  },
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  debug: true
}