export const onSuccess = async (message) => {
  const info = useInfo()
  if (info.value !== '') return
  info.value = message
  setTimeout(() => {
    info.value = ''
  }, 3000)
}
export const onError = async (message) => {
  const error = useErr()
  if (error.value !== '') return
  error.value = message
  setTimeout(() => {
    error.value = ''
  }, 3000)
}

export const zeroPadding = (num, len) => {
  return (Array(len).join("0") + num).slice(-len)
}

export const dateFormat = (date, format, week) => {
  if (!format) format = 'YYYY-MM-DD hh:mm:ss'
  format = format.replace(/YYYY/g, date.getFullYear())
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
  format = format.replace(/M/g, date.getMonth() + 1)
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2))
  format = format.replace(/D/g, date.getDate())
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2))
  format = format.replace(/h/g, date.getHours())
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2))
  if (format.match(/S/g)) {
    var milliSeconds = ('00' + date.getMilliseconds()).slice(-3)
    var length = format.match(/S/g).length
    for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1))
  }
  if (week) {
    var dayOfWeek = date.getDay()
    var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek]
    format += `（${ dayOfWeekStr }）`
  }
  return format
}

export const dateDisplay = (date) => {
  if (date) {
    if (typeof date.getMonth === 'function') {
      var date = date
    } else if (typeof date.toDate === 'function') {
      var date = date.toDate()
    } else if (typeof date._seconds === 'number') {
      var seconds = date._seconds
      var t = new Date(1970, 0, 1)
      t.setSeconds(seconds);
      var date = t
    } else {
      var date = new Date(date)
    }
    return `${date.getFullYear()}年${zeroPadding(
      date.getMonth() + 1,
      2
    )}月${zeroPadding(date.getDate(), 2)}日`
  } else {
    return;
  }
}

export const splitLineWords = (html) => {
  var lineArray = html.split('<br>')
  var returnHTML = ''
  var amari = 0
  lineArray.forEach((r, index) => {
    var content = splitWords(r, amari)
    amari += r.length
    returnHTML += `<span class="inout line">${content}</span>`
    if (index !== lineArray.length - 1) {
      returnHTML += "<br>"
    }
  })
  return returnHTML;
}

function splitWords(word, amari) {
  var amari = amari ? amari : 0
  var text = ""
  for (var i = 0; i < word.length; i++) {
    const oneWord = word.substr(i, 1)
    if (oneWord !== " ") {
      text += `<span class="w w${i + 1 + amari} wr${word.length - i}">${oneWord}</span>`
    } else {
      text += `<span class="w">&nbsp;</span>`
    }
  }
  return text
}

export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
export const isSet = (data) => {
  if (data === "" || data === null || data === undefined) {
    return false
  } else {
    return true
  }
}

export const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
  return regex.test(email)
}

export const loadingStart = () => {
  const loading = useLoading()
  loading.value = true
}

export const loadingEnd = () => {
  const loading = useLoading()
  loading.value = false
}

export const comma = (num) => {
  if (num === '' || num === undefined || isNaN(num)) return ''
  const numberWithComma = new Intl.NumberFormat()
  const numStr = String(num)

  return numberWithComma.format(numStr)
}

export const getRandomeID = () => {
  // 生成する文字列の長さ
  var l = 12;
  // 生成する文字列に含める文字セット
  var c = "abcdefghijklmnopqrstuvwxyz0123456789";
  var cl = c.length;
  var r = "";
  for (var i = 0; i < l; i++) {
    r += c[Math.floor(Math.random() * cl)];
  }
  return r;
}

export const now = () => {
  const date = new Date()
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const h = date.getHours()
  const i = date.getMinutes()
  const s = date.getSeconds()
  return `${ y }-${ zeroPadding(m, 2) }-${ zeroPadding(d, 2) } ${ zeroPadding(h, 2) }:${ zeroPadding(i, 2) }:${ zeroPadding(s, 2) }`
}
