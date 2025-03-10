<script setup lang="ts">
const codeLines = [
  { num: 1, content: '// Welcome to my Portfolio! 🚀', class: 'comment' },
  { num: 2, content: '<template>', class: '' },
  { num: 3, content: '    <div class="about">', class: '' },
  { num: 4, content: '      <h2>About Me</h2>', class: '' },
  { num: 5, content: '      <p>I\'m a passionate developer specializing in modern web technologies.</p>', class: '' },
  { num: 6, content: '      <p>With expertise in Vue, Nuxt JS, and learning AI integration, I build efficient and scalable applications.</p>', class: '' },
  { num: 7, content: '      <h3>Skills</h3>', class: '' },
  { num: 8, content: '      <ul>', class: '' },
  { num: 9, content: '        <li>Vue & Nuxt JS</li>', class: '' },
  { num: 10, content: '        <li>TypeScript</li>', class: '' },
  { num: 11, content: '        <li>AI Integration</li>', class: '' },
  { num: 12, content: '        <li>Tailwind CSS</li>', class: '' },
  { num: 13, content: '        <li>Responsive Design</li>', class: '' },
  { num: 14, content: '      </ul>', class: '' },
  { num: 15, content: '      <h3>Experience</h3>', class: '' },
  { num: 16, content: '      <p>Over 2 years of experience in web development.</p>', class: '' },
  { num: 17, content: '    </div>', class: '' },
  { num: 18, content: '</template>', class: '' },
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
  <div class="code-editor hidden md:block overflow-hidden md:overflow-auto">
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
      <h1>About Me</h1>
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