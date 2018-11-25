<template lang="pug">
  div.p-3
    h3.text-center.mb-3
      | Navigasi
    .row(v-for='i in range(1, cNavCounter+1, 1)')
      .col-2.text-right
        small {{1 + ((i - 1) * 5)}}
      .col-8.justify-content-center.text-center
        .pretty.p-default.p-fill.p-toggle(v-for='j in range(((i - 1) * 5), (((i - 1) * 5) + 5), step=1)', :class="j < cNavigation.length ? 'visible' : 'invisible'")
          input(type='checkbox', checked='', v-if='j < cNavigation.length')
          .state.p-on(:class="j < cNavigation.length ? cNavigation[j].status === 0 ? 'p-default' : (cNavigation[j].status === 1 ? 'p-primary' : 'p-success') : 'p-default'")
            label
          .state.p-off(:class="j < cNavigation.length ? cNavigation[j].status === 0 ? 'p-default' : (cNavigation[j].status === 1 ? 'p-primary' : 'p-success') : 'p-default'")
            label
      .col-2.text-left
        small {{i * 5}}
</template>

<script>
export default {
  name: 'CourseAside',
  data () {
    return {
      navigation: []
    }
  },
  methods: {
    range (s, e, t) {
      return window._.range(s, e, t)
    }
  },
  computed: {
    cNavigation () {
      return this.navigation
    },
    cNavCounter () {
      return Math.ceil(this.cNavigation.length / 5.0) || 1
    }
  },
  mounted () {
    this.$store.watch(this.$store.getters.gCourseNavigation, nav => {
      this.navigation = nav
    })
  }
}
</script>

<style scoped>
.pretty {
  margin-left: 4px;
  margin-right: 4px;
}

.col-8, .col-2 {
  padding-left: 0;
  padding-right: 0;
}
</style>
