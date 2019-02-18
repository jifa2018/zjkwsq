Page({
  data: {
    background: [
      '../resource/banner/1.jpg',
      '../resource/banner/2.jpg',
      '../resource/banner/3.jpg',
      '../resource/banner/4.jpg'
    ],
    retui:[
      '沟通吧v夫人通过比你还要通吧v夫人通过比你还要',
      '美军还有不过他人妇v吃的通吧v夫人通过比你还要',
      '请按照我是邪恶的吃软饭v通吧v夫人通过比你还要',
      '立刻脚后跟范德萨额威威日通吧v夫人通过比你还要',
      '破iu一头热的发射点我'
    ],
    toutiao:[
      '我饿大风降温开始了反倒是四点六九',
      '网盘的金额德里克收到通吧v夫人通过比你还要 ',
      '陪读而设计的收到回复十点零分v通吧v夫人通过比你还要',
      '我是已额的开始二u丰厚的是',
      '围殴第三方撒地方哈第三方',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 1000,
    previousMargin: 0,
    nextMargin: 0,
    windowWidth: 0,
    tipData: "围殴的收到回复深刻的回复撒地方哈，为士大夫收到回复收到回复很受打击发，",
    viewleft: 0,
    widthText: 0,
    fontSize: 14,
    animation:{},
    isScroll:true,
  },
  noticedetail:function(event){
    console.log("进入详情页")
  },
  onShow: function() {
    var self = this;
  },
  onLoad: function() {
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
        self.setData({ //动态设置滚动图的width;
          windowWidth: res.windowWidth
        })
      }
    })
  }
})