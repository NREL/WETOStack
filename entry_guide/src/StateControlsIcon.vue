<script setup>
defineProps(['name'])
</script>

<template>
  <svg v-if="name === 'reset'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="#9b9b9b"
    fill="none"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path
      d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
  </svg>

  <svg v-else-if="name === 'restore'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="m12 17l4-4l-1.4-1.4l-1.6 1.55V9h-2v4.15L9.4 11.6L8 13zm-6 5q-.825 0-1.412-.587T4 20V8l6-6h8q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4h-7.15L6 8.85zm0 0h12z"
    />
  </svg>

  <svg v-else-if="name === 'add'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
  </svg>
</template>
