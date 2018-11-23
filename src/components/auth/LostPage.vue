<template lang="pug">
  .lost-page.app.flex-row.align-items-center
    .container
      .row.justify-content-center
        .col-md-6
          .card.mx-4
            .card-body.p-4
              h1 Lupa Password ?
                small.text-muted.font-sm.pl-2 Tuliskan NISN Anda
              #form-0-credential.input-group.mb-3
                .input-group-prepend
                  span.input-group-text
                    i.icon-credit-card
                input.form-control(type='text', placeholder='NISN' v-model='auth.credential')
                .invalid-feedback
              button.btn.btn-block.btn-success(type='button', @click='doLost' :disabled='isDisabled') Pulihkan
</template>

<script>
import service from '../../scripts/services/auth/lost-service'
import validation from '../../scripts/utils/validation/form-validation'

const form0keys = {
  credential: 'input'
}
export default {
  name: 'LostPage',
  data () {
    return {
      disabled: false,
      auth: {
        'credential': ''
      }
    }
  },
  computed: {
    isDisabled: function () {
      return this.disabled
    }
  },
  methods: {
    doLost () {
      console.log({ ...this.auth })
      this.disabled = true
      service({ ...this.auth },
        (success) => {
          if (success.status === 200) {
            this.$store.commit('PUSH_AUTH_DATA_PASSING', {
              token: success.data.data.recovery_token,
              credential: this.auth.credential
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
  }
}
</script>

<style scoped>

</style>
