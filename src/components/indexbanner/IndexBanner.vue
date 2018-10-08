<template>
  <!--<div class="swiper-container" ref="swiperContainer">-->
    <!--<div class="swiper-wrapper swiper">-->
      <!--<div class="swiper-slide item" v-for="(item,index) in banner" :key="index">-->
        <!--<img :src="item.src" alt="">-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <swiper class="swiper" indicator-dots="true"
          autoplay="true" interval="5000" duration="1000">
    <block v-for="(item, index) in banner" :key="index">
      <swiper-item>
        <image :src="item.src" class="slide-image" width="55" height="350"/>
        <!--<img :src="item.src" alt="" class="image">-->
      </swiper-item>
    </block>
  </swiper>

  <!--<button bindtap="changeIndicatorDots"> indicator-dots </button>-->
  <!--<button bindtap="changeAutoplay"> autoplay </button>-->
  <!--<slider bindchange="intervalChange" show-value min="500" max="2000"/> interval-->
  <!--<slider bindchange="durationChange" show-value min="1000" max="10000"/> duration-->
</template>

<script>
// import 'swiper/dist/css/swiper.min.css'
// import { getIndexbanner } from '@/api/data'
export default {
  // data () {
  //   return {
  //     banner: []
  //   }
  // },
  props: {
    banner: {
      type: Array
    }
  },
  created () {
    // console.log('pass', this.banner)
    // getIndexbanner().then((res) => {
    //   if (res.statusCode === 200) {
    //     this.banner = res.data.banner
    //     console.log(this.banner)
    //     // this.$nextTick(() => {
    //     //   let swiperContainer = this.$refs.swiperContainer
    //     //   let mySwiper = new Swiper(swiperContainer, {
    //     //     autoplay: {
    //     //       delay: 2000
    //     //     },
    //     //     loop: true
    //     //   })
    //     // })
    //   }
    // })
  }
  // methods: {
  //   changeIndicatorDots: function (e) {
  //     this.setData({
  //       indicatorDots: !this.data.indicatorDots
  //     })
  //   },
  //   changeAutoplay: function (e) {
  //     this.setData({
  //       autoplay: !this.data.autoplay
  //     })
  //   },
  //   intervalChange: function (e) {
  //     this.setData({
  //       interval: e.detail.value
  //     })
  //   },
  //   durationChange: function (e) {
  //     this.setData({
  //       duration: e.detail.value
  //     })
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.swiper
  height 4.8rem
  .item
    height 100%
    img
      width 100%
      height 100%
</style>
