<template>
  <div id="app">
    <app-header
      :title="copy.title"
      :subtitle="copy.subtitle"
      :introduction="copy.introduction"
    />
    <div class="filter-wrapper">
      <span>search for terms in project descriptions: </span>
      <input type="text" v-model="search">
      <p>filter by tech stack:</p>
      <select v-model="filter.techStack">
        <option value="Vue.js">Vue.js</option>
        <option value="PHP">PHP</option>
        <option value="Node.js">Node.js</option>
      </select>
      <span @click="clearFilter">clear filter</span>
      <ul v-if="showResultsStatement">{{ filteredProjects.length }} projects that:
        <li v-if="filter.techStack" class="filter-statement">used {{ filter.techStack }}</li>
        <li v-if="search.length > 0">has a description containing '{{ search }}'</li>
      </ul>

    </div>
    <div class="projects-wrapper">
      <h2>My Past Projects</h2>
      <p>Here are some of the projects that I've worked on.</p>
      <project-item
        v-for="project in filteredProjects"
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
    search: '',
    filter: {
      techStack: null
    }
  }),
  computed: {
    filteredProjects () {
      let result = [...this.projects];
      if (this.filter.techStack) {
        result = this.projects.filter(project => {
          return project.techStack.includes(this.filter.techStack)
        })
      }
      if (this.search.length > 0) {
        result = this.projects.filter(project => {
          return project.description.includes(this.search)
        })
      }
      return result
    },
    showResultsStatement () {
      return this.filter.techStack || this.search.length > 0
    }
  },
  methods: {
    clearFilter() {
      this.filter.techStack = null;
    }
  }
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
