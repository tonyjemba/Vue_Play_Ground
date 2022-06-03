<script setup>
import { computed } from "vue";
import sourceData from "../data.json";


const props = defineProps({
    id:{type: String , required: true}
});
// const id = parseInt(route.params.id);
const destinationWithId = computed(() =>
  sourceData.destinations.find((destination) => destination.id === parseInt(props.id))
);
</script>
<template>
  <section class="destination">
    <h1>{{ destinationWithId.name }}</h1>
    <div class="destination-details">
      <img
        :src="`/images/${destinationWithId.image}`"
        :alt="destinationWithId.name"
      />
      <p>{{ destinationWithId.description }}</p>
    </div>
  </section>
</template>
