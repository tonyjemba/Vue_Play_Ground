<script setup>
import TheNavigation from "./components/TheNavigation.vue"
</script>

<template>

<TheNavigation/>

<div class="container">
    <!-- the key enables vue to rerender the path everytime the pathname changes this solves the issue of path 
    changing and the page not updating -->
    <router-view :key="$route.path"></router-view>
</div>
</template>


