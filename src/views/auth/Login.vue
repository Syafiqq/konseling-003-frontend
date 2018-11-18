<template lang="pug">
  .login
    LoginPage
    fab(:actions='fabActions', main-icon='radio_button_checked', @music="music")
</template>

<script>
import LoginPage from '../../components/auth/LoginPage.vue'
import fab from 'vue-fab'
import EventBus from '../../scripts/utils/event-bus'

export default {
  name: 'Login',
  components: {
    fab,
    LoginPage
  },
  data () {
    return {
      fabActions: [
        {
          name: 'music',
          icon: 'music_note'
        }
      ]
    }
  },
  methods: {
    music () {
      EventBus.$emit('mp-toggle-window')
    }
  }
}
</script>

<style scoped>

</style>
