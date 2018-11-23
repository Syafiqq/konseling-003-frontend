<template lang="pug">
  .animated.fadeIn
    b-row
      b-col(md='12')
        b-card(header='Dashboard' footer='Dashboard')
          | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</template>

<script>
import guard from '../scripts/http/guard/dashboard-guard'

export default {
  name: 'Dashboard',
  data () {
    return {
      course_status: 2
    }
  },
  methods: {
    setData: (data) => {
      this.course_status = data.course_status
    }
  },
  async beforeRouteEnter (to, from, next) {
    await guard(to, from, next)
  },
}
</script>

<style scoped>

</style>
