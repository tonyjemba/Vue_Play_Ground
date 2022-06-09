<script setup>
import sourceData from "../data.json";
import { computed } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const props = defineProps({
  id: { type: Number, required: true },
  experienceSlug: { type: String, required: true },
});
const theDestination = computed(() =>
  sourceData.destinations.find(destination => destination.id === router.params.id)
);

const experience = computed(() =>
  theDestination.experiences.find(
     experience => experience.slug === router.params.experienceSlug
  )
);
</script>

<template>
  <section>
      
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>
