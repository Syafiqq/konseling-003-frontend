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

export default {
  name: 'MusicPlayer',
  data () {
    return {
      songs: [
        {
          autoplay: true,
          title: 'Samnple Audio',
          artist: 'Samnple Audio',
          src: require('../assets/song/sample-audio.mp3')
        },
        {
          autoplay: true,
          title: 'Samnple Audio',
          artist: 'Samnple Audio',
          src: require('../assets/song/sample-audio.mp3')
        },
        {
          autoplay: true,
          title: 'Samnple Audio',
          artist: 'Samnple Audio',
          src: require('../assets/song/sample-audio.mp3')
        },
        {
          autoplay: true,
          title: 'Samnple Audio',
          artist: 'Samnple Audio',
          src: require('../assets/song/sample-audio.mp3')
        },
        {
          autoplay: true,
          title: 'Samnple Audio',
          artist: 'Samnple Audio',
          src: require('../assets/song/sample-audio.mp3')
        },
        {
          autoplay: true,
          title: 'Samnple Audio',
          artist: 'Samnple Audio',
          src: require('../assets/song/sample-audio.mp3')
        }
      ],
    }
  },
  methods: {
    toggleMusic () {
      window.jQuery('#musicPlayerModal').modal()
    }
  },
  components: {
    aplayer
  },
  mounted () {
    let vm = this
    let currentIndex = window.Cookies.get('audio_current_index')
    let currentTime = window.Cookies.get('audio_current_time')
    vm.$refs.player.playIndex = currentIndex || 0
    vm.$refs.player.audio.currentTime = currentTime || 0.0
    const playedPromise = vm.$refs.player.audio.play()
    if (playedPromise) {
      playedPromise.catch((e) => {
        vm.music()
      })
    }
    window.$(window).on('beforeunload', function (e) {
      e.preventDefault()
      window.Cookies.set('audio_current_index', vm.$refs.player.playIndex)
      window.Cookies.set('audio_current_time', vm.$refs.player.audio.currentTime)
    })
  }
}
</script>

<style scoped lang="scss">
.modal-body {
  padding: 2px;
}
</style>
