<template lang="pug">
  .landing-page
    header.masthead.text-white.text-center
      .overlay
      .container
        .row
          .col-xl-9.mx-auto
            img.img-fluid.mb-3(src='../assets/img/landing-page/logo.png', alt='')
          .col-xl-9.mx-auto#title-0001
            .mb-5.text-md-center
              |  Aplikasi Inventori
              span.animated.rotating
                i  Nilai Moral Truthfulness
              |  Bagi Siswa SMP
          .col-md-10.col-lg-8.col-xl-7.mx-auto(v-if='!isLoggedIn')
            .form-row
              .col-4.col-md-4.offset-4
                button.btn.btn-block.btn-lg.btn-outline-primary.hero-border.hero-bg.hero-fg(@click="proceedRegister") MULAI SEKARANG!
    section.features-icons.bg-light.text-center
      .container
        .row
          .col-md-12
            h1.section-title NILAI MORAL TRUTHFULNESS
            .section-title-divider
            h2.section-description Penjelasan teoritis dan operasional atas konsep nilai moral Truthfulness
        .row.mt-5
          .col-lg-5
            img.img-fluid.mb-3(src='../assets/img/landing-page/images.jpg', alt='')
          .col-lg-6.offset-1
            p.text-left
              | Purwadarminta dalam Kamus Umum Bahasa Indonesia menerangkan bahwa kebenaran (truthfulness) adalah 1) Keadaan (hal dan sebagainya) yang benar (cocok dengan hal atau keadaan yang sesungguhnya. 2) Sesuatu yang benar (sungguh-sungguh ada, betul-betul hal demikian halnya, dan sebagainya). 3) Kejujuran, kelurusan hati. Menurut Ozar nilai khas moral yang ada dimasyarakat yang berfungsi sebagai bentuk kebenaran dalam berkomunikasi. Dalam jurnal penelitiannya Ozar memfokuskan pada membahas mengenai pentingnya moral atau kebenaran komunikatif yang dapat ditemukan dalam pemahaman kita tentang konsep ketulusan dan kejujuran.
            p.text-left
              | Kebenaran komunikatif seseorang terhadap orang lain sangat erat hubungannya dengan pembentukan kebenaran komunikatif dari budaya kita. Salah satu kebenaran komunikatif yang disebutkan oleh Ozar adalah ketulusan. Ketulusan merupakan suatu keyakinan dari dalam hati kita. Seperti halnya dengan ketulusan, Jujur merupakan sikap hati dalam berperilaku sesuai dengan keyakinan dan nilai yang ada pada dirinya.
            p.text-left
              | Dalam jurnalnya yang berjudul &ldquo;The Values of Truth and the Truth of Values&rdquo; Lycnh menjelaskan bahwa salah satu nilai dalam Truthfulness adalah kebenaran sebagai norma kepercayaan yang merupakan salah satu nilai moral individu ketika mempercayai sesuatu mereka menganggap bahwa itu benar. Dan kebenaran merupakan tujuan individu untuk dapat mempercayai sesuatu.
    header.masthead1.text-white.text-center
      .overlay
      .container
        .row
          .col-md-12
            h3.subscribe-title Mulai Menggunakan Aplikasi
            p.subscribe-text
              | Aplikasi ini akan menjaga privasi pengguna dengan adanya akun, sehingga setiap pengguna Aplikasi ini wajib memiliki akun untuk menggunakn Aplikasi ini.
          .col-md-10.col-lg-8.col-xl-7.mx-auto(v-if='!isLoggedIn')
            .form-row
              .col-12.col-md-9.mb-2.mb-md-0
                input.form-control.form-control-lg(type='email', placeholder='Tuliskan NISN Anda', v-model='authPass.credential')
              .col-12.col-md-3
                button.btn.btn-block.btn-lg.btn-primary(@click="proceedRegister") Masuk!
    section.showcase
      .container-fluid.p-0
        .row.mt-5
          .col-md-12.text-center
            h1.section-title PROFIL PENGEMBANG
            .section-title-divider
            br
            h2.section-description Dosen dan Asisten Dosen Pembimbing
        .row.m-5.align-items-center
          .col-lg-3.text-center
            img.img-thumbnail.img-fluid.rounded-circle.mb-3(width=250, src='../assets/img/landing-page/prof.jpg', alt='')
            h4 Prof. Dr. Hj. Nur Hidayah, M.Pd
            span Dosen Pembimbing
          .col-lg-9
            .card.align-middle
              .card-body
                p.card-text
                  .quote
                    img(src='../assets/img/landing-page/quote_sign_left.png', alt='')
                    strong
                      |  Lahir di Gresik, 17 Agustus 1959 dan Bertempat tinggal di Perum Permata Hijau D/57, Kota Malang. Memiliki Hobby Membaca dan Motto &ldquo; Be Your Self&rdquo;. Telah selesai menempuh Pendidikan S-1 jurusan Bimbingan dan Konseling dan sedang menyelesaikan studi S-2 Bimbingan dan Konseling Universitas Negeri Malang
                    img(src='../assets/img/landing-page/quote_sign_right.png', alt='')
                    br
                    br
                    i.far.fa-envelope
                    |  : nur.hidayah.fip@gmail.com
                    br
                    i.fas.fa-phone
                    |  : 082132852538
        .row.m-5.align-items-center
          .col-lg-9
            .card.align-middle
              .card-body
                p.card-text
                  .quote
                    img(src='../assets/img/landing-page/quote_sign_left.png', alt='')
                    strong
                      |  Lahir di Samarinda, 20 Juni 1993 dan Bertempat tinggal di Jl. K. H. Wahid Hasyim No.52 Rt. 08 Samarinda, Kalimantan Timur. Memiliki Hobby Traveling dan Motto “Untuk mendapatkan kesuksesan, keberanianmu harus lebih besar daripada ketakutanmu”. Telah selesai menempuh Pendidikan S-1 jurusan Bimbingan dan Konseling dan sedang menyelesaikan studi S-2 Bimbingan dan Konseling di Universitas Megeri Malang
                    img(src='../assets/img/landing-page/quote_sign_right.png', alt='')
                    br
                    br
                    i.far.fa-envelope
                    |  : yunistia.tia@gmail.com
                    br
                    i.fas.fa-phone
                    |  : 0895637859644
          .col-lg-3.text-center
            img.img-thumbnail.img-fluid.rounded-circle.mb-3(width=250, src='../assets/img/landing-page/b.jpg', alt='')
            h4 Yunistia Prahastini, S. Pd
            span Asisten Dosen Pembimbing
        .row.mt-5
          .col-md-12.text-center
            h2.section-description Tim Pengembang Inventory
              i Truthfulness
        .row.m-5.align-items-center
          .col-lg-3.text-center
            img.img-thumbnail.img-fluid.rounded-circle.mb-3(width=250, src='../assets/img/landing-page/1.jpg', alt='')
            h4 Ananda Riskiya Nur Isnaini
            span Mahasiswa
          .col-lg-9
            .card.align-middle
              .card-body
                p.card-text
                  .quote
                    img(src='../assets/img/landing-page/quote_sign_left.png', alt='')
                    strong
                      |  Lahir di Bondowoso, 23 November 1998 dan Bertempat tinggal di Jl. Tamanan Grujugan Lor Jambesari, Bondowoso. Memiliki Hobby Travelling dan Motto “DUIT (Do’a Usaha Ikhtiar Tawakal)”.
                    img(src='../assets/img/landing-page/quote_sign_right.png', alt='')
                    br
                    br
                    i.far.fa-id-card
                    |  : 170111600016
                    br
                    i.far.fa-envelope
                    |  : anandarizkiyaa@gmail.com
                    br
                    i.fas.fa-phone
                    |  : 089656764704
        .row.m-5.align-items-center
          .col-lg-9
            .card.align-middle
              .card-body
                p.card-text
                  .quote
                    img(src='../assets/img/landing-page/quote_sign_left.png', alt='')
                    strong
                      |  Lahir di Malang, 04 Agustus 1998 dan Bertempat tinggal di Jl. Sultan Agung (Sempol) Rt. 01 Rw. 05 Singosari, Malang. Memiliki Hobby Mencari Hal Baru dan Motto “Insya Allah Nothing is Impossible”.
                    img(src='../assets/img/landing-page/quote_sign_right.png', alt='')
                    br
                    br
                    i.far.fa-id-card
                    |  : 170111600020
                    br
                    i.far.fa-envelope
                    |  : ovitadewi4@gmail.com
                    br
                    i.fas.fa-phone
                    |  : 089681006152
          .col-lg-3.text-center
            img.img-thumbnail.img-fluid.rounded-circle.mb-3(width=250, src='../assets/img/landing-page/2.jpg', alt='')
            h4 Ovita Dewi Sandra Wati
            span Mahasiswa
        .row.m-5.align-items-center
          .col-lg-3.text-center
            img.img-thumbnail.img-fluid.rounded-circle.mb-3(width=250, src='../assets/img/landing-page/3.jpg', alt='')
            h4 Yustina Novi Erniasari
            span Mahasiswa
          .col-lg-9
            .card.align-middle
              .card-body
                p.card-text
                  .quote
                    img(src='../assets/img/landing-page/quote_sign_left.png', alt='')
                    strong
                      |  Lahir di Kediri ,08 November 1998 dan Bertempat tinggal di Jl.Nakula, Dsn. Brenjuk, Desa Purwodadi RT 02 RW 02 Kecamatan Kras, Kab. Kediri. Memiliki Hobby Travelling dan membaca, serta memiliki Motto “Man Shobaro Zafiro (Siapa yang bersabar akan beruntung)”.
                    img(src='../assets/img/landing-page/quote_sign_right.png', alt='')
                    br
                    br
                    i.far.fa-id-card
                    |  : 170111600116
                    br
                    i.far.fa-envelope
                    |  : yustinanovierniasari@gmail.com
                    br
                    i.fas.fa-phone
                    |  : 085708614773
    section.testimonials.text-center.bg-light
      .container
        h2.mb-5 Tim Pengembang Aplikasi
        .row
          .col-lg-6
            .testimonial-item.mx-auto.mb-8.mb-lg-0
              img.img-fluid.rounded-circle.mb-3(src='../assets/img/landing-page/s.png', alt='')
              h5 Muhammad Syafiq, S.Kom
              p.font-weight-light.mb-0
                |  Lahir di Pasuruan, 16 Desember 1993 dan beralamat di Jl. Apel I No. 449 Bangil, Pasuruan. Memiliki Motto "Hidup Seperti LARRY, Hidup Seperti LARRY". Telah menyelesaikan Pendidikan S-1 Teknik Informatika di Universitas Brawijaya.
          .col-lg-6
            .testimonial-item.mx-auto.mb-8.mb-lg-0
              img.img-fluid.rounded-circle.mb-3(src='../assets/img/landing-page/h.jpg', alt='')
              h5 Husni Hanafi, M.Pd
              p.font-weight-light.mb-0
                |  Lahir di Pasuruan, 19 Juni 1994 dan beralamat di Jl. Suro No. 40 Bangil, Pasuruan. Memiliki Motto "Berdamai Dengan Kecewa". Telah menyelesaikan Pendidikan S-2 Bimbingan dan Konseling di Universitas Negeri Malang.
</template>

<script>
import service from '../scripts/services/auth/logout-service'

export default {
  name: 'LandingPage',
  data () {
    return {
      disabled: false,
      authPass: {
        credential: ''
      }
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.token != null
    },
    isDisabled () {
      return this.disabled
    }
  },
  methods: {
    doLogout () {
      this.disabled = true
      service(null, null, () => {
        this.disabled = false
      })
    },
    proceedRegister () {
      this.$store.commit('PUSH_AUTH_DATA_PASSING', { ...this.authPass })
      this.$router.push({ name: 'auth-login' })
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
@import "../resources/scss/landing-page/landing-page";

.showcase-3 {
  background-image: url('~@/assets/img/landing-page/bg-showcase-3.jpg');
}

.showcase-2 {
  background-image: url('~@/assets/img/landing-page/bg-showcase-2.jpg');
}

.showcase-1 {
  background-image: url('~@/assets/img/landing-page/bg-showcase-1.jpg');
}
</style>
<style scoped lang="css">
.hero-bg:hover {
  background: #bb16b6
}

.hero-fg {
  color: #48032c;
}

.hero-border {
  border-color: #48032c;
}
</style>
