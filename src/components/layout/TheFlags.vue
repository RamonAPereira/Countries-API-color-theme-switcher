<script setup>
import axios from "axios";
import { ref } from "vue";

const countries = ref(null);

const loadCountries = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  countries.value = response.data;
  console.log(countries.value);
  console.log(response.data);
};

loadCountries();
</script>

<template>
  <section class="flags">
    <form class="flags__form" @click.prevent="">
      <div class="form-control">
        <input
          type="text"
          class="flags__search"
          placeholder="Search for a country"
        />
      </div>
      <div class="form-control">
        <button class="flags__filter">Filter by Region</button>
      </div>
    </form>
    <ul class="flags__cards">
      <li
        class="flags__card"
        v-for="country in countries"
        :key="country.name.common"
      >
        <div class="text-9xl">{{ country.flag }}</div>
        <ul>
          <li>
            <h2>{{ country.name.common }}</h2>
          </li>
          <li><span>Population: </span>{{ country.population }}</li>
          <li><span>Region: </span>{{ country.region }}</li>
          <li><span>Capital: </span>{{ country.capital }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.flags {
  @apply bg-gray-50 dark:bg-slate-900 h-full w-screen py-10;
}

.flags__form {
  @apply px-5 mb-10  flex flex-col md:flex-row md:justify-between justify-center items-center w-screen gap-10;
}

.form-control {
  @apply w-full;
}

.flags__search {
  @apply py-2 px-3 shadow-xl bg-white dark:bg-slate-800 dark:text-white w-full  max-w-md;
}

.flags__filter {
  @apply py-2 px-3 shadow-xl text-black  bg-white dark:bg-slate-800 dark:text-white;
}

.flags__cards {
  @apply grid grid-cols-1 gap-5 mx-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

.flags__card {
  @apply bg-white shadow-2xl flex items-center flex-col  text-black  p-2 dark:bg-slate-800 dark:text-white;
}
</style>
