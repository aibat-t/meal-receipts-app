<template>
  <div class="p-8">
    <h1 class="mb-4 text-4xl font-bold text-orange-500">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="mb-3 w-full rounded border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="mb-3 block rounded bg-white p-3 shadow"
      >
        <h3 class="mb-3 text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axios from "../axiosClient";
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axios.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
