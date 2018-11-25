<template lang="pug">
  div.p-3
    h3.text-center.mb-3
      | Navigasi
    .row(v-for='i in range(1, cNavCounter+1, 1)')
      .col-2.text-right
        small {{1 + ((i - 1) * 5)}}
      .col-8.justify-content-center.text-center
        .pretty.p-default.p-fill.p-toggle(v-for='j in range(((i - 1) * 5), (((i - 1) * 5) + 5), step=1)', :class="j < cNavigation.length ? 'visible' : 'invisible'")
          input(type='checkbox', @click="doNavigate(j + 1)", checked='', v-if='j < cNavigation.length')
          .state.p-on(:class="j < cNavigation.length ? (cNavigation[j].status === 2 ? 'p-success' : (cNavigation[j].status === 1 ? 'p-primary' : 'p-warning')) : 'p-warning'")
            label
          .state.p-off(:class="j < cNavigation.length ? (cNavigation[j].status === 2 ? 'p-success' : (cNavigation[j].status === 1 ? 'p-primary' : 'p-warning')) : 'p-warning'")
            label
      .col-2.text-left
        small {{i * 5}}
    .row.mt-5
      .col-sm-12
        button.align-content-center.btn.btn-sm.float-right.px-4(:class="cNextAvailable ? 'btn-primary' : 'btn-danger'" type='button', @click='doNext' :disabled='!cNextAvailable') Selanjutnya
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
    },
    doNavigate (idx) {
      this.$router.push({ name: 'course-start', params: { id: idx } })
    },
    doNext () {
      this.doNavigate(this.$router.currentRoute.params.id + 1)
    }
  },
  computed: {
    cNavigation () {
      return this.navigation || []
    },
    cNavCounter () {
      return Math.ceil(this.cNavigation.length / 5.0) || 1
    },
    cNextAvailable () {
      return this.$router.currentRoute.params.id < this.cNavigation.length
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
