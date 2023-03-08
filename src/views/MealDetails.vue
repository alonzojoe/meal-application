<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-purple-800 text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" alt="meal" class="max-w-[100%]">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="text-textGray font-bold">Category:</strong> <span class="text-textGray">{{ meal.strCategory }}</span>
            </div>
            <div>
                <strong class="text-textGray font-bold">Area:</strong> <span class="text-textGray">{{ meal.strArea }}</span>
            </div>
            <div>
                <strong class="text-textGray font-bold">Tags:</strong> <span class="text-textGray">{{ meal.strTags }}</span>
            </div>
        </div>

        <div class="text-white my-3">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-textGray text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(element, index) in new Array(20)" :key="index">
                        <li class="text-textGray" v-if="meal[`strIngredient${index + 1}`]">
                         {{ index + 1 }}.  {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-textGray text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(element, index) in new Array(20)" :key="index">
                        <li class="text-textGray" v-if="meal[`strMeasure${index + 1}`] && meal[`strMeasure${index + 1}`]!=' '">
                         {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <ControlButton :href="meal.strYoutube">Go to YouTube</ControlButton>
                <a 
                :href="meal.strSource" 
                target="_blank" 
                class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                >
                View Original Source
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '../api';
import ControlButton from '../components/ControlButton.vue';


const route = useRoute()
const meal = ref({})

onMounted(() => {
    
    api.get(`lookup.php?i=${route.params.id}`)
    .then(res => {
        meal.value = res.data.meals[0]
    })
})

</script>