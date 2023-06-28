import axios from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axios.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axios.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ing) {
  axios.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}
