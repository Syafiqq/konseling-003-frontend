<template lang="pug">
  #app
    MusicPlayer
    transition
      router-view
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
