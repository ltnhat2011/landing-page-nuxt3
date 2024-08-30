<script setup lang="ts">
import { defineProps } from 'vue'

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="info-item">
    <img :src="icon" :alt="title" class="info-item-icon">
    <div class="info-item-text">
      <p class="info-item-title">
        {{ title }}
      </p>
      <p class="info-item-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.info-item {
  @apply flex gap-6 items-start;
}

.info-item-icon {
  @apply w-12 h-12;
}

.info-item-text {
  @apply flex flex-col gap-2;
}

.info-item-title {
  @apply text-2xl leading-8 font-bold;
}

.info-item-description {
  @apply text-sm text-[#757575];
}
</style>
