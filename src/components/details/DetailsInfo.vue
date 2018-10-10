<template>
  <p>sssssss</p>
</template>

<script>
    export default {
      data () {
        return {

        }
      },
      props: {
        news: {
          type: Object
        }
      },
      created () {
        console.log('details is created', this.news)
      }
    }
</script>

<style lang="stylus" scoped>
.container
  width 10rem
  background-color #f7f7f7
</style>
