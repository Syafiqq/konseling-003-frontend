<template lang="pug">
  b-row
    b-col(md='12')
      b-card
        .row
          .col-12
            table#table-0.display.table.table-responsive-sm(style='width: 100%')
              thead
                tr
                  th.header-correction
                  th.header-correction
                  th.header-correction
                  th(v-for='i in cCategories').header-correction
                  th.header-correction
                tr
                  th No
                  th Mulai
                  th Berakhir
                  th.text-center(v-for='c in cCategories')
                    | {{c.name}}
                  th.text-center Aksi
              tbody
                tr(v-for='(ans, index) in cAnswers')
                  td {{index+1}}
                  td {{ans.started_at}}
                  td {{isFinish(ans) ? ans.finished_at : 'Tahap Pengerjaan'}}
                  td.text-center(v-for='c in cCategories') {{isFinish(ans) ? `${ans.result[c.id].result} %`: '-'}}
                  td.text-center
                    router-link.btn.btn-block.btn-link.px-0(:to="{name:'course-result-detail', params:{id:ans.id}}", type='button', tag='button') Detail
              tfoot
                tr
                  th No
                  th Mulai
                  th Berakhir
                  th.text-center(v-for='c in cCategories')
                    | {{c.name}}
                  th.text-center Aksi
        .row.mt-3
          .col-sm-12
            h4 Keterangan
            dl.row
              template(v-for='c in cCategories')
                dt.col-sm-3.text-right {{c.name}}
                dd.col-sm-9 : {{c.description}}
        h3.mb-0(slot='header')
          strong Hasil
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
  methods: {
    isFinish (answer) {
      return (answer.finished_at || null) != null
    }
  },
  mounted () {
    this.$nextTick(function () {
      (function ($) {
        $(function () {
          $('#table-0').DataTable()
        })
      })(window.$)
    })
  },
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
.table thead tr:nth-child(1) th:nth-child(1) {
  width: 40px;
}

.table thead tr:nth-child(1) th:nth-child(2) {
  width: 150px;
}

.table thead tr:nth-child(1) th:nth-child(3) {
  width: 150px;
}

.table thead tr:nth-child(1) th:nth-child(4) {
  width: 150px;
}

.table thead tr:nth-child(1) th:nth-child(5) {
  width: 150px;
}

.table thead tr:nth-child(1) th:nth-child(6) {
  width: 150px;
}

.table thead tr:nth-child(1) th:nth-child(7) {
  width: 150px;
}

.table thead tr:nth-child(1) th:nth-child(8) {
  width: 150px;
}

.table thead tr:nth-child(1) th:nth-child(9) {
  width: 150px;
}

.table thead tr:nth-child(1) th:nth-child(10) {
  width: 150px;
}

</style>
