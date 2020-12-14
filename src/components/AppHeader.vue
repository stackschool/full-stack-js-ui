<template>
    <header>
      <h1>{{ title }}</h1>
      <small>{{ subtitle }}</small>
      <p>{{ introduction }}</p>
    </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: String,
    subtitle: String,
    introduction: String,
  }
}
</script>

<style scoped>
header > * {
  display: inline-block;
  margin-right: 20px;
}
</style>