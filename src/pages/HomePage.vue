<script setup>
import TheHeader from "../components/layout/TheHeader.vue";
import { ref } from "vue";

const isDark = ref(false);
const toggleDarkMode = function () {
  isDark.value = !isDark.value;
};
</script>

<template>
  <div :class="{ dark: isDark }">
    <the-header @toggle="toggleDarkMode"></the-header>
  </div>
</template>
