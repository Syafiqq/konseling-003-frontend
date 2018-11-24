<template lang="pug">
  Page(v-bind:profile="cProfile")
</template>

<script>
import guard from '../scripts/http/guard/profile-get-guard'
import Page from '../components/ProfilePage'

export default {
  name: 'Profile',
  components: {
    Page
  },
  data () {
    return {
      profile: {
        school: '',
        grade: ''
      }
    }
  },
  methods: {
    setData (data) {
      this.profile = data.profile
    }
  },
  computed: {
    cProfile () {
      return this.profile
    }
  },
  async beforeRouteEnter (to, from, next) {
    await guard(to, from, next)
  }
}
</script>

<style scoped>

</style>
