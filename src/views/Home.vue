<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="mb-4 text-4xl font-bold">Random Meal</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import axios from "../axiosClient";
import { onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axios.get("random.php").then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
