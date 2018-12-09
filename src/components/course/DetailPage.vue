<template lang="pug">
  b-row
    b-col(md='12')
      b-card
        .row
          .col-sm-12
            .row.vertical-align
              .col-sm-12
                .row.vertical-align
                  .col-sm-12.text-center
                    p.margin-bottom-4(style='margin-top: 12px;font-weight: bold; font-size: 16px')
                      | &nbsp;LAPORAN INVENTORI
                      i &nbsp;TRUTHFULNESS
                      | &nbsp;SISWA SMA
                .row
                  .col-sm-12
                .row.vertical-align
                  .col-sm-1
                  .col-sm-2.text-left
                    p Nama
                  .col-sm-3.p-0
                    p : {{this.cStudent.name || '-'}}
                  .col-sm-2.text-left
                    p Sekolah
                  .col-sm-3
                    p : {{this.cStudent.student.school || '-'}}
                .row.vertical-align
                  .col-sm-1
                  .col-sm-2.text-left
                    p NIS
                  .col-sm-3.p-0
                    p : {{this.cStudent.credential || '-'}}
                  .col-sm-2.text-left
                    p Jenis Kelamin
                  .col-sm-3
                    p : {{this.cStudent.f_gender || '-'}}
                .row.vertical-align
                  .col-sm-1
                  .col-sm-2.text-left
                    p Kelas
                  .col-sm-3.p-0
                    p : {{this.cStudent.student.grade || '-'}}
                  .col-sm-2.text-left
                    p Pengisian
                  .col-sm-3
                    p : {{this.cStudent.answer[0]['f_finished_at'] || 0}}
                .row
                  .col-sm-1
                  .col-sm-10.text-center
                    p(style='font-weight: bold; font-size: 16px; margin: 8px') HASIL ANALISA
                    p(style='text-align: justify')
                      |  Berdasarkan pengisian inventori
                      i  Truthfulnesss
                      b  {{this.cStudent.name || '-'}}
                      |  memiliki tingkat kejujuran
                      b  {{this.cStudent.answer[0]['accumulation'].toFixed(2)  || 0}}
                      |  % dan termasuk dalam klasifikasi
                      b  {{this.cStudentClass == null ? null : this.cStudentClass['class'] || '-'}}
                .row
                  .col-sm-12
                .row
                  .col-sm-1
                  .col-sm-10
                    table.table
                      thead
                        tr
                          th.text-center(width='200')
                            b Interval Persentase
                          th.text-center(width='200')
                            b Klasifikasi
                          th.text-center
                            b Interpretasi
                      tbody
                        tr(v-for="analytic in cStudent.answer[0]['analytics']" v-if="cStudent.answer[0]['accumulation'] > analytic.guard.min && cStudent.answer[0]['accumulation'] <= analytic.guard.max")
                          td.text-center
                            b {{analytic.interval || '-'}}
                          td.text-center
                            b {{analytic.class || '-'}}
                          td
                            b {{analytic.description.key || '-'}}
                            br
                            |  {{analytic.description.value || '-'}}
                    p(v-html="cStudentClass == null ? null : cStudentClass['recommendation'].replace('$$0', cStudent.name) || '-'")
                .row
                  .col-sm-1
                  .col-sm-10.text-left
                    p(style='margin: 4px; font-size: 16px;')
        h3.mb-0(slot='header')
          |  Detail
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
  methods: {
    _ () {
      return window._
    }
  },
  watch: {},
  computed: {
    cStudent () {
      return this.$props.student || {}
    },
    cStudentClass () {
      let k = this._().findKey(this.cStudent.answer[0]['analytics'], (o) => this.cStudent.answer[0]['accumulation'] > o.guard.min && this.cStudent.answer[0]['accumulation'] <= o.guard.max)
      if (k == null || this.cStudent.answer[0]['analytics'].length <= 0) {
        return null
      } else {
        return this.cStudent.answer[0]['analytics'][k]
      }
    }
  }
}
</script>

<style scoped>

</style>
