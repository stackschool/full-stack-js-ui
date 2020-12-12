<template>
  <div id="app">
    <h1>{{ copy.title }}</h1>
    <p>{{ copy.subtitle }}</p>
    <div class="projects-wrapper">
      <h2>Nazreen's Past Projects:</h2>
      <p>Here are some of the projects that I've worked on.</p>
      <project-item
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :image="project.image"
        :description="project.description"
        :techStack="project.techStack"
      />
    </div>
  </div>
</template>

<script>
import ProjectItem from './components/ProjectItem.vue'

const STACK_OPTIONS = {
  VUE: 'Vue.js',
  PHP: 'PHP',
  NODE: 'Node.js',
}

export default {
  name: 'App',
  components: {
    ProjectItem,
  },
  data: () => ({
    copy: {
      title: "Nazreen's Portfolio",
      subtitle: "built using Vue.js and Node.js"
    },
    projects: [
      {
        title: "Online Food Store",
        image: "https://i.ibb.co/ph6x1mq/2650401.jpg",
        description: "An online store that enables customers to buy food from resellers.",
        techStack: [
          STACK_OPTIONS.VUE,
          STACK_OPTIONS.PHP
        ]
      },
            {
        title: "Shares in Bitcoin",
        image: "https://i.ibb.co/ph6x1mq/2650401.jpg",
        description: "A page for viewing share prices in Bitcoin.",
        techStack: [
          STACK_OPTIONS.VUE,
          STACK_OPTIONS.NODE
        ]
      }
    ]
  })
}
</script>

<style>
#app {
  font-family: Sans-serif, Helvetica, Arial;
  padding: 20px;
}
</style>
