<template>
  <div class="mx-auto max-w-[800px] p-8">
    <h1 class="mb-5 text-4xl font-bold text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 py-2 text-lg sm:grid-cols-3">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strCategory }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="mb-2 text-2xl font-semibold">Ingredients</h2>
        <ul>
          <template v-for="(i, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="mb-2 text-2xl font-semibold">Measures</h2>
        <ul>
          <template v-for="(i, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <YoutubeButton :href="meal.strYoutube">Go to YouTube</YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="ml-3 rounded border-2 border-transparent bg-indigo-500 px-3 py-2 text-white transition-colors hover:bg-indigo-600 hover:text-white"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axios.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
