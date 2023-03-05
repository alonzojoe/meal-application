<template>
    <div class="bg-white shadow rounded-xl">
        <router-link :to="`/meal/${meal.idMeal}`">
            <img :src="meal.strMealThumb" alt="meal" class="rounded-t-xl w-full h-48 object-cover"/>
        </router-link>
        <div class="px-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p class="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus provident, est, incidunt.
            </p>
            <div class="mb-4 flex items-center justify-between">
                <ControlButton :href="meal.strYoutube">YouTube</ControlButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import ControlButton from './ControlButton.vue'

const {meal} = defineProps({
    meal: Object
})

</script>