<template lang="pug">
  .music-player
    #musicPlayerModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='musicPlayerModalLabel', aria-hidden='false')
      .modal-dialog(role='document')
        .modal-content
          .modal-body
            aplayer(:music='songs[0]', :list='songs', repeat='repeat-all', ref='player')
</template>

<script>
import aplayer from 'vue-aplayer'
import EventBus from '../event-bus'
import * as Tracks from '../music-tracks'

export default {
  name: 'MusicPlayer',
  data () {
    return {
      songs: Tracks
    }
  },
  methods: {
    toggleMusic () {
      window.$('#musicPlayerModal').modal()
    },
    loadMusic (vm) {
      let currentIndex = vm.$cookies.get('audio_current_index')
      let currentTime = vm.$cookies.get('audio_current_time')
      vm.$refs.player.playIndex = currentIndex || 0
      vm.$refs.player.audio.currentTime = currentTime || 0.0
      const playedPromise = vm.$refs.player.audio.play()
      if (playedPromise) {
        playedPromise.catch(() => {
          this.$swal({
            toast: true,
            position: 'bottom',
            title: 'Do you want to play the music ?',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
              vm.$refs.player.thenPlay()
            }
          })
        })
      }
      window.$(window).on('beforeunload', function (e) {
        e.preventDefault()
        vm.$cookies.set('audio_current_index', vm.$refs.player.playIndex)
        vm.$cookies.set('audio_current_time', vm.$refs.player.audio.currentTime)
      })
    }
  },
  components: {
    aplayer
  },
  mounted () {
    this.loadMusic(this)
    EventBus.$on('mp-toggle-window', () => this.toggleMusic())
  }
}
</script>

<style scoped lang="scss">
.modal-body {
  padding: 2px;
}
</style>
