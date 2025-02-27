<template>
  <div>
    <p>라우트 네임 - {{ $route.name }}</p>
    <h1>상품 페이지</h1>
    <ul>
      <li>상품 1</li>
      <li>상품 2</li>
      <li>상품 3</li>
    </ul>
  </div>
</template>

<script>
import { useHead } from "#imports";

useHead({
  title: "Product page",
});

export default {
    name: "Product",
    components: {},
};
</script>

<style scoped></style>
