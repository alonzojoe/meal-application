<template>
    <div class="bg-darkColorv2 h-full">
        <Navbar class="sticky top-0 z-50"/>
        <main class="relative">
          <router-view/>
        </main>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>