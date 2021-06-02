import {
  func
} from "../../utils/util";

// components/swiper.js
Component({
  lifetimes: {
    attached: function () {
      this.swip();
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    druation: {
      type: Number,
      default: 3,
    },
    imgs: {
      type: Array,
      default: []
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    translateX: 100,
    current: 0,
    druation: 1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swip: function () {
      let cur = 0
      setInterval(() => {
        cur++;
        if (cur > this.properties.imgs.length - 1) {
          cur = 0
          this.setData({
            druation: 0,
            current: cur
          })
        } else {
          this.setData({
            current: cur,
            druation: 1
          })
        }
      }, 4000)
    },
  }
})