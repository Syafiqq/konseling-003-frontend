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
                    p#content_welcome.margin-bottom-4(style='margin-top: 12px;font-weight: bold; font-size: 16px')
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
        h3.mb-0(slot='header')
          strong Detail
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
  computed: {
    cStudent () {
      return this.$props.student || {}
    }
  }
}
</script>

<style scoped>

</style>
