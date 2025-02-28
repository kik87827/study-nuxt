<template>
  <div>
    <h1>{{ error.statusCode }} - {{ error.message }}</h1>
    <p>죄송합니다. 해당 페이지를 찾을 수 없습니다.</p>
    <NuxtLink to="/">홈으로 이동</NuxtLink>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>
