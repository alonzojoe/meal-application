<template>
    <div>
        <div class="flex justify-center gap-1">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter">
                <span :class="selectedLetter == letter ? 'font-semibold' : '' ">{{ letter }}</span>
            </router-link>
        </div>

        <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal in meals.meals" :key="meal.idMeal" :meal="meal"/>
        </div>
        <!-- <span>2:05:11</span>{{ selectedLetter }} -->
    </div>
</template>


<script setup>
import { computed,onMounted,ref,watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const selectedLetter = computed(()=> route.params.letter)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
const meals = computed(()=> store.state.mealsByLetter)

watch(route, ()=> {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>