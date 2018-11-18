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
                #form-0-credential.input-group.mb-3
                  .input-group-prepend
                    span.input-group-text
                      i.icon-user
                  input.form-control(type='text', placeholder='NISN' v-model='auth.credential')
                  .invalid-feedback
                #form-0-password.input-group.mb-4
                  .input-group-prepend
                    span.input-group-text
                      i.icon-lock
                  input.form-control(type='password', placeholder='Password' v-model='auth.password')
                  .invalid-feedback
                .row
                  .col-6
                    button.btn.btn-primary.px-4(type='button', @click='doLogin' :disabled='isDisabled') Login
                  .col-6.text-right.d-none.d-sm-none.d-md-none.d-lg-block.d-xl-block
                    button.btn.btn-link.px-0(type='button') Lupa password?
                  .col-6.text-right.d-block.d-sm-block.d-md-block.d-lg-none.d-xl-none
                    router-link.btn.btn-primary.px-4(:to="{name:'auth-register'}", tag='button', type='button')
                      | Daftar
                .row.pt-3.d-block.d-sm-block.d-md-block.d-lg-none.d-xl-none
                  .col-12.center-text-align
                    button.btn.btn-link.px-0(type='button') Lupa password?
            .card.text-white.bg-primary.py-5.d-none.d-sm-none.d-md-none.d-lg-block.d-xl-block(style='width:44%')
              .card-body.text-center
                div
                  h2 Daftar
                  p
                    | Segera daftarkan diri anda untuk dapat menggunakan aplikasi ini
                  router-link.btn.btn-primary.active.mt-3(:to="{name:'auth-register'}", type='button')
                    | Daftar Sekarang !
</template>

<script>
import service from '../../scripts/services/auth/login-service'
import validation from '../../scripts/utils/validation/form-validation'
import alert from '../../scripts/utils/alert/common-alerts'

const form0keys = {
  credential: 'input',
  password: 'input'
}
export default {
  name: 'LoginPage',
  data () {
    return {
      disabled: false,
      auth: {
        credential: '',
        password: ''
      }
    }
  },
  computed: {
    isDisabled: function () {
      return this.disabled
    }
  },
  methods: {
    doLogin () {
      console.log({ ...this.auth })
      this.disabled = true
      service({ ...this.auth },
        (success) => {

        },
        (failed) => {
          alert(failed?.response?.data?.alert || [])
          if (failed?.response?.status === 422) {
            validation('form-0', form0keys, failed?.response?.data?.data || {})
          }
        },
        () => {
          this.disabled = false
        })
    }
  }
}
</script>

<style scoped>

</style>
