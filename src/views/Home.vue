<template lang="pug">
  .home
    LandingPage
    fab(:actions='fabActions', main-icon='radio_button_checked', @music="music")
</template>

<script>
// @ is an alias to /src
import fab from 'vue-fab'
import LandingPage from '@/components/LandingPage.vue'
import EventBus from '../scripts/utils/event-bus'

export default {
  name: 'home',
  components: {
    fab,
    LandingPage
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
