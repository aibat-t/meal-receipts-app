<template>
  <div>
    <navbar />
    <main>
      <div class="mx-auto max-w-[1200px]">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
