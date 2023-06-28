<template>
  <div class="p-8 pb-0">
    <h1 class="mb-4 text-4xl font-bold text-orange-500">
      Meals for {{ ingredient.strIngredient }}
    </h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { useRoute } from "vue-router";
import store from "../store";
import { onMounted, computed } from "vue";
import Meals from "../components/Meals.vue";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
