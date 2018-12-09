<template lang="pug">
  Page(v-bind:student="cStudent")
</template>

<script>
import guard from '../../scripts/http/guard/course/detail-get-guard'
import Page from '../../components/course/DetailPage'

export default {
  name: 'Detail',
  components: {
    Page
  },
  data () {
    return {
      student: {
        student: {
          school: '',
          grade: ''
        },
        name: '',
        credential: '',
        gender: '',
        f_gender: '',
        answer: [{
          f_finished_at: '',
          accumulation: 0,
          analytics: {}
        }]
      }
    }
  },
  methods: {
    setData (data) {
      this.student = data.student || {}
    }
  },
  computed: {
    cStudent () {
      return this.student
    }
  },
  mounted () {
  },
  async beforeRouteEnter (to, from, next) {
    await guard(to, from, next)
  },
  async beforeRouteUpdate (to, from, next) {
  }
}
</script>

<style scoped>

</style>
