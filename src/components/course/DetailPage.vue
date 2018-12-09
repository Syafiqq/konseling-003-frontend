<template lang="pug">
  b-row
    b-col(md='12')
      b-card
        h3.mb-0(slot='header')
        div.center-text-align(slot='footer')
</template>

<script>

export default {
  name: 'CourseDetailPage',
  props: {
    student: Object
  },
  data () {
    return {}
  },
  methods: {},
  watch: {},
  computed: {}
}
</script>

<style scoped>

</style>
