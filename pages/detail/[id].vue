<template>
  <div>
    <h1>상품 상세 페이지</h1>
    <!-- <p>상품 ID: {{ id }}</p> -->
    <div v-if="product">
      {{ product }}
      <img :src="product.imageUrl" :alt="product.name" />
      <p>name : {{ product.name }}</p>
      <p>price : {{ product.price }}</p>
    </div>
    <div v-else>로딩 중...</div>
  </div>
</template>

<script setup>
import { fetchProductById } from '@/api/index'
const route = useRoute()
definePageMeta({
  validate: (route) => {
    return !!route.params.id // id가 없으면 404 처리
  },
})

const {
  data: product,
  pending,
  error,
} = await useAsyncData(`product-${route.params.id}`, () =>
  fetchProductById(route.params.id).then((res) => res.data)
)
</script>

<!--
<template>
  <div>
    <h1>상세 페이지</h1>
    <div>
      {{ product }}
    </div>
  </div>
</template>
<script>
import { fetchProductByID } from '@/api/index'

export default {
  async asyncData({ params }){
    const response = await fetchProductByID(params);
    const product = response.data
    return { product }
  }
}
</script>
-->
