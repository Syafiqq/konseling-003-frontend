<template lang="pug">
  Page(v-bind:course_status="courseStatus")
</template>

<script>
import guard from '../scripts/http/guard/dashboard-get-guard'
import Page from '../components/DashboardPage'

export default {
  name: 'Dashboard',
  components: {
    Page
  },
  data () {
    return {
      course_status: 2
    }
  },
  methods: {
    setData (data) {
      this.course_status = data.course_status
    }
  },
  computed: {
    courseStatus () {
      return this.course_status
    }
  },
  async beforeRouteEnter (to, from, next) {
    await guard(to, from, next)
  }
}
</script>

<style scoped>

</style>
