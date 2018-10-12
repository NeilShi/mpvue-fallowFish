<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">我发布的</div>
    </div>
    <div class="inputcontainer">
      <div class="inputdetail border-1px">
        <input type="text" v-model="title" placeholder="标题 品类品牌型号都是买家喜欢搜索的">
      </div>
      <div class="inputdetail border-1px">
        <input type="text" v-model="desc" placeholder="描述一下你的闲置">
      </div>
    </div>
    <div class="image-list">
      <div class="list-img" @click="addPic" v-if="hasPhoto">
        <img src="../../assets/images/相机.png" alt="">
        <span class="choosephoto">请选择或者拍照上传照片</span>
      </div>
      <ul class="list-ul" v-if="!hasPhoto">
        <li class="list-li" v-for="(url, index) in imgUrls" :key="index">
          <img :src="url" alt="">
          <span class="cancelimg" @click="delImage(index)"></span>
        </li>
        <li class="list-li-add">
          <span class="add-img" @click.stop="addPic"></span>
        </li>
      </ul>
    </div>
    <div class="goodinfo">
      <div class="border">
        <div class="topname">
            <span>开个价</span>
        </div>
      </div>
      <Price ref="price"></Price>
    </div>
    <div class="footer">
      <button class="fabu" @click="publish">确定发布</button>
      <mptoast />
    </div>
    <div class="category" ref="category">
    <div class="head">
      <div class="back" @click="hidden">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">类目</div>
    </div>
    <div class="wrapper">
      <div class="item border-1px" v-for= "(item,index) in category" :key="index" @click="selectItem(item)">{{item.name}}</div>
    </div>
  </div>
  </div>
</template>

<script>
import util from '../../assets/utils/utils.js'
// import lrz from 'lrz'
// import {getCategory} from '../../api/data.js'
import mptoast from 'mptoast'
import Price from '@/components/Price/Price'
export default {
  components: {
    Price,
    mptoast
  },
  data () {
    return {
      category: [],
      title: '',
      desc: '',
      hasPhoto: true,
      imgUrls: []
    }
  },
  watch: {
    imgUrls: 'showAddpic'
  },
  methods: {
    publish () {
      // console.log('ref test', this.$refs.price.oldPrice)
      let oldPrice = this.$refs.price.oldPrice
      let newPrice = this.$refs.price.newPrice
      if (this.title === '') {
        console.log('test mptoast')
        this.$mptoast('请输入发布的标题')
        return
      }
      if (this.desc === '') {
        this.$mptoast('描述一下宝贝吧')
        return
      }
      if (this.imgUrls === '') {
        this.$mptoast('上传几张宝贝图片吧~~如果无法上传，请确定是否开启拍照权限')
        return
      }
      if (newPrice === '') {
        this.$mptoast('请输入价格')
        return
      }
      if (oldPrice === '') {
        this.$mptoast('请输入原价')
        return
      }
      let obj = {}
      obj.title = this.title
      obj.desc = this.desc
      obj.imgUrls = this.imgUrls
      obj.newPrice = newPrice
      obj.oldPrice = oldPrice
      obj.del = true
      obj.time = util.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm')
      this.$store.dispatch('setFabunum')
      this.$store.dispatch('setFabuinfo', obj)
      this.$store.dispatch('setCurIndex', 4)
      console.log(this.$store.state)
      wx.navigateBack({
        delta: 2
      })
    },
    // selectItem (item) {
    //   this.kind = item.name
    //   this.hidden()
    // },
    showAddpic () {
      if (this.imgUrls.length >= 1) {
        this.hasPhoto = false
      } else {
        this.hasPhoto = true
      }
    },
    goBack () {
      wx.navigateBack({
        delta: 2
      })
    },
    delImage (index) {
      this.imgUrls.splice(index, 1)
    },
    addPic () {
      let that = this
      console.log('clicked!!')
      wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.imgUrls = that.imgUrls.concat(res.tempFilePaths)
          // console.log('that:', that)
          // upload(that, tempFilePaths)
        }
      })
    }
  //   noprice () {
  //     this.$toast('帖子仅能在鱼塘发布，你附近没有鱼塘，去别的地方转转吧~')
  //   }
  }
  // mounted () {
  //   getCategory().then(res => {
  //     if (res.statusCode === 200) {
  //       res.data.category.forEach(item => {
  //         this.category.push(item.name)
  //       })
  //     }
  //   })
  // }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.router-link-active
  border-radius .6rem
  height 1rem
  line-height 1rem
  background-color #ffda44
.container
  width 7.5rem
  height 100%
  .inputcontainer
    width 100%
    .inputdetail
      width 100%
      border-1px(#f8f8f8)
      input
        border none
        outline none
        width 100%
        height 1.3rem
        padding-left 0.3rem
        box-sizing border-box
        font-size 0.35rem
  .image-list
    width 100%
    height 100%
    background-color #f8f8f8
    .list-img
      display flex
      height 3.3rem
      flex-direction column
      align-items center
      justify-content center
      img
        width 1.3rem
        height 1.3rem
        display block
        margin-bottom 0.3rem
      .choosephoto
        font-size 0.35rem
        color #888888
    .list-ul
      width 100%
      height auto
      padding .3rem .3rem
      background-color #f8f8f8
      box-sizing border-box
      display flex
      flex 1
      list-style none
      flex-wrap wrap
      li
        width 25%
        height 1.3rem
        position relative
        margin-bottom 0.4rem
        img
          width 1.3rem
          height 1.3rem
        .cancelimg
          width 0.66rem
          height 0.66rem
          border-radius 50%
          display block
          background url('../../assets/images/X.png') no-repeat
          background-size cover
          position absolute
          top -0.23rem
          left -0.13rem
      .list-li-add
        display flex
        align-items center
        justify-content flex-start
        .add-img
          width 1.3rem
          height 1.3rem
          display block
          border 1px solid #333333
          background url('../../assets/images/加.png') no-repeat
          background-size 1rem 1rem
          background-position center

  .goodinfo
    width 100%
    margin-top 0.3rem
    padding-top 0.3rem
    box-sizing border-box
    margin-bottom 1.8rem
    .border
      width 90%
      margin 0 auto
      border 1px solid #f3f3f3
      border-radius .6rem
      height 1.3rem
      .topname
        display flex
        height 1.3rem
        align-items center
        justify-content center
        flex 1
        .item
          width 30%
          text-align center
          color #000000
          font-size 0.3rem

  .footer
    width 100%
    box-sizing border-box
    padding .2rem .2rem
    /*position fixed*/
    /*bottom 0*/
    height 1.8rem
    display flex
    align-items center
    justify-content center
    background-color #fff
    .fabu
      width 100%
      height 100%
      outline none
      border none
      color #ffffff
      background-color red
  .category
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 100
    background-color #f7f7f7
    width 100%
    height 100%
    display none
    .wrapper
      width 100%
      height 22rem
      overflow-y scroll
      .item
        width 100%
        padding-left 0.3rem
        box-sizing border-box
        border-1px(#f1f1f1)
        height 1.5rem
        line-height 1.5rem
        font-size 0.3rem
        color #333333



.head
  position relative
  background-color #f3f3f3
  width 100%
  height 1.6rem
  display flex
  justify-content center
  align-items center
  .back
    position absolute
    left .2rem
    top .4rem
    width 1rem
    height 1rem
    img
      width .8rem
      height .8rem
  .title
    font-size .4rem
    font-weight 700
</style>
