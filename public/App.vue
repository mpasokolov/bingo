<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '../src/components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>

<style lang="sass">
  #app
      padding: 20px
</style>
