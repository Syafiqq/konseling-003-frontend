<template lang="pug">
  b-row
    b-col(md='12')
      b-card
        .form-group
          label(for='school') Sekolah
          input#school.form-control(type='text', placeholder='Sekolah', v-model='profile.school')
          .invalid-feedback
        .form-group
          label(for='grade') Kelas
          input#grade.form-control(type='text', placeholder='Kelas', v-model='profile.grade')
          .invalid-feedback
        h3.mb-0(slot='header') Profile
        div(slot='footer')
          button.btn.btn-primary.float-right.px-4(type='button', @click='doUpdate' :disabled='isDisabled') Update
</template>

<script>
import service from '../scripts/services/profile/profile-patch-service'

export default {
  name: 'ProfilePage',
  props: {
    profile: Object
  },
  data () {
    return {
      disabled: false
    }
  },
  methods: {
    doUpdate () {
      this.disabled = true
      service({ ...this.profile }, () => {
        this.disabled = false
      })
    }
  },
  computed: {
    isDisabled: function () {
      return this.disabled
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
