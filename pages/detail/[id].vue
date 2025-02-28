<template>
  <div>
    <h1>상품 상세 페이지</h1>
    <p>상품 ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

definePageMeta({
  validate: (route) => {
    return !!route.params.id // id가 없으면 404 처리
  },
})

const route = useRoute()
const id = route.params.id
</script>
