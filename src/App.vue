<template>
  <div id="app">
    <app-header
      :title="copy.title"
      :subtitle="copy.subtitle"
      :introduction="copy.introduction"
    />
    <div class="projects-wrapper">
      <h2>My Past Projects</h2>
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
import AppHeader from './components/AppHeader.vue'

const STACK_OPTIONS = {
  VUE: 'Vue.js',
  PHP: 'PHP',
  NODE: 'Node.js',
}

export default {
  name: 'App',
  components: {
    AppHeader,
    ProjectItem,
  },
  data: () => ({
    copy: {
      title: "Nazreen's Portfolio",
      subtitle: "built using Vue.js and Node.js",
      introduction: "Hi there, my name is Nazreen, and I'm a full stack web developer. Welcome to my portfolio."
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
  margin: 0 auto;
  max-width: 900px;
}
.projects-wrapper {
  margin-top: 50px;
}
</style>
