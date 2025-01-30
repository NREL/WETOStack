<script setup>
defineProps(['name'])
</script>

<!-- Icons generated from https://iconsvg.xyz -->

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

  <svg v-else-if="name === 'screenshot'"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9b9b9b"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round">
    <g transform="translate(2 3)">
      <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/>
      <circle cx="10" cy="10" r="4"/>
    </g>
  </svg>

</template>
