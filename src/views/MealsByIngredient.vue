<template>
    <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal in meals.meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-if="meals.length" class="flex justify-center items-center text-textGray">
        There are no meals available.
    </div>
</template>


<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import MealItem from '../components/MealItem.vue';
import { useRoute } from 'vue-router';
import store from '../store';

const route = useRoute();

const meals = computed(()=> store.state.mealsByIngredients)

watch(()=> {
    route
    store.dispatch('searchMealsByIngredients', route.params.ingredient)
})

onMounted(() => {
    store.dispatch('searchMealsByIngredients', route.params.ingredient)
})

</script>