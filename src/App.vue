<template>
  <div id="app">
    <h1>{{ appTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    appTitle: "Nazreen's Portfolio"
  })
}
</script>

<style>
#app {
  padding: 20px;
}
</style>
