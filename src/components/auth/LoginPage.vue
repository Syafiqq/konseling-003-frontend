<template lang="pug">
  .login-page.app.flex-row.align-items-center
    .container
      .row.justify-content-center
        .col-md-8
          .card-group
            .card.p-4
              .card-body
                h1 Login
                p.text-muted Login untuk memulai aplikasi
                .input-group.mb-3
                  .input-group-prepend
                    span.input-group-text
                      i.icon-user
                  input.form-control(type='text', placeholder='NISN' :value='auth.credential')
                .input-group.mb-4
                  .input-group-prepend
                    span.input-group-text
                      i.icon-lock
                  input.form-control(type='password', placeholder='Password' :value='auth.password')
                .row
                  .col-6
                    button.btn.btn-primary.px-4(type='button') Login
                  .col-6.text-right
                    button.btn.btn-link.px-0(type='button') Lupa password?
            .card.text-white.bg-primary.py-5.d-md-down-none(style='width:44%')
              .card-body.text-center
                div
                  h2 Daftar
                  p
                    | Segera daftarkan diri anda untuk dapat menggunakan aplikasi ini
                  router-link.btn.btn-primary.active.mt-3(:to="{name:'auth-register'}", type='button')
                    | Daftar Sekarang !
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      auth: {
        credential: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
