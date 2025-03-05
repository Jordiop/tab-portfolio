<script setup lang="ts">
const codeLines = [
  { num: 1, content: '// Home.vue - Developer Portfolio', class: 'comment' },
  { num: 2, content: 'import computed from "Vue";', class: '' },
  { num: 3, content: '', class: '' },
  { num: 4, content: 'const home =  computed() => {', class: '' },
  { num: 5, content: '  return (', class: '' },
  { num: 6, content: '    <div class="main">', class: '' },
  { num: 7, content: '      <div class="greeting">', class: '' },
  { num: 8, content: '        Hello <span>👋</span>, I\'m', class: '' },
  { num: 9, content: '      </div>', class: '' },
  { num: 10, content: '      <h1 class="name">', class: '' },
  { num: 11, content: '        Jordi', class: 'variable' },
  { num: 12, content: '        <br/>', class: '' },
  { num: 13, content: '        Osarenkhoe', class: 'variable' },
  { num: 14, content: '      </h1>', class: '' },
  { num: 15, content: '      <div class="subtitle">', class: '' },
  { num: 16, content: '        I Fix, Optimize & Build <span class="highlight">{ Nuxt JS }</span> &', class: '' },
  { num: 17, content: '        <span class="highlight-react">{ VUE JS }</span> Apps', class: '' },
  { num: 18, content: '      </div>', class: '' },
  { num: 19, content: '      <div class="buttons">', class: '' },
  { num: 20, content: '        <button class="btn btn-primary">See My Work</button>', class: '' },
  { num: 21, content: '        <br/>', class: '' },
  { num: 22, content: '      </div>', class: '' },
  { num: 23, content: '    </div>', class: '' },
  { num: 24, content: '  );', class: '' },
  { num: 25, content: '};', class: '' },
  { num: 26, content: '', class: '' },
  { num: 27, content: '<template>', class: '' }, //
  { num: 28, content: '   <ViewHome :content="home" />', class: '' },
  { num: 28, content: '<template/>', class: '' },
];
</script>

<template>
  <div class="code-editor">
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
    <div class="hero-section">
      <div class="greeting">
        Hello <span class="hand-emoji">👋</span>, I'm
      </div>
      <h1 class="name">Jordi<br>Osarenkhoe</h1>
      <div class="tagline">
        I Fix, Optimize & Build <span class="highlight"> Nuxt JS </span> & 
        <span class="highlight-react"> VUE JS </span> Apps
      </div>
      <div class="social-links">
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/jordiop/" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/jordiop" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="#" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
        </div>
      </div>
      <div class="buttons">
        <button class="btn btn-primary" @click="$router.push('/projects')">See My Work</button>
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
  font-size: 15px;
}

.code-text {
  padding-left: 15px;
  color: #e0def4;
  font-size: 14px;
  font-family: 'JetBrains Mono', monospace;
  white-space: pre;
}

.comment {
  color: #6e6a86;
}

.variable {
  color: #c4a7e7;
}

.preview {
  flex: 1;
  background-color: #13111c;
  overflow-y: auto;
}

.social-links {
  margin-top: 2rem;
}

.social-links h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e0def4;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #2a2438;
  border-radius: 50%;
  color: #e0def4;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: #c4a7e7;
  color: #13111c;
}
</style>