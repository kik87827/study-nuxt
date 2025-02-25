<template>
  <div>
    <h1>홈 페이지2</h1>
    <Logo />
    <br />
    <div>
      {{ products }}
    </div>
    <br />
  </div>
</template>

<script setup>
import { useAsyncData } from '#app'
import axios from 'axios'
import Logo from '~/components/Logo.vue'

// useAsyncData를 사용하여 데이터를 비동기적으로 가져옴
const { data: products, error } = await useAsyncData('products', async () => {
  const response = await axios.get('http://localhost:3000/products')
  return response.data // 데이터를 반환
})

// 페이지 메타데이터 설정
useHead({
  title: 'main page',
})

definePageMeta({
  title: 'main page',
})
</script>

<style scoped></style>
