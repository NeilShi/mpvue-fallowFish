<template>
  <swiper class="swiper" indicator-dots="true"
          autoplay="true" interval="5000" duration="1000">
    <block v-for="(item, index) in banner" :key="index">
      <swiper-item class="item">
        <image :src="item.src" class="image"/>
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
export default {
  props: {
    banner: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  height 4.8rem
  width 75%
  .item
    height 100%
    .image
      width 100%
      height 100%
</style>
