// components/modal/index.js
Component({
  observers: {
    'visible':function(val) {
      this.setData({
        _display:val
      })
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    visible:{
      type:Boolean,
      default:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _display:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick:function(e) {
      this.setData({
        _display:false
      })
      this.triggerEvent('click',e)
    },
    onClose: function (e) {
      var myEventDetail = e // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.setData({
        _display:false
      })
      this.triggerEvent('close', myEventDetail, myEventOption)
    }
  }
})