<template>
  <div id="app">
    <MusicPlayer></MusicPlayer>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import MusicPlayer from '@/components/MusicPlayer.vue'

export default {
  name: 'app',
  components: {
    MusicPlayer
  }
}
</script>

<style lang="scss">
</style>
