<script setup>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navigation />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<style>
/* Add any additional styles here */
main {
  min-height: calc(
    100vh - 100px
  ); /* Adjust based on your header and footer height */
}
</style>
