export default defineNuxtRouteMiddleware((to) => {
  if (!to.matched.length) {
    return navigateTo("/404", { redirectCode: 404 });
  }
});
