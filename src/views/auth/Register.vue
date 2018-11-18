<template lang="pug">
  .register
    RegisterPage
    fab(:actions='fabActions', main-icon='radio_button_checked', @music="music")
</template>

<script>
import RegisterPage from '../../components/auth/RegisterPage.vue'
import fab from 'vue-fab'
import EventBus from '../../scripts/utils/event-bus'

export default {
  name: 'Register',
  components: {
    RegisterPage,
    fab
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
