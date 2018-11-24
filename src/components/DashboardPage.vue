<template lang="pug">
  .dashboard
    b-row
      b-col(md='12')
        b-card(header='Dashboard' footer='Dashboard')
          | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</template>

<script>
export default {
  name: 'DashboardPage',
  props: {
    course_status: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
