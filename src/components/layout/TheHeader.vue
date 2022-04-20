<script setup></script>

<template>
  <section class="header">
    <h1 class="header__title">Where in the world?</h1>
    <button class="toggle" @click="$emit('toggle')">Dark Mode</button>
  </section>
</template>

<style scoped>
.header {
  @apply flex justify-between px-5 py-6  shadow-lg dark:bg-slate-800;
}

.header__title {
  @apply font-semibold dark:text-white;
}

.toggle {
  @apply dark:text-white;
}
</style>
