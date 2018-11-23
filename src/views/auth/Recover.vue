<template lang="pug">
  .recover
    RecoverPage
    fab(:actions='fabActions', main-icon='radio_button_checked', @music="music")
</template>

<script>
import RecoverPage from '../../components/auth/RecoverPage.vue'
import fab from 'vue-fab'
import EventBus from '../../scripts/utils/event-bus'

export default {
  name: 'Recover',
  components: {
    RecoverPage,
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
