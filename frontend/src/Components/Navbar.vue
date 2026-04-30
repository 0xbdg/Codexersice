<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

let msg: string = ref("ini navbar")
</script>

<template>
    <nav>
        <RouterLink to="/">Index</RouterLink>
        <RouterLink to="/editor">Editor</RouterLink>
    </nav>
</template>
