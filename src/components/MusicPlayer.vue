<template>
  <div class="music-player">
    <div class="modal fade" id="musicPlayerModal" tabindex="-1" role="dialog" aria-labelledby="musicPlayerModalLabel"
         aria-hidden="false">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <aplayer autoplay
                     :music="songs[0]"
                     :list="songs"
                     repeat="repeat-all"
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
  }
}
</script>

<style scoped lang="scss">
.modal-body {
  padding: 2px;
}
</style>
