
Page({
  data: {
    // 被点击选中导航索引
    currentIndex: 0,
    // 首页导航数据
    navList:[],
    // 轮播图数据
    swiperList:[],
    // 视频列表数据
    videoList:[]
  },
  //点击首页导航按钮
  activeNav(e){
    this.setData({
      currentIndex:e.target.dataset.index
    })
  },
  // 获取导航数据
  getNavList(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList",
      success(res){
        console.log(res)
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  
  // 获取轮播数据
  getSwiperList(){
    let that=this
    wx.request({url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
    success(res){
      console.log(res)
      if(res.data.code===0){
        that.setData({
          swiperList:res.data.data.swiperList
        })
      }
    }
   })
  },
  // 获取视频列表数据
  getVideosList(){
    let that=this
    wx.request({url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
    success(res){
      console.log(res)
      if(res.data.code===0){
        that.setData({
          videoList:res.data.data.videosList
        })
      }
    }
  })
  },
  /*生命周期--监听页面加载*/
  onLoad:function (options) {
    // 获取首页导航数据
    this.getNavList()
    // this.activeNav()
    //获取轮播图数据
    this.getSwiperList()
    //获取视频列表数据
    this.getVideosList()
  }
})
  