<script setup>
import { computed } from "vue";
import sourceData from "../data.json";
import ExperienceCard from "../components/ExperienceCard.vue";
import GoBack from "../components/GoBack.vue";
const props = defineProps({
  //this id prop is served on every /destination/:id/:slug route
  id: { type: Number, required: true },
});
// const id = parseInt(route.params.id);
const destinationWithId = computed(() =>
  sourceData.destinations.find((destination) => destination.id === props.id)
);
</script>
<template>
  <div>
    <section class="destination">
      <h1>{{ destinationWithId.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img
          :src="`/images/${destinationWithId.image}`"
          :alt="destinationWithId.name"
        />
        <p>{{ destinationWithId.description }}</p>
      </div>
    </section>

    <section class="experiences">
      <h2>Top experiences in {{ destinationWithId.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destinationWithId.experiences"
          :key="experience.slug"
          :to="{
            name: 'experienceShow',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>
