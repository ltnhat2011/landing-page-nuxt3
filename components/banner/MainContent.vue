<script lang="ts" setup>
import { CountdownTimer } from '../ui/countdown-timer'

const { scrollToTop } = useNavigation()

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 100 // Adjust this value as needed
}

function handleScrollToTop() {
  scrollToTop()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="banner-container">
    <h2 class="banner-title">
      {{ $t('banner.title') }}
    </h2>
    <CountdownTimer class="banner-timer" />
    <p class="banner-description">
      {{ $t('banner.description') }}
    </p>
    <div class="input-container">
      <input
        id="input-field"
        type="text"
        :placeholder="$t('banner.placeholder')"
        class="input-field"
      >
      <button class="input-button">
        <img src="/banner/arrow-right.svg" alt="arrow-right" class="arrow-icon">
      </button>
    </div>
    <button class="button-scroll-to-top" @click="handleScrollToTop">
      <img
        src="/banner/down.svg"
        alt="Scroll to top"
        class="arrow-icon"
        :class="{ rotate: isScrolled }"
      >
    </button>
  </div>
</template>

<style scoped>
.banner-container {
  @apply flex flex-col mx-auto items-center pt-[15.4%] px-5;
}

.banner-title {
  @apply text-[40px] md:text-[80px] text-white leading-[120px] font-black mb-[21px];
}

.banner-timer {
  @apply md:mb-[97.1px] mb-2;
}

.banner-description {
  @apply max-w-[560px] text-lg text-white text-center;
}

.input-container {
  @apply relative w-full max-w-[560px] mt-8;
}

.input-field {
  @apply w-full h-14 pl-4 pr-16 text-sm text-[#545454] bg-white border-none rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500;
}

.input-field::placeholder {
  @apply text-[#545454];
}

.input-button {
  @apply absolute inset-y-0 right-1 flex items-center justify-center w-12 h-full text-gray-900;
}
.button-scroll-to-top {
  @apply bg-white rounded-full p-3 flex fixed bottom-40 md:right-40 right-5 shadow-md shadow-slate-500 z-50;
}
.arrow-icon {
  @apply size-6 transition-transform duration-300;
}

.rotate {
  transform: rotate(180deg);
}
</style>
