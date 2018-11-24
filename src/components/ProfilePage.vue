<template lang="pug">
  b-row
    b-col(md='12')
      b-card
        .form-group
          label(for='school') School
          input#school.form-control(type='text', placeholder='School', v-model='profile.school')
          .invalid-feedback
        .form-group
          label(for='grade') Grade
          input#grade.form-control(type='text', placeholder='Grade', v-model='profile.grade')
          .invalid-feedback
        h3.mb-0(slot='header') Profile
        div(slot='footer')
          button.btn.btn-primary.float-right.px-4(type='button', @click='doUpdate' :disabled='isDisabled') Update
</template>

<script>
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
