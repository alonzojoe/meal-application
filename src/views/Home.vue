<template>
    <div class="flex flex-col p-8">
    
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store'
import api from '../api'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
const ingredients = ref([])

onMounted(async ()=> {
    const response = await api.get('/list.php?i=list')
    ingredients.value = response.data
})

</script>
