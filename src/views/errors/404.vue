<template lang="pug">
  .main-wrapper
    Page404
    fab(:actions='fabActions', main-icon='radio_button_checked', @music="music")
</template>

<script>
import fab from 'vue-fab'
import Page404 from '../../components/errors/Page404'
import EventBus from '../../scripts/utils/event-bus'

export default {
  name: 'e-404',
  components: {
    fab,
    Page404
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

<style lang="scss" scoped>
.main-wrapper {
  height: 100vh;
}
</style>
