<template>
  <div>
    <h1>홈 페이지</h1>
    <Logo />
  </div>
</template>
<script setup>
import { useHead } from "#imports";
import Logo from "~/components/Logo.vue";

useHead({
  title: "main page",
});

definePageMeta({
  title: "main page",
});
</script>
<script>
export default {
  name: "Main",
  components: {
    Logo,
  },
};
</script>

<style scoped></style>
