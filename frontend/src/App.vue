<script setup lang="ts">
import {ref} from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

let msg = ref(1+1);
</script>

<template>
  <Navbar />
  <h1>You did it!</h1>
  <p class="text-red-200">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> {{ msg }}
  </p>
  <Footer />
</template>

<style scoped></style>
