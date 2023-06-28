<template>
  <div class="grid grid-cols-1 gap-5 p-8 px-8 md:grid-cols-3">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center p-3 text-gray-600">
    There are no meal
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: Array,
  default: () => [],
});
</script>
