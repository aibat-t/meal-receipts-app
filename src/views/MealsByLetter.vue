<template>
  <div class="p-8 pb-0">
    <h1 class="mb-4 text-4xl font-bold text-orange-500">Meals by Letter</h1>
  </div>
  <div class="mb-6 mt-2 flex flex-wrap justify-center gap-3 px-8">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters.split('')"
      :key="letter"
      class="h-2 w-2 items-center justify-center transition-all hover:scale-150 hover:text-orange-500"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import store from "../store";
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
