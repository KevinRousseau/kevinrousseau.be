<script setup lang="ts">
import HeroWave from '../components/HeroWave.vue';

</script>

<template>
  <div id="hero" class="w-screen min-h-screen">
    <HeroWave class="absolute bottom-0" />
  </div>
</template>

<style lang="scss">
@keyframes move_gradient {
  0% {
    background-position: 0 85%;
  }

  50% {
    background-position: 100% 20%;
  }

  100% {
    background-position: 0% 85%;
  }
}

#hero {
  background-image: linear-gradient(60deg, #A7DCE3, #8D8BBE);
  background-size: 600% 600%;
  animation: move_gradient 20s infinite ease-in-out;
}
</style>
