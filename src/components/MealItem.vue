<template>
  <div class="trnsition-all rounded-xl bg-white shadow hover:scale-105">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="h-48 w-full rounded-xl object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
