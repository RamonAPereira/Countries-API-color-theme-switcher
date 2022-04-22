<script setup>
import { countrySelected } from "../store.js";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = function () {
  router.push("/home");
};
</script>

<template>
  <section class="details">
    <div class="flex flex-col gap-8 sm:flex-1">
      <button @click="goBack" class="button border border-black">Back</button>
      <img
        class="border border-black"
        :src="countrySelected.flags.png"
        alt=""
      />
    </div>
    <div class="text-black dark:text-white flex flex-col gap-8 sm:flex-1">
      <div
        class="flex flex-col lg:flex-row gap-8 md:justify-center md:items-center md:mt-16"
      >
        <ul class="flex flex-col gap-2 sm:flex-1">
          <li>
            <h2 class="text-2xl font-bold">
              {{ countrySelected.name.common }}
            </h2>
          </li>
          <li>
            Native Name:
            <span>{{
              countrySelected.name.nativeName[
                Object.keys(countrySelected.name.nativeName)[0]
              ].official
            }}</span>
          </li>
          <li>
            Population: <span>{{ countrySelected.population }}</span>
          </li>
          <li>
            Region: <span>{{ countrySelected.region }}</span>
          </li>
          <li>
            Sub Region: <span>{{ countrySelected.subregion }}</span>
          </li>
          <li>
            Capital: <span>{{ countrySelected.capital[0] }}</span>
          </li>
        </ul>

        <ul class="flex flex-col gap-2 sm:flex-1">
          <li>
            Top Level Domain: <span>{{ countrySelected.tld[0] }}</span>
          </li>
          <li>
            Currencies:
            <span>{{
              countrySelected.currencies[
                Object.keys(countrySelected.currencies)[0]
              ].name
            }}</span>
          </li>
          <li>
            Languages:
            <span>{{
              countrySelected.languages[
                Object.keys(countrySelected.languages)[0]
              ]
            }}</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="font-semibold text-lg">Border Countries</h2>
        <ul class="flex gap-8">
          <li v-for="border in countrySelected.borders" :key="border">
            {{ border }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.details {
  @apply flex flex-col sm:flex-row py-6 gap-8 px-6  bg-gray-50 dark:bg-slate-900 min-h-screen md:px-20;
}

li {
  @apply font-bold;
}
span {
  @apply font-normal;
}

.button {
  @apply py-2 px-3 shadow-xl text-black  bg-white dark:bg-slate-800 dark:text-white max-w-fit;
}
</style>
