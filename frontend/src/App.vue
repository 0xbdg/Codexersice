<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '@/Components/Navbar.vue'
import Footer from '@/Components/Footer.vue'

let msg = ref(1 + 1);


</script>

<template>
    <Navbar />
    <h1>You did it!</h1>
    <p class="text-red-200">
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> {{ msg }}
    </p>
    <RouterView />
    <Footer />
</template>

<style scoped></style>
