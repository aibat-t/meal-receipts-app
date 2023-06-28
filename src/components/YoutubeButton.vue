<template>
  <a
    :href="href"
    target="_blank"
    class="rounded border-2 border-orange-600 bg-orange-500 px-3 py-2 text-white transition-colors hover:bg-orange-600"
  >
    <slot>Youtube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
