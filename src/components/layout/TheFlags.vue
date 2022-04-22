<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { countrySelected } from "../../store.js";

const regions = ref([
  { name: "Africa", link: "/region/africa" },
  { name: "America", link: "/region/america" },
  { name: "Asia", link: "/region/asia" },
  { name: "Europe", link: "/region/europe" },
  { name: "Oceania", link: "/region/oceania" },
]); // arr with all regions to be filtered

const filterLink = ref("all"); // link to what to fetch

const countries = ref(null); //API object
const searchCountry = ref(""); //Country selected by the user
const router = useRouter(); //push to a new url
const showFilterMenu = ref(false); //show the filter menu '-'

const loadCountries = async () => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/${filterLink.value}`
  );
  countries.value = response.data;
}; // Get API object

const selectCountry = function (country) {
  countrySelected.value = country;
  router.push(`/country-details/${country.name.common}`);
  console.log(country.capital[0]);
}; // Select a country and change url to details of that country

const openRegionFilter = function () {
  showFilterMenu.value = !showFilterMenu.value;
  console.log(showFilterMenu.value); //Open the filter menu
};

const changeRegion = function (link) {
  filterLink.value = link;
  loadCountries();
  showFilterMenu.value = !showFilterMenu.value;
}; // do a new request on the api but with filters on

const teste = function () {
  console.log(`/name/${searchCountry.value}`);
  filterLink.value = `/name/${searchCountry.value}`;
  loadCountries();
};

onMounted(loadCountries()); // Call the API on mounted
</script>

<template>
  <section class="flags">
    <div class="flags__form">
      <div class="form-control">
        <input
          type="text"
          class="flags__search"
          placeholder="Search for a country"
          v-model="searchCountry"
          @keyup="teste"
        />
      </div>
      <div class="form-control relative">
        <button @click="openRegionFilter" class="flags__filter">
          Filter by Region
        </button>
        <ul
          class="left-0 flex flex-col gap-1 text-black bg-white dark:bg-slate-800 dark:text-white px-9 py-2 absolute"
          :class="{ hidden: !showFilterMenu }"
        >
          <li v-for="region in regions" :key="region.link">
            <button @click="changeRegion(region.link)">
              {{ region.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <ul v-if="countries !== null" class="flags__cards">
      <li
        class="flags__card"
        v-for="country in countries"
        :key="country.name.common"
        @click="selectCountry(country)"
      >
        <img class="border border-black" :src="country.flags.png" alt="" />

        <ul>
          <li>
            <h2 class="font-bold text-2xl mb-2">{{ country.name.common }}</h2>
          </li>
          <li>
            <span class="font-bold">Population: </span>{{ country.population }}
          </li>
          <li><span class="font-bold">Region: </span>{{ country.region }}</li>
          <li><span class="font-bold">Capital: </span>{{ country.capital }}</li>
        </ul>
      </li>
    </ul>

    <div v-else class="text-center">
      <svg
        role="status"
        class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.flags {
  @apply min-h-screen bg-gray-50 dark:bg-slate-900 h-full  py-10;
}

.flags__form {
  @apply px-5 mb-10  flex flex-col md:flex-row md:justify-between justify-center items-center  gap-10;
}

.form-control {
  @apply w-full;
}

.flags__search {
  @apply py-2 px-3 shadow-xl bg-white dark:bg-slate-800 dark:text-white w-full  max-w-md border border-black;
}

.flags__filter {
  @apply relative py-2 px-3 shadow-xl text-black  bg-white dark:bg-slate-800 dark:text-white border border-black;
}

.flags__cards {
  @apply grid grid-cols-1 gap-5 mx-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

.flags__card {
  @apply bg-white shadow-2xl flex items-center flex-col  text-black py-8 gap-6 px-2 cursor-pointer dark:bg-slate-800 border border-black dark:text-white rounded-lg;
}
</style>
