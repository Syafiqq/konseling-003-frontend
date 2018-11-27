<template lang="pug">
  div
</template>

<script>

export default {
  name: 'CourseResultPage',
  props: {
    result: Object
  },
  data () {
    return {
      answer: null,
      disabled: false
    }
  },
  methods: {},
  computed: {
    isDisabled: function () {
      return this.disabled
    },
    cCategories () {
      return this.$props.result.categories || ''
    },
    cAnswers () {
      return this.$props.result.answers || []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
