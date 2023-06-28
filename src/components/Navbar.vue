<template>
  <header class="flex h-16 items-stretch justify-between bg-white shadow">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex h-full items-center px-5 font-bold text-orange-500"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex h-full items-center px-2 transition-colors hover:bg-orange-500 hover:text-white"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex h-full items-center px-2 transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex h-full items-center px-2 transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
