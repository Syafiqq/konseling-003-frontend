import EventBus from '../../event-bus'

EventBus.$on('nav-sidebar-minimizer', window.sidebar_minimizer)
EventBus.$on('nav-navbar-minimizer', window.navbar_minimizer)
