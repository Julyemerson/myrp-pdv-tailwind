<template>
    <div class="flex space-x-4">
        <select class="h-12 w-96 outline-none rounded-md shadow-xl bg-myrp-light p-2 text-gray-400" name="priceTable"
            id="price">
            <option value="products">Produtos</option>
            <option value="products">Tabela Luana Lopes</option>
            <option value="products">Tabela Teste</option>
        </select>

        <input class="h-12 w-80 text-gray-200 outline-none rounded-md shadow-xl bg-myrp-light p-2" type="text"
            placeholder="CPF/CNPJ do Cliente">

        <label for="salesMan" class="relative text-gray-200 block">
            <MagnifyingGlassIcon
                class="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />
            <input id="salesMan" class="h-12 w-80 outline-none rounded-md shadow-xl bg-myrp-light pl-9" type="text"
                placeholder="Vendedor">
        </label>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

</script>