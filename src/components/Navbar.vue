<template>
    <header class="bg-darkColor shadow-md h-16 flex justify-between items-stretch">
        <router-link :to="{name:'home'}" class="text-white inline-flex items-center h-full px-5">Home</router-link>
        <div class="flex items-center gap-1">
          <router-link :to="{name:'byName'}" class="text-white inline-flex items-center px-2 h-full transition-colors hover:bg-purple-800">Search Meals</router-link>
          <router-link to="/by-letter/A" class="text-white inline-flex items-center px-2 h-full transition-colors hover:bg-purple-800">Meals By Letter</router-link>
          <router-link :to="{name:'Ingredients'}" class="text-white inline-flex items-center px-2 h-full transition-colors hover:bg-purple-800">Meals By Ingredients</router-link>
        </div>
    </header>
</template>