<template lang="pug">
  include ../partials/default-admin-partial.pug
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
import EventBus from '../event-bus'

export default {
  name: 'AdminContainer',
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
      first_toggle: this.$cookies.get('navbar-toggle') == null ? true : this.$cookies.get('navbar-toggle') === 'true'
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    }
  },
  methods: {
    publish (m) {
      EventBus.$emit(m)
    }
  }
}
</script>

<style scoped>

</style>
