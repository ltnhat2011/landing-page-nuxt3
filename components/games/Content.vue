<script setup lang="ts">
import { computed } from 'vue'
import { game } from '~/data/games'

const games = computed(() => game)

function isEvenColumn(index: number): boolean {
  const columnNumber = (index % 4) + 1
  return columnNumber % 2 === 0
}
</script>

<template>
  <div class="container flex flex-col items-center gap-6 mb-20">
    <h2 class="title">
      {{ $t('game.title') }}
    </h2>
    <p class="description">
      {{ $t('game.description') }}
    </p>
  </div>
  <div class="container mx-auto p-4 3xl:max-w-[1920px]">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <WrappersCard
        v-for="(game, index) in games"
        :key="game.id"
        :game="game"
        :class="{ 'translate-y-15': isEvenColumn(index) }"
      />
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply font-black text-[40px] leading-[50px] tracking-[0.6px];
  @apply md:text-6xl md:tracking-[3.6px] md:leading-[60px];
}

.description {
  @apply max-w-[860px] text-center text-sm text-[#757575];
}

.translate-y-15 {
  @apply translate-y-[60px];
}
</style>
