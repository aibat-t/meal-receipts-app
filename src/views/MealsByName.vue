<template>
  <div class="p-8 pb-0">
    <h1 class="mb-4 text-4xl font-bold text-orange-500">
      Search Meals by Name
    </h1>
  </div>
  <div class="p-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => {
  return store.state.searchedMeals;
});

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
