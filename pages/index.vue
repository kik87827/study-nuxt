<template>
  <div>Main</div>
</template>
<script setup>
import { useHead } from '#imports'
useHead({
  title: 'index page',
})

definePageMeta({
  title: 'main page',
})
</script>
<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style scoped></style>
