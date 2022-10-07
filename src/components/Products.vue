<template>
    <div>
        <label for="product" class="relative text-gray-200 block">
            <MagnifyingGlassIcon
                class="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />
            <input id="product" class="h-12 w-full outline-none rounded-md shadow-xl bg-myrp-light pl-9" type="text"
                placeholder="Produto">
        </label>
        <div class="h-96 mt-4 rounded-md w-full bg-myrp-tertiary flex justify-center">
            <h2 class="mt-10 font-medium text-3xl text-gray-400">Adicione um ou mais produtos</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

</script>
