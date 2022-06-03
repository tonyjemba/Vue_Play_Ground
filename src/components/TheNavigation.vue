<script setup>
import dataSource from "../data.json";
</script>

<template>
  <div id="nav">
    <router-link id="logo" to="/">My Vue Router4</router-link>
    <router-link
      v-for="destination in dataSource.destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id ,slug: destination.slug} }"
    >
    {{ destination.name }}
    </router-link>
  </div>
</template>

<style lang="css">
#nav .my-active-link-class {
  color: cyan;
  border-bottom: 2px solid rosybrown;
}
</style>
