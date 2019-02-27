//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    list: [],
    msgList: [],
    interval: 2000,
    duration: 1000,
    indicatorColor: "rgba(0,0,0,.2)",
    indicatorActiveColor: "#fff",
    navbarActiveIndex: 0,
    navbarTitle: [
      "名师推荐",
      "视频课程",
      "试卷资料"
    ]
  },
  onNavBarTap: function (e) {
    console.log(e);
    // 获取点击的navbar的index
    let navbarTapIndex = e.currentTarget.dataset.navbarIndex;
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex,    
    })
  },
  onBindAnimationFinish: function (e) {
    console.log(e);
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: e.detail.current
    })
  },
  loadMore:function(){
    wx.request({
      url:"http://127.0.0.1:3000/imageList",
      success:(res)=>{
        this.setData({
          list:res.data,
        });
        console.log(res.data);
      }
    })
  },
  loadMsg:function(){
    wx.request({
      url:"http://127.0.0.1:3000/msgList",
      success:(res)=>{
        this.setData({
          msgList:res.data,
        });
      }
    })
  },
  onLoad:function(){
    // 生命周期函数--监听页面加载
    this.loadMore();
    this.loadMsg();
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    // return {
    //   title: 'title', // 分享标题
    //   desc: 'desc', // 分享描述
    //   path: 'path' // 分享路径
    // }
  }
})



// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
