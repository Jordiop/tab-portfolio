<script setup lang="ts">
import { ref, onMounted } from 'vue'

const codeLines: Array<{ num: number; content: string; class: string }> = [
  { num: 1, content: '// Home.vue - Developer Portfolio', class: 'comment' },
  { num: 2, content: '<setup lang="ts">', class: 'keyword' },
  { num: 3, content: 'import { ref, onMounted } from \'vue\'', class: 'keyword' },
  { num: 4, content: '', class: '' },
  { num: 5, content: 'const name = ref(\'Jordi Osarenkhoe\')', class: 'variable' },
  { num: 6, content: 'const role = ref(\'Full Stack Developer\')', class: 'variable' },
  { num: 7, content: 'const skills = [', class: 'punctuation' },
  { num: 8, content: '  \'Vue.js\',', class: 'string' },
  { num: 9, content: '  \'Nuxt.js\',', class: 'string' },
  { num: 10, content: '  \'TypeScript\',', class: 'string' },
  { num: 11, content: '  \'Tailwind CSS\'', class: 'string' },
  { num: 12, content: ']', class: 'punctuation' },
  { num: 13, content: '', class: 'keyword' },
  { num: 14, content: '', class: '' },
  { num: 15, content: '<template>', class: 'keyword' },
  { num: 16, content: '  <div class="hero-section">', class: 'punctuation' },
  { num: 17, content: '    <div class="greeting">', class: 'punctuation' },
  { num: 18, content: '      Hello <span>👋</span>, I\'m', class: 'string' },
  { num: 19, content: '    </div>', class: 'punctuation' },
  { num: 20, content: '    <h1 class="name">{{ name }}</h1>', class: 'string' },
  { num: 21, content: '    <div class="tagline">', class: 'punctuation' },
  { num: 22, content: '      I Fix, Optimize & Build', class: 'string' },
  { num: 23, content: '      <span class="highlight">Nuxt.js</span> &', class: 'string' },
  { num: 24, content: '      <span class="highlight-react">Vue.js</span> Apps', class: 'string' },
  { num: 25, content: '    </div>', class: 'punctuation' },
  { num: 26, content: '  </div>', class: 'punctuation' },
  { num: 27, content: '</template>', class: 'keyword' },
];

const isTyping = ref(false)
const typedText = ref('')
const fullText = 'Jordi Osarenkhoe'

onMounted(() => {
  setTimeout(() => {
    typeWriter()
  }, 1000)
})

const typeWriter = () => {
  isTyping.value = true
  let i = 0
  const speed = 100

  const type = () => {
    if (i < fullText.length) {
      typedText.value += fullText.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      isTyping.value = false
    }
  }
  type()
}
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
    <div class="hero-section">
      <div class="greeting">
        Hello <span class="hand-emoji">👋</span>, I'm
      </div>
      <h1 class="name">
        <span v-if="isTyping">{{ typedText }}<span class="cursor">|</span></span>
        <span v-else>{{ fullText }}</span>
      </h1>
      <div class="tagline">
        I Fix, Optimize & Build 
        <span class="highlight">Nuxt.js</span> & 
        <span class="highlight-react">Vue.js</span> Apps
      </div>
      
      <div class="developer-image-container">
        <img src="@/assets/images/meirl.jpg" alt="Jordi Osarenkhoe" class="developer-img">
        <div class="image-overlay">
          <div class="overlay-content">
            <span class="overlay-text">Yap, that's me</span>
          </div>
        </div>
      </div>

      <div class="social-links">
        <h3>Connect with me</h3>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/jordiop/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/jordiop" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://twitter.com/jordiscript" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
        </div>
      </div>

      <div class="buttons">
        <button class="btn btn-primary" @click="$router.push('/projects')">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
          </svg>
          See My Work
        </button>
        <a href="mailto:jordi@example.com" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Get In Touch
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cursor {
  animation: blink 1s infinite;
  color: var(--accent-color);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.developer-image-container {
  position: relative;
  width: 250px;
  height: 250px;
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  transition: all 0.3s ease;
}

.developer-image-container:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-heavy);
}

.developer-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.developer-image-container:hover .developer-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.developer-image-container:hover .image-overlay {
  transform: translateY(0);
}

.overlay-content {
  text-align: center;
}

.overlay-text {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .developer-image-container {
    width: 150px;
    height: 150px;
  }
}
</style>