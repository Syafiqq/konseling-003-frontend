<template lang="pug">
  .lost
    LostPage
    fab(:actions='fabActions', main-icon='radio_button_checked', @music="music")
</template>

<script>
import LostPage from '../../components/auth/LostPage.vue'
import fab from 'vue-fab'
import EventBus from '../../scripts/utils/event-bus'

export default {
  name: 'Lost',
  components: {
    LostPage,
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
