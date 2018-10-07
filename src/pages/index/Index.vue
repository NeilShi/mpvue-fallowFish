<template>
  <div class="container">
      <div class="head" style="margin-bottom:1.5rem">
        <header-comp />
      </div>
      <IndexBanner></IndexBanner>
      <IndexGoods :iconList="iconList"></IndexGoods>
      <IndexTypes :typeList="typeList"></IndexTypes>
      <SmallBanner :smBanner="smBanner"></SmallBanner>
      <IndexNav :news="news" :nears="nears" :recoms="recoms"></IndexNav>
      <!--<NavButtom></NavButtom>-->

  </div>
</template>

<script>
// import { getIconlist } from '@/api/data'
import IndexGoods from '@/components/indexgoods/IndexGoods'
import IndexTypes from '@/components/indexTypes/IndexTypes'
// import NavButtom from '@/components/navbuttom/NavButtom'
import SmallBanner from '@/components/smallbanner/SmallBanner'
import IndexNav from '@/components/indexnav/IndexNav'
import IndexBanner from '@/components/indexbanner/IndexBanner'
import HeaderComp from '@/components/header/header-comp'

export default {
  name: 'App',
  components: {
    HeaderComp,
    IndexBanner,
    IndexGoods,
    IndexTypes,
    SmallBanner,
    IndexNav
    // NavButtom
  },
  data () {
    return {
      iconList: [],
      typeList: [],
      smBanner: [],
      news: [],
      nears: [],
      recoms: []
    }
  },
  created () {
    const url = 'https://www.easy-mock.com/mock/5b596a1c2d340a0cf1673504/fallowfish' + '/iconlist'
    let iconList = []
    wx.request({
      url: url,
      success (res) {
        iconList = res.data
      }
    })
    console.log(iconList)
    // getIconlist((res) => {
    //   if (res.statusCode === 200) {
    //     this.iconList = res.data
    //     console.log('icaoon: ', this.iconList)
    //   }
    // })
    // console.log(getIconlist())
    // getTypelist().then(res => {
    //   if (res.status === ERR_OK) {
    //     this.typeList = res.data.typelist
    //   }
    // })
    // getSmBanner().then(res => {
    //   if (res.status === ERR_OK) {
    //     this.smBanner = res.data.banner
    //   }
    // })
    // getIndexNav().then(res => {
    //   if (res.status === ERR_OK) {
    //     this.news = res.data.news
    //     this.nears = res.data.nears
    //     this.recoms = res.data.recoms
    //   }
    // })
  }
}
</script>
<style lang="stylus" scoped>
.container
    width 10rem
    height 100%
</style>
