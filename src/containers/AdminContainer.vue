<template lang="pug">
  extends ../partials/root.pug

  block header
    include ../partials/default-header.pug

  block sidebar
    include ../partials/default-sidebar.pug

  block main
    include ../partials/main-no-breadcrumb.pug

  block aside
    include ../partials/default-aside.pug

  block footer
    include ../partials/default-footer.pug
</template>

<script>
import {
  Aside as AppAside,
  AsideToggler,
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
import nav from '../scripts/utils/nav'
import EventBus from '../scripts/utils/event-bus'
import service from '../scripts/services/auth/logout-service'

export default {
  name: 'AdminContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
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
      disabled: false,
      first_sidebar_toggle: this.$cookies.get('navbar-toggle') == null ? true : this.$cookies.get('navbar-toggle') === 'true',
      first_aside_toggle: this.$cookies.get('aside-toggle') == null ? false : this.$cookies.get('aside-toggle') === 'false'
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    },
    isDisabled () {
      return this.disabled
    }
  },
  methods: {
    publish (m) {
      EventBus.$emit(m)
    },
    doLogout () {
      this.disabled = true
      service(null, null, () => {
        this.disabled = false
      })
    }
  }
}
</script>

<style scoped>

</style>
