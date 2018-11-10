<template lang="pug">
  .app
    app-header(fixed)
      sidebar-toggler.d-lg-none(display='md' mobile)
      b-link.navbar-brand(href='javascript:void(0)')
        img.navbar-brand-full(src='../assets/img/logo.png', width='30', height='30', alt='Konseling')
        img.navbar-brand-minimized(src='../assets/img/logo.png', width='30', height='30', alt='Konseling')
      sidebar-toggler.navbar-minimizer.d-md-down-none(:defaultOpen='toggle_na' display='lg')
      b-navbar-nav.ml-auto
        b-nav-item.d-md-down-none(href='javascript:void(0)')
          i.fas.fa-music
        b-nav-item.d-md-down-none(href='javascript:void(0)')
          i.fas.fa-power-off
    .app-body
      app-sidebar(fixed)
        sidebar-header
        sidebar-form
        sidebar-nav(:navItems='nav')
        sidebar-footer
        sidebar-minimizer
      main.main
        breadcrumb(:list='list')
        .container-fluid
      app-aside(fixed='')
    the-footer
      div
        a(href='https://coreui.io') CoreUI
        span.ml-1 &copy; 2018 creativeLabs.
      .ml-auto
        span.mr-1 Powered by
        a(href='https://coreui.io') CoreUI for Vue
</template>

<script>
import {
  Aside as AppAside,
  AsideToggler,
  Breadcrumb,
  Footer as TheFooter,
  Header as AppHeader,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  SidebarToggler
} from '@coreui/vue'
import nav from '../nav'

export default {
  name: 'Dashboard',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items,
      toggle_na: this.$cookies.get('navbar-toggle') === 'true'
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    }
  }
}
</script>

<style scoped>

</style>
