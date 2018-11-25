<template lang="pug">
  #app
    MusicPlayer
    component(:is='layout')
      transition
        router-view
      template(v-if=`layout === 'admin-container'`, slot='aside')
        component(:is='aside')
</template>

<script>
// @ is an alias to /src
import MusicPlayer from './components/MusicPlayer.vue'
import flashAlert from './scripts/utils/alert/flash-alert'
import EventBus from './scripts/utils/event-bus'

const defaultLayout = 'plain-container'

export default {
  name: 'app',
  components: {
    MusicPlayer
  },
  data () {
    return {
      asideTemplate: null
    }
  },
  methods: {},
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout)
    },
    aside () {
      return this.asideTemplate
    }
  },

  mounted () {
    EventBus.$on('app-ly-aside', (ly) => {
      this.asideTemplate = ly
    })
  },

  created () {
    // nothing defined here (when this.$route.path is other than "/")
    // console.log({ route: this.$route, meta: this.$route.meta.layout })
  },

  updated () {
    // something defined here whatever the this.$route.path
    // console.log({ route: this.$route, meta: this.$route.meta.layout })
    flashAlert()
  }
}
</script>

<style lang="scss">
</style>
