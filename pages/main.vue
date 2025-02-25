<template>
  <div>
    <h1>홈 페이지</h1>
    <Logo />
    <br />
    <div>
      {{ products }}
    </div>
    <br />
  </div>
</template>
<script setup>
import axios from 'axios'
import { useHead } from '#imports'
import Logo from '~/components/Logo.vue'

useHead({
  title: 'main page',
})

definePageMeta({
  title: 'main page',
})
</script>
<script>
export default {
  name: 'Main',
  data() {
    return {
      products: [],
    }
  },
  components: {
    Logo,
  },
  async created() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    this.products = response
  },
  asyncData() {},
}
</script>

<style scoped></style>
