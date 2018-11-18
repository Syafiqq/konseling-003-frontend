<template lang="pug">
  .section.right.col-xs-9
    h1 Page Not Found
    p Sorry, but the page you were trying to view does not exist.
</template>

<script>
export default {
  name: 'e-404-page'
}
</script>

<style lang="scss" scoped>
.left {
}

.right {
}

.section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #888;
  font-family: sans-serif;
}

.half {
  background: #f9f9f9;
  height: 50%;
  width: 100%;
  margin: 15px 0;
}
</style>
