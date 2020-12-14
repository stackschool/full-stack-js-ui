<template>
  <div id="app">
    <app-header
      :title="copy.title"
      :subtitle="copy.subtitle"
      :introduction="copy.introduction"
    />
    <div class="filter-wrapper">

      <div class="input-group">
        <span>search for terms in project descriptions: </span>
        <input type="text" v-model="search">
        <span @click="clearSearch" class="clear">clear search</span>
      </div>

      <div class="input-group">
        <span>filter by tech stack:</span>
        <select v-model="filter.techStack">
          <option value="Vue.js">Vue.js</option>
          <option value="PHP">PHP</option>
          <option value="Node.js">Node.js</option>
        </select>
        <span @click="clearFilter" class="clear">clear filter</span>
      </div>

      <div v-if="showResultsStatement">
        <p>{{ filteredProjects.length }} project{{ filteredProjects.length > 1 ? 's' : '' }} that:</p>
        <ul>
          <li v-if="filter.techStack" class="filter-statement">used {{ filter.techStack }}</li>
          <li v-if="search.length > 0">has a description containing '{{ search }}'</li>
        </ul>
      </div>


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
          return project.description.toLowerCase().includes(this.search.toLowerCase())
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
    },
    clearSearch() {
      this.search = "";
    }
  }
}
</script>

<style>
body {
  background-color: skyblue;
}
#app {
  font-family: Sans-serif, Helvetica, Arial;
  background-color: white;
  padding: 20px;
  margin: 3vh auto;
  max-width: 800px;
}
.input-group {
  margin: 10px 0;
}
.input-group > * {
  margin-right: 10px;
}
.projects-wrapper {
  margin-top: 50px;
}
.clear {
  cursor: pointer;
}
</style>
