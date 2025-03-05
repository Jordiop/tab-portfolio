<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref('Home.vue')

const navigateTo = (path: string, tab: string) => {
  router.push(path)
  activeTab.value = tab
}
</script>

<template>
  <div id="app">
    <div class="sidebar">
      <!-- icon of the letter J-->
      <div class="sidebar-icon" @click="navigateTo('/', 'Home.vue')" :class="{ active: activeTab === 'Home.vue' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
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

<style>
/* Additional styles for the enhanced tab-based layout */
.sidebar-icon.active {
  color: #e0def4;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* The rest of the styles are defined in main.css */
</style>