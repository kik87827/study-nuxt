<template>
  <div>
    <div class="container" v-if="product">
      <div class="main-panel">
        <img :src="product.imageUrl" :alt="product.name" />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <!-- <button type="button" @click="addToCart">Add to Cart</button> -->
      </div>
      <!-- <h1>상품 상세 페이지</h1> -->
      <!-- <p>상품 ID: {{ id }}</p> -->
      <!-- <div v-if="product">
        {{ product }}
        <img :src="product.imageUrl" :alt="product.name" />
        <p>name : {{ product.name }}</p>
        <p>price : {{ product.price }}</p>
      </div>
      <div v-else>로딩 중...</div> -->
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
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
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
