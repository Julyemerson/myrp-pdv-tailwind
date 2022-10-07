<template>
    <div class="flex flex-col space-y-4">
        <div
            class="side-btn transition delay-150 hover: -translate-y-1 hover:scale-110 hover:bg-myrp-button duration-300">
            <TagIcon class="w-8 h-8" />
            <span class="text-xs">Nova Venda</span>
        </div>
        <div
            class="side-btn transition delay-150 hover: -translate-y-1 hover:scale-110 hover:bg-myrp-button duration-300">
            <LockClosedIcon class="w-8 h-8" />
            <span class="text-xs">Fechar Caixa</span>
        </div>
        <div
            class="side-btn transition delay-150 hover: -translate-y-1 hover:scale-110 hover:bg-myrp-button duration-300">
            <SquaresPlusIcon class="w-8 h-8" />
            <span class="text-center text-xs">Sangria e Reforço</span>
        </div>
        <div
            class="side-btn transition delay-150 hover: -translate-y-1 hover:scale-110 hover:bg-myrp-button duration-300">
            <ArrowsRightLeftIcon class="w-8 h-8" />
            <span class="text-center text-xs">Troca Mercadoria</span>
        </div>
        <div
            class="side-btn transition delay-150 hover: -translate-y-1 hover:scale-110 hover:bg-myrp-button duration-300">
            <XCircleIcon class="w-8 h-8" />
            <span class="text-xs">Cancelamento</span>
        </div>
        <div
            class="side-btn transition delay-150 hover: -translate-y-1 hover:scale-110 hover:bg-myrp-button duration-300">
            <EllipsisHorizontalIcon class="w-8 h-8" />
            <span class="text-xs">Mais Ações</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TagIcon, LockClosedIcon, SquaresPlusIcon, ArrowsRightLeftIcon, XCircleIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/solid'

</script>
