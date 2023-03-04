<template>
    <div class="flex flex-col p-8">
    

 
        <div class="flex justify-center gap-1">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <span>1:09:11</span>
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
