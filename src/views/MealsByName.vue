<template>
    <div class="p-8 pb-0">
        <input 
        type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for Meals"
        @keyup="seachMeals()"
        />
    </div>
    <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals.meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <router-link to="/">
                <img :src="meal.strMealThumb" alt="meal" class="rounded-t-xl w-full h-48 object-cover"/>
            </router-link>
            <div class="px-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus provident, est, incidunt.
                </p>
                <div class="mb-4 flex items-center justify-between">
                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 hover:text-white transition-colors">Youtube</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref,computed,reactive,onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import { searchMeals } from '../store/actions';

const route = useRoute()
const keyword = ref('')
const meals = computed(()=> store.state.searchedMeals)

const seachMeals = () => {
   store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name  
    if (keyword.value) {
        seachMeals()
    }
})

</script>