<script setup lang="ts">
const codeLines: any = [
  { num: 1, content: '// Projects.vue - My Portfolio Projects', class: 'comment' },
  { num: 2, content: '<script setup lang="ts">', class: '' },
  { num: 3, content: 'import ProjectCard from "../components";', class: '' },
  { num: 4, content: '', class: '' },
  { num: 5, content: 'const projects = [', class: '' },
  { num: 6, content: '  {', class: '' },
  { num: 7, content: '    id: 1,', class: '' },
  { num: 8, content: '    title: "Portfolio",', class: '' },
  { num: 9, content: '    description: "A modern portfolio featuring an original design base on a code editor theme",', class: '' },
  { num: 10, content: '    tech: ["Vue", "Tailwind CSS"],', class: '' },
  { num: 11, content: '    image: "/projects/portfolio.jpg",', class: '' },
  { num: 12, content: '    link: "https://github.com/jordiop/tab-portfolio"', class: '' },
  { num: 13, content: '  },', class: '' },
  { num: 14, content: '  {', class: '' },
  { num: 15, content: '    id: 2,', class: '' },
  { num: 16, content: '    title: "Advent JS",', class: '' },
  { num: 17, content: '    description: "Advent JS solved exercises and projects",', class: '' },
  { num: 18, content: '    tech: ["JS"],', class: '' },
  { num: 19, content: '    image: "/projects/adventjs.jpg",', class: '' },
  { num: 20, content: '    link: "https://github.com/jordiop/adventjs"', class: '' },
  { num: 21, content: '  },', class: '' },
  { num: 22, content: '  {', class: '' },
  { num: 23, content: '    id: 3,', class: '' },
  { num: 24, content: '    title: "Newtab",', class: '' },
  { num: 25, content: '    description: "New tab extension for Firefox. Simple, efficient and customizable",', class: '' },
  { num: 26, content: '    tech: ["HTML", "Tailwind CSS"],', class: '' },
  { num: 27, content: '    image: "/projects/newtab.jpg",', class: '' },
  { num: 28, content: '    link: "https://github.com/jordiop/newtab"', class: '' },
  { num: 29, content: '  },', class: '' },
  { num: 30, content: '];', class: '' },
  { num: 31, content: '', class: '' },
  { num: 32, content: '<`/`script>', class: ''},
  { num: 33, content: '<template>', class: '' },
  { num: 34, content: '  <div class="preview">', class: '' },
  { num: 35, content: '    <div class="projects-preview">', class: '' },
  { num: 36, content: '      <h2>My Projects</h2>', class: '' },
  { num: 37, content: '      <div class="projects-grid">', class: '' },
  { num: 38, content: '        <div v-for="project in projects" :key="project.id" class="project-card">', class: '' },
  { num: 39, content: '          <div class="project-image">', class: '' },
  { num: 40, content: '            <img :src="project.image" :alt="project.title">', class: '' },
  { num: 41, content: '          </div>', class: '' },
  { num: 42, content: '          <div class="project-content">', class: '' },
  { num: 43, content: '            <h3>{{ project.title }}</h3>', class: '' },
  { num: 44, content: '            <p>{{ project.description }}</p>', class: '' },
  { num: 45, content: '            <div class="tech-tags">', class: '' },
  { num: 46, content: '              <span v-for="(tech, index) in project.tech" :key="index" class="tech-tag">{{ tech }}</span>', class: '' },
  { num: 47, content: '            </div>', class: '' },
  { num: 48, content: '          </div>', class: '' },
  { num: 49, content: '        </div>', class: '' },
  { num: 50, content: '      </div>', class: '' },
  { num: 51, content: '    </div>', class: '' },
  { num: 52, content: '  </div>', class: '' },
  { num: 53, content: '</template>', class: '' },
  { num: 54, content: '', class: '' },
];

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "A modern portfolio featuring an original design base on a code editor theme.",
    tech: ["Vue 3", "Tailwind CSS"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=Portfolio"
  },
  {
    id: 2,
    title: "Advent JS",
    description: "Advent JS solved exercises and projects.",
    tech: ["JS"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=Advent+JS"
  },
  {
    id: 3,
    title: "Newtab",
    description: "New tab extension for Firefox. Simple, efficient and customizable",
    tech: ["HTML","Tailwind CSS"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=New+Tab"
  }
];
</script>

<template>
  <div class="code-editor hidden md:block overflow-hidden md:overflow-auto">
    <div class="code-content">
      <div class="code-line" v-for="line in codeLines" :key="line.num">
        <div class="line-numbers">{{ line.num }}</div>
        <div class="code-text" :class="line.class">
          {{ line.content }}
        </div>
      </div>
    </div>
  </div>
  <div class="preview">
    <div class="projects-preview">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-tags">
              <span v-for="(tech, index) in project.tech" :key="index" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>