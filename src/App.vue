<template lang="pug">
  #app
    MusicPlayer(ref='mp')
    router-view(v-on:mp-toggle-window='$refs.mp.toggleMusic()')
</template>

<script>
// @ is an alias to /src
import MusicPlayer from '@/components/MusicPlayer.vue'

export default {
  name: 'app',
  components: {
    MusicPlayer
  },
  methods: {}
}
</script>

<style lang="scss">
</style>
