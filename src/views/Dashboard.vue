<template lang="pug">
  .animated.fadeIn
    b-row
      b-col(md='12')
        b-card(header='Dashboard' footer='Dashboard')
          | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</template>

<script>
import flashAlert from '../scripts/utils/alert/flash-alert'

export default {
  name: 'Dashboard',
  mounted: function () {
    this.$nextTick(function () {
      flashAlert()
    })
  }
}
</script>

<style scoped>

</style>
