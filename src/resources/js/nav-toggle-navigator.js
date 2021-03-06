module.exports = function (document, cookies) {
  if (!document.body.classList.contains('sidebar-fixed sidebar-lg-show')) {
    if (cookies != null) {
      if (cookies.get('sidebar-toggle') == null) {
      } else if (cookies.get('sidebar-toggle') === 'true') {
        document.body.classList.remove('brand-minimized')
        document.body.classList.remove('sidebar-minimized')
      } else {
        document.body.classList.add('brand-minimized')
        document.body.classList.add('sidebar-minimized')
      }
      if (cookies.get('navbar-toggle') == null) {
      } else if (cookies.get('navbar-toggle') === 'false') {
        document.body.classList.remove('sidebar-lg-show')
      } else {
        document.body.classList.add('sidebar-lg-show')
      }
      if (cookies.get('aside-toggle') == null) {
      } else if (cookies.get('aside-toggle') === 'false') {
        document.body.classList.remove('aside-menu-lg-show')
      } else {
        document.body.classList.add('aside-menu-lg-show')
      }
    }
  } else {
    document.body.classList.remove('brand-minimized')
    document.body.classList.remove('sidebar-minimized')
    document.body.classList.remove('aside-menu-lg-show')
  }
}
