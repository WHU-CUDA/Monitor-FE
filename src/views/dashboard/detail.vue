<template>
  <div>
    {{ server }}
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    server: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
