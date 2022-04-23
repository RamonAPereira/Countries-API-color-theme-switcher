import { ref } from "vue";
import axios from "axios";

export const filterLink = ref("all"); // link to what to fetch
export const countries = ref(null); //API object
export const countrySelected = ref(null);

export const loadCountries = async () => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/${filterLink.value}`
  );
  countries.value = response.data;
};
