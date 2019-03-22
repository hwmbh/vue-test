import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/api/' : '/api/'// '//cgtadmin.tuandai888.com/api/'
// axios.defaults.timeout = 3000

/**
 * 钉钉登录方法，钉钉方ddLogin.js
 * @param a
 * @constructor
 */
let DDLogin = (a) => {
  let c = document.createElement('iframe')
  let d = 'https://login.dingtalk.com/login/qrcode.htm?goto=' + a.goto
    d += a.style ? '&style=' + encodeURIComponent(a.style) : ''
    d += a.href ? '&href=' + a.href : ''
    c.src = d
    c.frameBorder = '0'
    c.allowTransparency = 'true'
    c.scrolling = 'no'
    c.width = a.width ? a.width + 'px' : '365px'
    c.height = a.height ? a.height + 'px' : '400px'
  let ele = document.getElementById(a.id)
    ele.innerHTML = ''
    ele.appendChild(c)
}

/**
 * 回到登录页
 * @param app
 * @param msg
 */
let redirectLogin = (app, msg) => {
  app.$notify({
    message: msg,
    type: 'success'
  })
  app.$router.push({ path: '/login' })
}

/**
 * 下载文件
 * @param data
 * @param fileName
 */
let downloadFile = (data, fileName) => {
  const blob = new Blob([data])
  if ('msSaveOrOpenBlob' in navigator) {
    window.navigator.msSaveOrOpenBlob(blob, fileName)
    return
  }
  const elink = document.createElement('a')
  elink.download = fileName
  elink.style.display = 'none'
  elink.href = URL.createObjectURL(blob)
  document.body.appendChild(elink)
  elink.click()
  URL.revokeObjectURL(elink.href) // 释放URL 对象
  document.body.removeChild(elink)
}

/**
 * 日期快捷选择选项
 * @returns {{shortcuts: *[]}}
 */
let dateRangeOptions = () => {
  return {
    shortcuts: [{
      text: '最近一周',
      onClick (picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', [start, end])
      }
    }, {
      text: '最近一个月',
      onClick (picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        picker.$emit('pick', [start, end])
      }
    }, {
      text: '最近三个月',
      onClick (picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        picker.$emit('pick', [start, end])
      }
    }]
  }
}

/**
 * 日期格式化
 * @param date
 * @param fmt
 * @returns {*}
 */
let dateFormat = (date, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

export { axios, DDLogin, redirectLogin, downloadFile, dateRangeOptions, dateFormat }
