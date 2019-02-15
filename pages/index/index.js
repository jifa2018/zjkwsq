
Page({
  data: {
    background: [
      '../resource/banner/1.jpg',
      '../resource/banner/2.jpg', 
      '../resource/banner/3.jpg',
      '../resource/banner/4.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 1000,
    previousMargin: 0,
    nextMargin: 0,
    windowWidth:0,
    tipData:"围殴的收到回复深刻的回复撒地方哈，为士大夫收到回复收到回复很受打击发，水电开发和收到回复手机电话附件是的发士大夫123",
    viewleft:0,
    widthText:0,
  },
  onLoad:function(){
    var self = this; 
    wx.getSystemInfo({
      success(res) {
        // console.log(res.model)
        // console.log(res.pixelRatio)
         console.log(res.windowWidth)
        // console.log(res.windowHeight)
        // console.log(res.language)
        // console.log(res.version)
        // console.log(res.platform)
        self.setData({   //动态设置滚动图的width;
          windowWidth: res.windowWidth
        })
      }
    })

  }
})
