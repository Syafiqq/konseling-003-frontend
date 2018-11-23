<template lang="pug">
  .register-page.app.flex-row.align-items-center
    .container
      .row.justify-content-center
        .col-md-6
          .card.mx-4
            .card-body.p-4
              h1 Daftar
                small.text-muted.font-sm.pl-2 Daftarkan diri anda
              #form-0-credential.input-group.mb-3
                .input-group-prepend
                  span.input-group-text
                    i.icon-credit-card
                input.form-control(type='text', placeholder='NISN' v-model='auth.credential')
                .invalid-feedback
              #form-0-email.input-group.mb-3
                .input-group-prepend
                  span.input-group-text @
                input.form-control(type='text', placeholder='Email', v-model='auth.email')
                .invalid-feedback
              #form-0-name.input-group.mb-3
                .input-group-prepend
                  span.input-group-text
                    i.icon-user
                input.form-control(type='text', placeholder='Nama', v-model='auth.name')
                .invalid-feedback
              #form-0-gender.input-group.mb-3
                .pretty.p-default.p-smooth.font-xl
                  input.form-control(type='radio', value='male' v-model='auth.gender')
                  .state.p-info
                    label Laki Laki
                .pretty.p-default.p-smooth.font-xl.float-right
                  input.form-control(type='radio', value='female' v-model='auth.gender')
                  .state.p-info
                    label Perempuan
                input.form-control(type='hidden')
                .invalid-feedback
              #form-0-token.input-group.mb-3
                .input-group-prepend
                  span.input-group-text
                    i.icon-key
                input.form-control(type='password', placeholder='Token', v-model='auth.token')
                .invalid-feedback
              #form-0-password.input-group.mb-3
                .input-group-prepend
                  span.input-group-text
                    i.icon-lock
                input.form-control(type='password', placeholder='Password', v-model='auth.password')
                .invalid-feedback
              #form-0-password_conf.input-group.mb-4
                .input-group-prepend
                  span.input-group-text
                    i.icon-lock
                input.form-control(type='password', placeholder='Ulangi Password', v-model='auth.password_conf')
                .invalid-feedback
              button.btn.btn-block.btn-success(type='button', @click='doRegister' :disabled='isDisabled') Daftar
</template>

<script>
import service from '../../scripts/services/auth/register-service'
import validation from '../../scripts/utils/validation/form-validation'

const form0keys = {
  credential: 'input',
  email: 'input',
  name: 'input',
  gender: 'input',
  token: 'input',
  password: 'input',
  password_conf: 'input'
}
export default {
  name: 'RegisterPage',
  data () {
    return {
      disabled: false,
      auth: {
        credential: '',
        email: '',
        name: '',
        gender: '',
        token: '',
        password: '',
        password_conf: ''
      }
    }
  },
  computed: {
    isDisabled: function () {
      return this.disabled
    }
  },
  methods: {
    doRegister () {
      console.log({ ...this.auth })
      this.disabled = true
      service({ ...this.auth },
        (success) => {
          if (success.status === 200) {
            this.$store.commit('PUSH_AUTH_DATA_PASSING', {
              credential: this.auth.credential,
              password: this.auth.password
            })
          }
        },
        (failed) => {
          if (failed?.response?.status === 422) {
            validation('form-0', form0keys, failed?.response?.data?.data || {})
          }
        },
        () => {
          this.disabled = false
        })
    }
  },
  mounted: function () {
    this.$store.dispatch('pop_auth_data_passing').then((data) => {
      this.auth = window._.merge(this.auth, data)
    })
  }
}
</script>

<style scoped>

</style>
