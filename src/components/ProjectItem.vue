<template>
  <div class="project-item">
    <h3>{{ title }}</h3>
    <img :src="image" alt="project image">
    <p>{{ description }}</p>
    <h4>Tech stack:</h4>
    <ul>
      <li v-for="stack in techStack" :key="stack">{{ stack }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    title: String,
    image: String,
    description: String,
    techStack: Array,
  }
}
</script>

<style scoped>
h3 {
  margin-top: 0px;
}
img {
  width: 100%;
  max-width: 400px;
}
.project-item {
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  max-width: 600px;
}
</style>