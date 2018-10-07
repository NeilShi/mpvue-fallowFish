export const HOST = 'https://www.easy-mock.com/mock/5b596a1c2d340a0cf1673504/fallowfish'

export const ERR_OK = 200

export function getSearchresult () {
  const url = HOST + '/search/results'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getCategory () {
  const url = HOST + '/category'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getIndexbanner () {
  const url = HOST + '/indexbanner'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getIconlist () {
  const url = HOST + '/iconlist'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getTypelist () {
  const url = HOST + '/typelist'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getSmBanner () {
  const url = HOST + '/smallbanner'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getIndexNav () {
  const url = HOST + '/indexnav'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getBanner () {
  const url = HOST + '/banner'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getInterests () {
  const url = HOST + '/interests'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}
export function getQuestions () {
  const url = HOST + '/questions'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getTuhao () {
  const url = HOST + '/tuhao'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getChina () {
  const url = HOST + '/china'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}

export function getLists () {
  const url = HOST + '/lists'
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success (res) {
        resolve(res)
      }
    })
  })
}
