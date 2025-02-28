<template>
  <div class="app">
    <main>
      <div><input type="text" /></div>
      <ul class="">
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            :src="product.imageUrl"
            :alt="product.name"
            class="product-image"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { useAsyncData } from '#app'
import axios from 'axios'

// useAsyncData를 사용하여 데이터를 비동기적으로 가져옴
const { data: products, error } = await useAsyncData('products', async () => {
  const response = await axios.get('http://localhost:3000/products')
  const resfilter = response.data.map((item) => ({
    ...item,
    imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  }))
  return resfilter // 데이터를 반환
})

/*
const { data: products, error } = await useAsyncData('products', async () => {
  const response = await axios.get('http://localhost:3000/products')
  const productsFilter = response.data.map((item) => ({
    ...item,
    imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  }))
  return { productsFilter } // 데이터를 반환
})
*/

// 페이지 메타데이터 설정
useHead({
  title: 'main page',
})

definePageMeta({
  title: 'main page',
})

function moveToDetailPage(id) {
  const router = useRouter()
  router.push('/detail/' + id)
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
