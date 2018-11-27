<template lang="pug">
  Page(v-bind:result="cResult")
</template>

<script>
import guard from '../../scripts/http/guard/course/result-get-guard'
import Page from '../../components/course/ResultPage'

export default {
  name: 'Result',
  components: {
    Page
  },
  data () {
    return {
      result: {}
    }
  },
  methods: {
    setData (data) {
      this.result = data
    }
  },
  computed: {
    cResult () {
      return this.result
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
