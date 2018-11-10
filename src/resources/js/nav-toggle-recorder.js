module.exports = function (container, $, cookies) {
  container.sidebar_minimizer = () => {
    if (cookies.get('sidebar-toggle') === 'false') {
      cookies.set('sidebar-toggle', true)
    } else {
      cookies.set('sidebar-toggle', false)
    }
  }
  container.navbar_minimizer = () => {
    if (cookies.get('navbar-toggle') === 'false') {
      cookies.set('navbar-toggle', true)
    } else {
      cookies.set('navbar-toggle', false)
    }
  }
  $(function () {
    $('.sidebar-minimizer').on('click', container.sidebar_minimizer)
    $('.navbar-minimizer').on('click', container.sidebar_minimizer)
  })
}
