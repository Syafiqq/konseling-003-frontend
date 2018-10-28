module.exports = function (window) {
  window.makeId = function (length) {
    let text = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
  }

  window.makeObjectId = function (obj, len) {
    let result = {}
    for (let i = -1, is = obj.length; ++i < is;) {
      result[window.makeId(len)] = obj[i]
    }
    return result
  }

  window.clone = function (obj) {
    let copy = {}

    // Handle the 3 simple types, and null or undefined
    if (obj == null) return obj

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date()
      copy.setTime(obj.getTime())
      return copy
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = []
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = window.clone(obj[i])
      }
      return copy
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {}
      for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = window.clone(obj[attr])
      }
      return copy
    }

    return obj
  }
}
