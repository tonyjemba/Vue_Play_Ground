<script setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <TheNavigation />

  <div class="container">
    <!-- the key enables vue to rerender the path everytime the pathname changes this solves the issue of path 
    changing and the page not updating -->
    <router-view v-slot="{ Component }">
      <!-- enabling transitions between pages -->
      <transition name="slide" mode="out-in">
        <div :key="$route.path">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>
<!-- transition styles -->
<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-1%);
}
</style>
