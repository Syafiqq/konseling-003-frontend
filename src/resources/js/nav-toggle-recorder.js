module.exports = function ($, cookies) {
  $(function () {
    $('.sidebar-minimizer').on('click', function () {
      if (cookies.get('sidebar-toggle') === false) {
        cookies.set('sidebar-toggle', true)
      } else {
        cookies.set('sidebar-toggle', false)
      }
    })
    $('.navbar-minimizer').on('click', function () {
      if (cookies.get('navbar-toggle') === false) {
        cookies.set('navbar-toggle', true)
      } else {
        cookies.set('navbar-toggle', false)
      }
    })
  })
}
