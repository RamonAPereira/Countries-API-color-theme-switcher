<script setup>
import TheHeader from "../components/layout/TheHeader.vue";
import TheFlags from "../components/layout/TheFlags.vue";
import { ref } from "vue";

const isDark = ref(false);
const toggleDarkMode = function () {
  isDark.value = !isDark.value;
};
</script>

<template>
  <div class="main" :class="{ dark: isDark }">
    <the-header @toggle="toggleDarkMode"></the-header>
    <the-flags></the-flags>
  </div>
</template>

<style scoped></style>
