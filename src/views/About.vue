<script setup lang="ts">
const codeLines = [
  { num: 1, content: '// Welcome to my Portfolio! 🚀', class: 'comment' },
  { num: 2, content: 'computed from \'Vue\'', class: '' },
  { num: 3, content: '', class: '' },
  { num: 4, content: ' about = computed() => {', class: '' },
  { num: 5, content: '  return (', class: '' },
  { num: 6, content: '    <div class="about">', class: '' },
  { num: 7, content: '      <h2>About Me</h2>', class: '' },
  { num: 8, content: '      <p>I\'m a passionate developer specializing in modern web technologies.</p>', class: '' },
  { num: 9, content: '      <p>With expertise in Vue, Nuxt JS, and learning AI integration, I build efficient and scalable applications.</p>', class: '' },
  { num: 10, content: '      <h3>Skills</h3>', class: '' },
  { num: 11, content: '      <ul>', class: '' },
  { num: 12, content: '        <li>Vue & Nuxt JS</li>', class: '' },
  { num: 13, content: '        <li>TypeScript</li>', class: '' },
  { num: 14, content: '        <li>AI Integration</li>', class: '' },
  { num: 15, content: '        <li>Tailwind CSS</li>', class: '' },
  { num: 16, content: '        <li>Responsive Design</li>', class: '' },
  { num: 17, content: '      </ul>', class: '' },
  { num: 18, content: '      <h3>Experience</h3>', class: '' },
  { num: 19, content: '      <p>Over 2 years of experience in web development.</p>', class: '' },
  { num: 20, content: '    </div>', class: '' },
  { num: 21, content: '  )', class: '' },
  { num: 22, content: '};', class: '' },
  { num: 23, content: '', class: '' },
  { num: 24, content: '<ViewAbout :content="about" />', class: '' },
];

const getCodeClasses = (line: any) => {
  const baseClass = line.class || '';
  if (line.num === 1) return ['comment'];
  else if (line.num === 2) return ['has-imports'];
  else if (line.num === 4) return ['declaration'];
  else if (line.num >= 6 && line.num <= 20) return ['jsx-syntax'];
  return [baseClass];
};
</script>

<template>
  <div class="code-editor">
    <div class="code-content">
      <div class="code-line" v-for="line in codeLines" :key="line.num">
        <div class="line-numbers">{{ line.num }}</div>
        <div class="code-text" :class="getCodeClasses(line)">
          {{ line.content }}
        </div>
      </div>
    </div>
  </div>
  <div class="preview">
    <div style="padding: 40px;">
      <h2>About Me</h2>
      <p>I'm a passionate developer specializing in modern web technologies.</p>
      <p>With expertise in Vue, Nuxt JS, and learning AI integration, I build efficient and scalable applications.</p>
      
      <h3>Skills</h3>
      <ul>
        <li>Vue & Nuxt JS</li>
        <li>TypeScript</li>
        <li>AI Integration</li>
        <li>Tailwind CSS</li>
        <li>Vuetify</li>
        <li>Node.js</li>
        <li>Responsive Design</li>
      </ul>
      
      <h3>Experience</h3>
      <p>Over 2 years of experience in web development, working with established companies delivering high-quality solutions.</p>
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
  white-space: pre;
}

/* New class-based styling approach */
.code-text.comment {
  color: #6e6a86;
}

.code-text.has-imports .keyword,
.code-text.declaration .keyword {
  color: #c4a7e7;
}

.code-text.has-imports {
  color: #e0def4;
}

.code-text.has-imports::before {
  content: "import ";
  color: #c4a7e7;
}

.code-text.has-imports::after {
  content: "";
}

.code-text.declaration::before {
  content: "const ";
  color: #c4a7e7;
}

.code-text.declaration .variable {
  color: #9ccfd8;
}

/* Original styles kept for reference */
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

.preview {
  flex: 1;
  background-color: #13111c;
  overflow-y: auto;
}
</style>