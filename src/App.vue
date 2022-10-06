<template>
  <div class="min-h-screen bg-myrp-dark">
    <div class="flex flex-col items-center h-screen">
      <Header class="mt-20"/>
      <Steps class="w-1/2"/>
      <Products class="w-1/2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Steps from "./components/Steps.vue";
import Products from "./components/Products.vue";

</script>