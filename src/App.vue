<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import IconMe from '@/components/icons/IconMe.vue'

const router = useRouter()
const activeTab = ref('Home.vue')
const isDarkMode = ref(false)

const navigateTo = (path: string, tab: string) => {
  router.push(path)
  activeTab.value = tab
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDarkMode.value = savedTheme === 'dark'
  if (isDarkMode.value) document.body.classList.add('dark')
  else document.body.classList.remove('dark')
})
</script>

<template>
  <div id="app">
    <div class="sidebar">
      <div class="sidebar-icon" @click="navigateTo('/', 'Home.vue')" :class="{ active: activeTab === 'Home.vue' }">
        <IconMe fill="currentColor" />
      </div>
      <div class="sidebar-icon" @click="navigateTo('/', 'Home.vue')" :class="{ active: activeTab === 'Home.vue' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      </div>
      <div class="sidebar-icon" @click="navigateTo('/projects', 'Projects.vue')" :class="{ active: activeTab === 'Projects.vue' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>
      </div>
      <div class="sidebar-icon" @click="navigateTo('/about', 'About.vue')" :class="{ active: activeTab === 'About.vue' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
      </div>
      <div class="sidebar-icon" @click="toggleTheme">
        <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
    </div>
    <div class="main-content">
      <div class="tab-bar">
        <div 
          class="tab" 
          :class="{ active: activeTab === 'Home.vue' }"
          @click="navigateTo('/', 'Home.vue')"
        >
          Home.vue
        </div>
        <div 
          class="tab" 
          :class="{ active: activeTab === 'Projects.vue' }"
          @click="navigateTo('/projects', 'Projects.vue')"
        >
          Projects.vue
        </div>
        <div 
          class="tab" 
          :class="{ active: activeTab === 'About.vue' }"
          @click="navigateTo('/about', 'About.vue')"
        >
          About.vue
        </div>
      </div>
      <div class="content-area">
        <router-view v-slot="{ Component }">
          <transition>
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>