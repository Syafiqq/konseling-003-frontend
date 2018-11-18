<template lang="pug">
  .music-player
    b-modal(ref='musicPlayerModal', hide-footer='', hide-header='')
      aplayer(:music='songs[0]', :list='songs', repeat='repeat-all', ref='player')
</template>

<script>
import aplayer from 'vue-aplayer'
import EventBus from '../scripts/utils/event-bus'
import * as Tracks from '../scripts/utils/music-tracks'

export default {
  name: 'MusicPlayer',
  data () {
    return {
      songs: Tracks
    }
  },
  methods: {
    toggleMusic () {
      this.$refs.musicPlayerModal.show()
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
            title: 'Apakah anda ingin mendengarkan musik ?',
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
.music-player /deep/ .modal-body {
  padding: 2px;
}
</style>
