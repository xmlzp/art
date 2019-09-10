// pages/login/login.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: null,
    password: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  /**
   *手机号获取 
   */
  phoneBlur: function(res) {
    this.setData({
      phone: res.detail.value
    })
  },

  /**
   *密码获取 
   */
  passwordBlur: function(res) {
    this.setData({
      password: res.detail.value
    })
  },


  /**
   * 登录
   */
  login: function() {
    var that = this
    new app.WeToast();
    if (this.data.phone == null) {
      that.wetoast.toast({
        title: "请输入手机号",
        duration: 1000
      })
      return false
    }
    var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!phoneReg.test(this.data.phone)) {
      that.wetoast.toast({
        title: "手机号码不正确",
        duration: 1000
      })
      return false
    }

    if (this.data.password == null) {
      that.wetoast.toast({
        title: "请输入密码",
        duration: 1000
      })
      return false
    }
    
    // wx.request({
    //   url: '####',
    //   data:{},
    //   method: 'POST',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     wx.showToast({
    //       title: '提交成功',
    //       duration: 2000
    //     });
    //   }
    // })
   

  },

  /**
   * 注册
   */
   register:function(){
     wx.navigateTo({
       url: '../register/register',
     })
   }
})