// components/navbar-plus/navbar-plus.js
const computedBehavior = require('miniprogram-computed').behavior
import {getSystemInfo} from '../../utils/util'
Component({
  behaviors: [computedBehavior],
  lifetimes: {
    created: function () {
      let {sysInfo,rect} =getSystemInfo(this);
      console.log('created',sysInfo,rect);
      this.setData({
        statusBarHeight: sysInfo.statusBarHeight,
        rect:rect,
        screenWidth:sysInfo.screenWidth
      })
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("attached");
      let {sysInfo,rect} = getSystemInfo(this)
      this.setData({
        stateHeight: sysInfo.statusBarHeight,
        rect:rect,
        screenWidth:sysInfo.screenWidth
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  computed: {
    top: function(data) {
      return data.statusBarHeight
    },
    paddingLeft(data){
      return data.screenWidth- data.rect.right
    },
    height: function (data) {
      return data.rect.bottom + data.rect.top - data.statusBarHeight
    },
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    color:{
      type:String,
      default:"#ffffff"
    },
    bg:{
      type:String,
      default:'#ffffff'
    },
    back:{
      type:Boolean,
      default:false
    },
    title: {
      type: String,
      default: "",
    }
  },
  data: {
    // 这里是一些组件内部数据
    rect:{},
    statusBarHeight: 0,
    screenWidth:0,
  },
  methods: {
   onBack(){
     wx.navigateBack()
   }
  }
})