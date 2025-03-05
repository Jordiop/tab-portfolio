<script setup lang="ts">
// Projects view component with improved code editor display
import { ref } from 'vue';

// Define the code lines for better organization and rendering
const codeLines = [
  { num: 1, content: '// Projects.vue - My Portfolio Projects', class: 'comment' },
  { num: 2, content: 'import Vue from "Vue";', class: '' },
  { num: 3, content: 'import ProjectCard from "../components";', class: '' },
  { num: 4, content: '', class: '' },
  { num: 5, content: 'const projects = [', class: '' },
  { num: 6, content: '  {', class: '' },
  { num: 7, content: '    id: 1,', class: '' },
  { num: 8, content: '    title: "E-Commerce Dashboard",', class: '' },
  { num: 9, content: '    description: "Full-featured dashboard with analytics",', class: '' },
  { num: 10, content: '    tech: ["Vue", "Nuxt", "Tailwind CSS", "Firebase"],', class: '' },
  { num: 11, content: '    image: "/projects/ecommerce.jpg",', class: '' },
  { num: 12, content: '    link: "https://github.com/jordi/ecommerce"', class: '' },
  { num: 13, content: '  },', class: '' },
  { num: 14, content: '  {', class: '' },
  { num: 15, content: '    id: 2,', class: '' },
  { num: 16, content: '    title: "AI-Powered Content Generator",', class: '' },
  { num: 17, content: '    description: "Generate content with AI models",', class: '' },
  { num: 18, content: '    tech: ["Vue", "OpenAI API", "Node.js", "Express"],', class: '' },
  { num: 19, content: '    image: "/projects/ai-content.jpg",', class: '' },
  { num: 20, content: '    link: "https://github.com/jordi/ai-content"', class: '' },
  { num: 21, content: '  },', class: '' },
  { num: 22, content: '];', class: '' },
  { num: 23, content: '', class: '' },
  { num: 24, content: 'const Projects = () => {', class: '' },
  { num: 25, content: '  return (', class: '' },
  { num: 26, content: '    <div className="projects-container">', class: '' },
  { num: 27, content: '      <h2>My Projects</h2>', class: '' },
  { num: 28, content: '      <div className="projects-grid">', class: '' },
  { num: 29, content: '        {projects.map(project => (', class: '' },
  { num: 30, content: '          <ProjectCard key={project.id} project={project} />', class: '' },
  { num: 31, content: '        ))}', class: '' },
  { num: 32, content: '      </div>', class: '' },
  { num: 33, content: '    </div>', class: '' },
  { num: 34, content: '  );', class: '' },
  { num: 35, content: '};', class: '' },
  { num: 36, content: '', class: '' },
  { num: 37, content: 'export default Projects;', class: '' },
];

// Helper function to apply syntax highlighting
const applyHighlighting = (line) => {
  if (line.num === 1) {
    return '<span class="comment">// Projects.vue - My Portfolio Projects</span>';
  } else if (line.num === 2 || line.num === 3) {
    return line.content
      .replace(/import/g, '<span class="keyword">import</span>')
      .replace(/from/g, '<span class="keyword">from</span>')
      .replace(/"[^"]+"/g, '<span class="string">$&</span>');
  } else if (line.num >= 5 && line.num <= 22) {
    return line.content
      .replace(/"[^"]+"/g, '<span class="string">$&</span>')
      .replace(/\b(id|title|description|tech|image|link)\b:/g, '<span class="property">$&</span>')
      .replace(/\[|\]/g, '<span class="bracket">$&</span>');
  } else if (line.num === 24) {
    return '<span class="keyword">const</span> <span class="variable">Projects</span> = () => {';
  } else if (line.num >= 26 && line.num <= 33) {
    return line.content
      .replace(/&lt;(\w+)/g, '&lt;<span class="function">$1</span>')
      .replace(/&lt;\/(\w+)&gt;/g, '&lt;/<span class="function">$1</span>&gt;')
      .replace(/className=/g, '<span class="variable">className</span>=')
      .replace(/"[^"]+"/g, '<span class="string">$&</span>')
      .replace(/\{([^}]+)\}/g, '<span class="code-js">{$1}</span>');
  } else if (line.num === 37) {
    return '<span class="keyword">export default</span> Projects;';
  }
  return line.content;
};

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A full-featured admin dashboard for a modern e-commerce platform with real-time analytics, inventory management, and customer insights.",
    tech: ["Vue", "Nuxt", "Tailwind CSS", "Firebase"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=E-Commerce+Dashboard"
  },
  {
    id: 2,
    title: "AI-Powered Content Generator",
    description: "A tool that leverages AI models to create customized marketing content, blog posts, and social media updates based on user inputs and preferences.",
    tech: ["Vue", "OpenAI API", "Node.js", "Express"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=AI+Content+Generator"
  },
  {
    id: 3,
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers featuring a code editor-inspired UI with syntax highlighting and responsive design.",
    tech: ["Vue 3", "TypeScript", "Tailwind CSS"],
    image: "https://placehold.co/600x400/5e4c7f/e0def4?text=Portfolio+Template"
  }
];
</script>

<template>
  <div class="code-editor">
    <div class="code-content">
      <div class="code-line" v-for="line in codeLines" :key="line.num">
        <div class="line-numbers">{{ line.num }}</div>
        <div class="code-text" v-html="applyHighlighting(line)"></div>
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

<style scoped>
.code-editor {
  flex: 1;
  overflow-y: auto;
  background-color: #2f2d36;
  border-right: 1px solid #2a2438;
}

.code-content {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.code-line {
  display: flex;
  height: 24px;
  line-height: 24px;
  margin-bottom: 2px;
}

.line-numbers {
  width: 50px;
  text-align: right;
  padding-right: 10px;
  color: #6e6a86;
  user-select: none;
  font-size: 14px;
}

.code-text {
  padding-left: 15px;
  color: #e0def4;
  font-size: 14px;
  font-family: 'JetBrains Mono', monospace;
}

.keyword {
  color: #c4a7e7;
}

.string {
  color: #f6c177;
}

.comment {
  color: #6e6a86;
}

.function {
  color: #9ccfd8;
}

.variable {
  color: #e0def4;
}

.property {
  color: #9ccfd8;
}

.bracket {
  color: #e0def4;
}

.code-js {
  color: #c4a7e7;
}

.preview {
  flex: 1;
  background-color: #13111c;
  overflow-y: auto;
}

.projects-preview {
  padding: 40px;
}

.projects-preview h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #e0def4;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

.project-card {
  background-color: #2a2438;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #c4a7e7;
}

.project-content p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #e0def4;
  line-height: 1.5;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: #13111c;
  border-radius: 0.25rem;
  color: #9ccfd8;
}
</style>