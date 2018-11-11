<template lang="pug">
  #app
    MusicPlayer
    component(:is='layout')
      transition
        router-view
</template>

<script>
// @ is an alias to /src
import MusicPlayer from './components/MusicPlayer.vue'

const defaultLayout = 'plain-container'

export default {
  name: 'app',
  components: {
    MusicPlayer
  },
  methods: {},
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout)
    }
  },

  created () {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout)
  },

  updated () {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout)
  }
}
</script>

<style lang="scss">
</style>
