<template lang="pug">
  Page(v-bind:course="cCourse")
</template>

<script>
import guard from '../../scripts/http/guard/course/start-get-guard'
import updateGuard from '../../scripts/http/guard/course/start-get-guard-update'
import Page from '../../components/course/StartPage'
import EventBus from '../../scripts/utils/event-bus'

export default {
  name: 'Start',
  components: {
    Page
  },
  data () {
    return {
      course: {
        prev: null,
        current: null,
        next: null,
        question: null,
        options: {},
        summary: 0
      }
    }
  },
  methods: {
    setData (data) {
      this.course = data
      this.$store.commit('COURSE_NAVIGATION', data.navigation)
    }
  },
  computed: {
    cCourse () {
      return this.course
    }
  },
  mounted () {
    EventBus.$emit('app-ly-aside', 'aside-course')
  },
  async beforeRouteEnter (to, from, next) {
    await guard(to, from, next)
  },
  async beforeRouteUpdate (to, from, next) {
    await updateGuard(this, to, from, next)
  }
}
</script>

<style scoped>

</style>
