<template>
  <div class="footer">
    <div class="item item2" :class="{icon11: footerIndex ===0,icon1: footerIndex !== 0}" @click="tohome">闲鱼</div>
    <div class="item item2" :class="{icon22: footerIndex === 1, icon2: footerIndex !== 1}" @click="toyutang">鱼塘</div>
    <div class="item item1">
      <div class="outbox">
        <a href="../../pages/sell/main">
        <span class="open"></span>
        </a>
      </div>
      <p class="commit">发布</p>
    </div>
    <div class="item item2" :class="{icon44: footerIndex === 3, icon4: footerIndex !== 3}">
      <a href="../../pages/my/main">消息</a>
    </div>
    <div class="item item2" :class="{icon55: footerIndex === 4, icon5: footerIndex !== 4}">
      <a href="../../pages/my/main">我的</a>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      footerIndex: 0,
      active: false
    }
  },
  computed: {
    // ...mapGetters([
    //   'login'
    // ])
  },
  mounted () {
    this.active = false
    this.$store.dispatch('hasLogin')
    this.footerIndex = this.$store.state.curIndex
  },
  methods: {
    tohome () {
      this.$store.dispatch('setCurIndex', 0)
      this.$router.push({
        path: '/'
      })
    },
    toyutang () {
      this.$store.dispatch('setCurIndex', 1)
      this.$router.push({
        path: '/yutang'
      })
    }
  }

}
</script>

<style lang="stylus" scoped>
  .footer
    z-index 500
    width 7.5rem
    display flex
    height 1.6rem
    position fixed
    bottom 0
    left 0
    border-top 1px solid #ccc
    background-color #fff
    .item
      width 100%
      height 100%
      color #888888
      font-size 0.3rem
      text-align center
      &.icon1
        background: url('../../assets/images/home.png') no-repeat center 25%;
        background-size: .8rem;
      &.icon11
        background: url('../../assets/images/home1.png') no-repeat center 25%;
        background-size: .8rem;
      &.icon2
        background: url('../../assets/images/yutang.png') no-repeat center 25%;
        background-size: .8rem;
      &.icon22
        background: url('../../assets/images/yutang1.png') no-repeat center 25%;
        background-size: .8rem;
      &.icon4
        background: url('../../assets/images/message.png') no-repeat center 25%;
        background-size: .8rem;
      &.icon44
        background: url('../../assets/images/meaasge1.png') no-repeat center 25%;
        background-size: .8rem;
      &.icon5
        background: url('../../assets/images/my.png') no-repeat center 25%;
        background-size: .8rem;
      &.icon55
        background: url('../../assets/images/my1.png') no-repeat center 25%;
        background-size: .8rem;
      &.item2
        line-height 2.5rem
      &.item1
        padding-bottom 0.8rem
        box-sizing border-box
        position relative
        display flex
        flex-direction column
        justify-content center
        .outbox
          width 1.3rem
          height 1.3rem
          border-radius 50%
          background-color #fff
          margin 0.15rem auto
          display block
          position relative
          z-index 500
          .open
            width 1.2rem
            height 1.2rem
            display block
            border-radius 50%
            margin 0.1rem auto
            background: #ffda44 url('../../assets/images/加.png') no-repeat;
            background-size .8rem .8rem
            background-position 50% 50%

</style>
