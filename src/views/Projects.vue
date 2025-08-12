<script setup lang="ts">
import { ref } from 'vue'

const codeLines: Array<{ num: number; content: string; class: string }> = [];

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "A modern portfolio featuring an original design based on a code editor theme. Built with Vue 3, TypeScript, and Tailwind CSS for a seamless developer experience.",
    tech: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=Portfolio",
    github: "https://github.com/jordiop/tab-portfolio",
    demo: "https://portfolio.jordi.dev",
    featured: true
  },
  {
    id: 2,
    title: "Advent JS",
    description: "Collection of solved Advent of Code exercises and algorithmic challenges. Demonstrates problem-solving skills and clean code practices.",
    tech: ["JavaScript", "Algorithms", "Data Structures"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=Advent+JS",
    github: "https://github.com/jordiop/adventjs",
    featured: false
  },
  {
    id: 3,
    title: "Newtab Extension",
    description: "A minimalist Firefox new tab extension that provides a clean, customizable interface for productivity and quick access to frequently used tools.",
    tech: ["HTML", "CSS", "JavaScript", "Firefox API"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=New+Tab",
    github: "https://github.com/jordiop/newtab",
    featured: false
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with Vue.js and Node.js.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=E-commerce",
    github: "https://github.com/jordiop/ecommerce",
    demo: "https://shop.jordi.dev",
    featured: true
  },
  {
    id: 5,
    title: "Task Manager",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["Vue.js", "Socket.io", "Express", "PostgreSQL"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=Task+Manager",
    github: "https://github.com/jordiop/task-manager",
    demo: "https://tasks.jordi.dev",
    featured: false
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and beautiful weather visualizations.",
    tech: ["Vue.js", "OpenWeather API", "Chart.js", "Geolocation"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=Weather",
    github: "https://github.com/jordiop/weather-dashboard",
    demo: "https://weather.jordi.dev",
    featured: false
  }
];

const selectedProject = ref<number | null>(null);

const openProject = (projectId: number) => {
  selectedProject.value = projectId;
};
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
      <div class="projects-header">
        <h2>My Projects</h2>
        <p class="projects-subtitle">A collection of my latest work and experiments</p>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="project-card"
          :class="{ 'featured': project.featured }"
          @click="openProject(project.id)"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title">
            <div class="project-overlay">
              <div class="overlay-content">
                <button class="view-project-btn">View Project</button>
              </div>
            </div>
            <div v-if="project.featured" class="featured-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
              </svg>
              Featured
            </div>
          </div>
          
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            
            <div class="tech-tags">
              <span v-for="(tech, index) in project.tech" :key="index" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            
            <div class="project-links">
              <a 
                v-if="project.github" 
                :href="project.github" 
                target="_blank" 
                rel="noopener noreferrer"
                class="project-link github-link"
                @click.stop
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Code
              </a>
              <a 
                v-if="project.demo" 
                :href="project.demo" 
                target="_blank" 
                rel="noopener noreferrer"
                class="project-link demo-link"
                @click.stop
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="projects-footer">
        <p>Want to see more? Check out my <a href="https://github.com/jordiop" target="_blank" rel="noopener noreferrer" class="github-link">GitHub</a> for additional projects and contributions.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-header {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.project-card {
  cursor: pointer;
  position: relative;
}

.project-card.featured {
  border: 2px solid var(--accent-color);
  transform: scale(1.02);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project-btn {
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-project-btn:hover {
  background: var(--accent-secondary);
  transform: translateY(-2px);
}

.featured-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--accent-color);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
}

.project-links {
  display: flex;
  gap: 12px;
  margin-top: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.github-link {
  color: var(--text-primary);
  background: var(--bg-primary);
}

.github-link:hover {
  background: var(--bg-secondary);
  border-color: var(--accent-color);
}

.demo-link {
  color: var(--btn-primary-text);
  background: var(--accent-color);
}

.demo-link:hover {
  background: var(--accent-secondary);
  transform: translateY(-1px);
}

.projects-footer {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.projects-footer p {
  color: var(--text-secondary);
  margin: 0;
}

.projects-footer .github-link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
}

.projects-footer .github-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .project-links {
    flex-direction: column;
  }
  
  .project-link {
    justify-content: center;
  }
}
</style>