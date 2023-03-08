<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4 text-white">Ingredients</h1>
        <router-link class="block bg-darkColor shadow-white rounded p-3 mb-3" :to="{name: 'byIngredient', params: {ingredient: ingredient.idIngredient}}" v-for="(ingredient,index) in ingredients" :key="ingredient.id">
            <h3 class="text-purple-800 font-bold text-2xl mt-2">{{ ingredient.strIngredient }}</h3>
            <p class="text-textGray">{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';

import api from '../api'

const ingredients = ref([])

onMounted(() => {
    api.get(`list.php?i=list`)
    .then(res => {
        ingredients.value = res.data.meals
    })
})
</script>