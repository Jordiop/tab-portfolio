<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="fill" :width="size" :height="size">
    <path d="M9.078 3.965c-.588 0-1.143.295-1.143.884 0 .294.147.589.442.737l7.268 4.254a.86.86 0 0 1 .442.737.86.86 0 0 1-.442.737L8.377 16.454a.86.86 0 0 1-.442.737c-.588 0-1.143-.295-1.143-.884 0-.294.147-.589.442-.737l7.268-4.254a.86.86 0 0 1 .442-.737.86.86 0 0 1-.442-.737L8.377 7.439a.86.86 0 0 1-.442-.737c0-.589.555-.884 1.143-.884z"/>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: '#00dc82'
  },
  size: {
    type: [String, Number],
    default: 32
  }
});
</script>
