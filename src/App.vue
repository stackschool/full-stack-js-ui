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
import ProjectItem from './components/ProjectItem.vue';
import AppHeader from './components/AppHeader.vue';
import { copy, projects } from './js/state';

export default {
  name: 'App',
  components: {
    AppHeader,
    ProjectItem,
  },
  data: () => ({
    copy,
    projects,
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
