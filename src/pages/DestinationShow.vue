<script setup>
import {useRoute} from "vue-router";
import { computed } from "vue";
import sourceData from "../data.json";

const route = useRoute();
const id = parseInt(route.params.id);
const destinationWithId = computed(()=>sourceData.destinations.find(destination => destination.id === id));


</script>
<template>
<section class="destination">
    <h1>{{destinationWithId.name}}</h1>
    <div class="destination-details">
        <img :src="`/images/${destinationWithId.image}`" :alt="destinationWithId.name">
        <p>{{destinationWithId.description}}</p>
    </div>
</section>
</template>