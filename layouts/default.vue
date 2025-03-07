<template>
  <div>
    <header>
      <h1>{{ $route.name }} 페이지</h1>
      <nav>
        <NuxtLink to="/">홈페이지</NuxtLink>
        <NuxtLink to="/product">상품</NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>푸터</footer>
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {},
}
</script>

<style scoped></style>
