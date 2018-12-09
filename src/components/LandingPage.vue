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
        .row.m-3.align-items-center
          .col-lg-3.text-center
            img.img-thumbnail.img-fluid.rounded-circle.mb-3(width=250, src='../assets/img/landing-page/prof.jpg', alt='')
            h4 Prof. Dr. Hj. Nur Hidayah, M.Pd
            span Dosen Pembimbing
          .col-lg-9
            .card.align-middle
              .card-body
                p.card-text
                  .quote
                    b
                      img(src='../assets/img/landing-page/quote_sign_left.png', alt='')
                    |  Lahir di Gresik, 17 Agustus 1959 dan Bertempat tinggal di Perum Permata Hijau D/57, Kota Malang. Memiliki Hobby Membaca dan Motto &ldquo; Be Your Self&rdquo;. Telah selesai menempuh Pendidikan S-1 jurusan Bimbingan dan Konseling dan sedang menyelesaikan studi S-2 Bimbingan dan Konseling Universitas Negeri Malang
                    b
                      img(src='../assets/img/landing-page/quote_sign_right.png', alt='')
                    br
                    br
                    |  email: nur.hidayah.fip@gmail.com
                    br
                    |  phone: 082132852538
        .row.no-gutters
          .col-lg-6.order-lg-2.text-white.showcase-img.showcase-1
          .col-lg-6.order-lg-1.my-auto.showcase-text
            h2 Fully Responsive Design
            p.lead.mb-0
              | When you use a theme created by Start Bootstrap, you know that the theme will look
              | great on any device, whether it&apos;s a phone, tablet, or desktop the page will behave responsively!
        .row.no-gutters
          .col-lg-6.text-white.showcase-img.showcase-2
          .col-lg-6.my-auto.showcase-text
            h2 Updated For Bootstrap 4
            p.lead.mb-0
              | Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in
              | mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!
        .row.no-gutters
          .col-lg-6.order-lg-2.text-white.showcase-img.showcase-3
          .col-lg-6.order-lg-1.my-auto.showcase-text
            h2 Easy to Use &amp; Customize
            p.lead.mb-0
              | Landing Page is just HTML and CSS with a splash of SCSS for users who demand some
              | deeper customization options. Out of the box, just add your content and images, and your new landing page
              | will be ready to go!
    section.testimonials.text-center.bg-light
      .container
        h2.mb-5 What people are saying...
        .row
          .col-lg-4
            .testimonial-item.mx-auto.mb-5.mb-lg-0
              img.img-fluid.rounded-circle.mb-3(src='../assets/img/landing-page/testimonials-1.jpg', alt='')
              h5 Margaret E.
              p.font-weight-light.mb-0 &quot;This is fantastic! Thanks so much guys!&quot;
          .col-lg-4
            .testimonial-item.mx-auto.mb-5.mb-lg-0
              img.img-fluid.rounded-circle.mb-3(src='../assets/img/landing-page/testimonials-2.jpg', alt='')
              h5 Fred S.
              p.font-weight-light.mb-0
                | &quot;Bootstrap is amazing. I&apos;ve been using it to create lots of super nice
                | landing pages.&quot;
          .col-lg-4
            .testimonial-item.mx-auto.mb-5.mb-lg-0
              img.img-fluid.rounded-circle.mb-3(src='../assets/img/landing-page/testimonials-3.jpg', alt='')
              h5 Sarah W.
              p.font-weight-light.mb-0 &quot;Thanks so much for making these free resources available to us!&quot;
    // Call to Action
    section.call-to-action.text-white.text-center
      .overlay
      .container
        .row
          .col-xl-9.mx-auto
            h2.mb-4 Ready to get started? Sign up now!
          .col-md-10.col-lg-8.col-xl-7.mx-auto(v-if='!isLoggedIn')
            .form-row
              .col-12.col-md-9.mb-2.mb-md-0
                input.form-control.form-control-lg(type='email', placeholder='Tuliskan NISN Anda', v-model='authPass.credential')
              .col-12.col-md-3
                button.btn.btn-block.btn-lg.btn-primary(@click="proceedRegister") Daftar!
    // Footer
    footer.footer.bg-light
      .container
        .row
          .col-lg-6.h-100.text-center.text-lg-left.my-auto
            ul.list-inline.mb-2
              li.list-inline-item
                a(href='javascript:void(0)') About
              li.list-inline-item &sdot;
              li.list-inline-item
                a(href='javascript:void(0)') Contact
              li.list-inline-item &sdot;
              li.list-inline-item
                a(href='javascript:void(0)') Terms of Use
              li.list-inline-item &sdot;
              li.list-inline-item
                a(href='javascript:void(0)') Privacy Policy
            p.text-muted.small.mb-4.mb-lg-0 &copy; Your Website 2018. All Rights Reserved.
          .col-lg-6.h-100.text-center.text-lg-right.my-auto
            ul.list-inline.mb-0
              li.list-inline-item.mr-3
                a(href='javascript:void(0)')
                  i.fab.fa-facebook.fa-2x.fa-fw
              li.list-inline-item.mr-3
                a(href='javascript:void(0)')
                  i.fab.fa-twitter-square.fa-2x.fa-fw
              li.list-inline-item
                a(href='javascript:void(0)')
                  i.fab.fa-instagram.fa-2x.fa-fw
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
