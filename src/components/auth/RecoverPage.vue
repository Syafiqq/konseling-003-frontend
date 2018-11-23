<template lang="pug">
  .recover-page.app.flex-row.align-items-center
    .container
      .row.justify-content-center
        .col-md-6
          .card.mx-4
            .card-body.p-4
              h1 Pemulihan
                small.text-muted.font-sm.pl-2 Isikan password baru diri anda
              #form-0-credential.input-group.mb-3
                .input-group-prepend
                  span.input-group-text
                    i.icon-user
                input.form-control(type='text', placeholder='NISN', :value='auth.credential' :disabled='true')
                .invalid-feedback
              #form-0-token.input-group.mb-3
                .input-group-prepend
                  span.input-group-text
                    i.icon-key
                input.form-control(type='text', placeholder='Token', :value='auth.token' :disabled='true')
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
                input.form-control(type='password', placeholder='Ulangi Password', v-model='auth.password_confirmation')
                .invalid-feedback
              button.btn.btn-block.btn-success(type='button', @click='doRecover' :disabled='isDisabled') Daftar
</template>

<script>
import service from '../../scripts/services/auth/recover-service'
import validation from '../../scripts/utils/validation/form-validation'

const form0keys = {
  credential: 'input',
  token: 'input',
  password: 'input',
  password_conf: 'input'
}
export default {
  name: 'RecoverPage',
  data () {
    return {
      disabled: false,
      auth: {
        'credential': '',
        'token': '',
        'password': '12345678',
        'password_confirmation': '12345678'
      }
    }
  },
  computed: {
    isDisabled: function () {
      return this.disabled
    }
  },
  methods: {
    doRecover () {
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
