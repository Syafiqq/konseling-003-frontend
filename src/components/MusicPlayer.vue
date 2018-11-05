<template>
  <div class="music-player">
    <div class="modal fade" id="musicPlayerModal" tabindex="-1" role="dialog" aria-labelledby="musicPlayerModalLabel"
         aria-hidden="false">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <aplayer :music="songs[0]"
                     :list="songs"
                     repeat="repeat-all"
                     ref="player"
            ></aplayer>
          </div>
        </div>
      </div>
    </div>
    <fab :actions="fabActions"
         main-icon="radio_button_checked"
         @music="music"
    ></fab>
  </div>
</template>

<script>
import fab from 'vue-fab'
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
      window.jQuery('#musicPlayerModal').modal()
    }
  },
  components: {
    fab,
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
