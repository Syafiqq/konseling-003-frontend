<template lang="pug">
  b-row
    b-col(md='12')
      b-card
        .form-group(v-for='option in cOptions')
          .pretty.p-default.p-smooth.font-xl
            input.form-control(type='radio', :value='option.id' v-model='answer')
            .state.p-info
              label {{option.description}}
        b-progress.mb-2(height='1.4rem', :max='100')
          b-progress-bar(:value='cProgress', variant='info', striped='', :animated='true')
            strong.text-dark {{cProgress.toFixed(2)}} %
        h3.mb-0(slot='header')
          strong {{cQuestion}}
        div.center-text-align(slot='footer')
          button.align-content-center.btn.btn-sm.float-left.px-4(:class="cPrevAvailable ? 'btn-primary' : 'btn-danger'" type='button', @click='doPrev' :disabled='!cPrevAvailable') Sebelumnya
          button.align-content-center.btn.btn-primary.px-4(type='button', @click='doAnswer' :disabled='isDisabled') Jawab
          button.align-content-center.btn.btn-sm.float-right.px-4(:class="cNextAvailable ? 'btn-primary' : 'btn-danger'" type='button', @click='doNext' :disabled='!cNextAvailable') Selanjutnya
</template>

<script>

export default {
  name: 'CourseStartPage',
  props: {
    course: Object
  },
  data () {
    return {
      answer: null,
      disabled: false
    }
  },
  methods: {
    doAnswer () {

    },
    doNext () {

    },
    doPrev () {

    }
  },
  computed: {
    isDisabled: function () {
      return this.disabled
    },
    cQuestion () {
      return this.course?.question?.question || ''
    },
    cOptions () {
      return this.course.options || []
    },
    cNextAvailable () {
      return this?.course?.next != null
    },
    cPrevAvailable () {
      return this?.course?.prev != null
    },
    cProgress () {
      return this?.course?.summary || 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
