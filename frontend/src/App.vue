<script setup lang="ts">
import {ref} from 'vue'
import Nav from '@/components/Navbar.vue'

let msg: string = ref(1+1);
</script>

<template>
  <Nav />
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> {{ msg }}
  </p>
</template>

<style scoped></style>
