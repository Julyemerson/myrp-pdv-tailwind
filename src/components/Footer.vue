<template>
    <div class="mt-4 flex justify-between px-4 py-6 bg-myrp-tertiary rounded-lg">
        <ul class="flex space-x-7">
            <li>
                <span class="text-sm text-gray-300">Desconto</span>
                <h3 class="text-2xl text-gray-300 font-semibold">R$0,00</h3>
            </li>
            <li>
                <span class="text-sm text-gray-300">Recebido</span>
                <h3 class="text-2xl text-gray-300 font-semibold">R$0,00</h3>
            </li>
            <li>
                <span class="text-sm text-gray-300">Troca</span>
                <h3 class="text-2xl text-gray-300 font-semibold">R$0,00</h3>
            </li>
            <li>
                <span class="text-sm text-gray-300">Total</span>
                <h3 class="text-2xl text-myrp-secondary font-semibold">R$0,00</h3>
            </li>
        </ul>
        <button class="bg-myrp-button w-36 text-gray-300 px-4 py-2 uppercase rounded-lg">
            PowerUp
        </button>
        <button class="bg-myrp-button flex w-36 justify-center items-center py-2 
            rounded-lg text-gray-300 
            uppercase text-sm font-medium">

            <ArrowRightIcon class="mr-2 w-6 h-6" />
            Continuar
        </button>
    </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

</script>
