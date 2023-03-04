<template>
    <div class="p-8">
        <input 
        type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for Meals"
        @change="seachMeals()"
        />
    </div>
    <pre>{{ meals }}</pre>
</template>


<script setup>
import { ref,computed } from 'vue';
import store from '../store';

const keyword = ref('')
const meals = computed(()=> store.state.searchedMeals)

const seachMeals = () => {
   store.dispatch('searchMeals', keyword.value)
}

</script>