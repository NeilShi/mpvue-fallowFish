<template>
  <div class="container">
      <div class="head" style="margin-bottom:1.5rem">
        <header-comp />
      </div>
      <IndexBanner :banner="banner"></IndexBanner>
      <IndexGoods :iconList="iconList"></IndexGoods>
      <IndexTypes :typeList="typeList"></IndexTypes>
      <SmallBanner :smBanner="smBanner"></SmallBanner>
      <IndexNav :news="news" :nears="nears" :recoms="recoms"></IndexNav>
      <!--<NavButtom></NavButtom>-->
  </div>
</template>

<script>
import { getIconlist, getTypelist, getSmBanner, getIndexNav, getIndexbanner } from '@/api/data'
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
      banner: [],
      typeList: [],
      smBanner: [],
      news: [],
      nears: [],
      recoms: []
    }
  },
  created () {
    let imgStr = '../.'
    getIconlist().then(res => {
      if (res.statusCode === 200) {
        this.iconList = res.data.iconlist
        console.log(this.iconList)
      }
    })
    getIndexbanner().then(res => {
      if (res.statusCode === 200) {
        this.banner = res.data.banner
        // fix img src bug
        this.banner.forEach(item => {
          item.src = imgStr + item.src
        })
        console.log(this.banner)
      }
    })
    getTypelist().then(res => {
      if (res.statusCode === 200) {
        this.typeList = res.data.typelist
      }
    })
    getSmBanner().then(res => {
      if (res.statusCode === 200) {
        this.smBanner = res.data.banner
      }
    })
    getIndexNav().then(res => {
      if (res.statusCode === 200) {
        this.news = res.data.news
        this.nears = res.data.nears
        this.recoms = res.data.recoms
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
.container
    width 10rem
    height 100%
</style>
