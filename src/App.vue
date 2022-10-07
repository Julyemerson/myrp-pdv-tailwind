<template>
  <div class="relative min-h-screen bg-myrp-dark">
    <div>
      <img :src="logo" class="absolute w-24 h-auto top-4 " alt="logo Myrp">
    </div>
    <div class="flex flex-col p-2 items-center min-h-screen">
      <Header class="mt-4 w-2/3" />
      <Steps class="w-2/3" />
      <Products class="w-2/3" />
      <Footer class="w-2/3" />
    </div>
    <div>
      <SideButtons class="absolute top-28 ml-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Steps from "./components/Steps.vue";
import Products from "./components/Products.vue";
import Footer from "./components/Footer.vue";
import SideButtons from "./components/SideButtons.vue";
import logo from "./assets/img/logo-myrp-colorido-branco.png"

</script>