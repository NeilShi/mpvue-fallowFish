<script>
  export default {
    created () {
      // 登录
      wx.login({
        success: res => {
          console.log('login!', res)
          this.$store.state.isLogin = true
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          // wx.request({
          //   url: 'http://localhost:9998/wechat/user/login',
          //   data: {
          //     code: res.code
          //   },
          //   success: function(res) {
          //     console.log("success")
          //   }
          // })
        }
      })
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.$store.state.username = res.userInfo.nickName
                this.$store.state.avatarUrl = res.userInfo.avatarUrl
                this.$store.state.userInfo = res.userInfo
                console.log('res.userInfo', res.userInfo)

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
    }
  }
</script>
