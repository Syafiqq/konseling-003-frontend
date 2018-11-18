import EventBus from '../../scripts/utils/event-bus'

EventBus.$on('nav-sidebar-minimizer', window.sidebar_minimizer)
EventBus.$on('nav-navbar-minimizer', window.navbar_minimizer)
