<template lang="pug">
  .dashboard
    b-row
      b-col(md='12')
        b-card
          ol
            li Bacalah pernyataan dengan cermat dan teliti
            li Pilih salah satu pilihan jawaban yang sesuai dengan keadaan diri Anda.
            li Isilah semua pernyataan, jangan sampai ada pernyataan yang kosong.
            li
              | Teliti kembali pekerjaan Anda sebelum anda mengumpulkan hasil pengerjaan dengan mengklik menu
              strong  Selesai.
            li
              | Inventori ini tidak memengaruhi nilai akademik apapun, jadi pilihlah jawaban yang benar-benar menggambarkan diri Anda..
          hr
          p
            strong Pilihan Jawaban beserta Keterangan :
          dl.row
            dt.col-sm-3.text-right Sangat Sesuai
            dd.col-sm-9 : Apabila item pernyataan sangat mencerminkan kondisi diri anda.
            dt.col-sm-3.text-right Sesuai
            dd.col-sm-9 : Apabila item pernyataan cukup mencerminkan kondisi diri anda.
            dt.col-sm-3.text-right Kurang Sesuai
            dd.col-sm-9 : Apabila item pernyataan kurang mencerminkan kondisi diri anda.
            dt.col-sm-3.text-right Tidak Sesuai
            dd.col-sm-9 : Apabila item pernyataan tidak mencerminkan kondisi diri anda.
          h3.mb-0(slot='header') Selamat Datang
          div(slot='footer')
            div(v-if="course_status === 0")
              router-link.btn.btn-primary.px-4(:to="{name:'course-start', params:{id:1}}", tag='button', type='button')
                | Lanjutkan Sebelumnya
            div(v-else-if="course_status === 1")
              button.btn.btn-primary.px-4(@click='doStart', type='button', :disabled='isDisabled')
                | Mulai Baru
            div(v-else='')
              | Anda Tidak Diperkenankan Mengerjakan, Silahkan Hubungi Konselor Anda.

</template>

<script>
import start from '../scripts/services/dashboard-start-service'

export default {
  name: 'DashboardPage',
  props: {
    course_status: Number
  },
  data () {
    return {
      disabled: false
    }
  },
  computed: {
    isDisabled: function () {
      return this.disabled
    }
  },
  methods: {
    doStart () {
      this.disabled = true
      start(() => {
        this.$router.push({ name: 'course-start', params: { id: 1 } })
      }, null, () => {
        this.disabled = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
