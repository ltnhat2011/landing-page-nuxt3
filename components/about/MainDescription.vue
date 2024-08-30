<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CountDisplay from './CountDisplay.vue'
import InfoItem from './InfoItem.vue'

// I18n setup
const { t } = useI18n()

// Counter logic
const userCount = ref(0)
const gameCount = ref(0)

const targetUserCount = 600
const targetGameCount = 135

function startCounting(
  currentValue: number,
  targetValue: number,
  duration: number,
  updateFn: (value: number) => void,
) {
  const increment = targetValue / (duration / 12)
  const updateCounter = () => {
    currentValue += increment
    if (currentValue >= targetValue) {
      updateFn(targetValue)
    }
    else {
      updateFn(Math.ceil(currentValue))
      requestAnimationFrame(updateCounter)
    }
  }
  requestAnimationFrame(updateCounter)
}

onMounted(() => {
  startCounting(0, targetUserCount, 2500, value => (userCount.value = value))
  startCounting(0, targetGameCount, 2500, value => (gameCount.value = value))
})

// Benefits data
const benefits = computed(() => [
  {
    icon: '/about/Info1.svg',
    title: t('about.benefits.info1.title'),
    description: t('about.benefits.info1.description'),
  },
  {
    icon: '/about/Info2.svg',
    title: t('about.benefits.info2.title'),
    description: t('about.benefits.info2.description'),
  },
  {
    icon: '/about/Info3.svg',
    title: t('about.benefits.info3.title'),
    description: t('about.benefits.info3.description'),
  },
])
</script>

<template>
  <div id="about" class="container flex flex-col md:flex-row gap-10 mt-16 md:mt-32">
    <div class="about-left">
      <div class="about-header">
        <h2 class="about-title">
          {{ $t('about.title') }}
        </h2>
        <p class="about-description">
          {{ $t('about.description') }}
        </p>
      </div>
      <div class="about-counters">
        <CountDisplay :count="userCount" label="about.users" :is-user-count="true" />
        <CountDisplay :count="gameCount" label="about.game" :is-user-count="false" />
      </div>
    </div>
    <div class="about-info">
      <InfoItem
        v-for="(item, index) in benefits"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
  <AboutImageGroup />
</template>

<style scoped>
.about-left {
  @apply flex flex-col flex-1 gap-20 px-5;
}

.about-header {
  @apply flex flex-col gap-10;
}

.about-title {
  @apply text-[40px] leading-[50px] tracking-[0.6px] md:text-6xl md:leading-[60px] md:tracking-[3.6px] font-black;
}

.about-description {
  @apply text-sm text-[#757575];
}

.about-counters {
  @apply flex flex-row md:flex-col gap-10;
}

.about-info {
  @apply flex-1 flex flex-col gap-10 px-5 py-10 md:px-[75px] md:py-[113px] justify-between bg-[#eee];
}
</style>
