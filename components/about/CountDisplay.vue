<script setup lang="ts">
import { defineProps } from 'vue'

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  isUserCount: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div class="count-display">
    <div class="count-container">
      <p class="count">
        {{ count }}
      </p>
      <span v-if="isUserCount" class="user-count">
        {{ $t('billion') }}
      </span>
      <span class="plus-sign">+</span>
    </div>
    <p class="label">
      {{ $t(label) }}
    </p>
  </div>
</template>

<style scoped>
.count-display {
  @apply flex flex-col items-start;
}

.count-container {
  @apply flex items-center;
}

.count {
  @apply text-[44px] leading-[54px] md:text-[80px] md:leading-[97.52px] tracking-[-1] font-bold text-[#079BEE] flex items-end;
}

.user-count {
  @apply text-[22px] md:text-[40px] font-bold text-[#079BEE] pt-5 md:pt-7;
}

.plus-sign {
  @apply  text-[44px] leading-[54px] md:text-[80px] font-bold text-[#079BEE];
}

.label {
  @apply text-2xl font-semibold text-black;
}
</style>
