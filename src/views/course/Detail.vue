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
      student: {}
    }
  },
  methods: {
    setData (data) {
      console.log(data)
      this.student = data
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
