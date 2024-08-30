<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import useLanguage from '@/composables/useLanguage'

// Nhận giá trị isMdOrSmaller từ props
const props = defineProps({
  isMdOrSmaller: {
    type: Boolean,
    default: false,
  },
})
const { changeLocale, activeLocale, availableLocales } = useLanguage()

const arrowDropdownImage = computed(() =>
  props.isMdOrSmaller ? '/common/arrow-dropdown-black.svg' : '/common/arrow-dropdown.svg',
)

const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function closeDropdown(event: MouseEvent) {
  const target = event.target as Element
  if (!target.closest('.trigger')) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})

const flagUrls: Record<string, string> = {
  en: '/common/us.svg',
  vi: '/common/vn.svg',
}

const languageNames: Record<string, string> = {
  en: 'English',
  vi: 'Vietnamese',
}

const allLocales = computed(() => {
  return [activeLocale.value, ...availableLocales.value]
})

const currentLocaleCode = computed(() => activeLocale.value.code)
</script>

<template>
  <div class="relative">
    <div class="trigger" @click="toggleDropdown">
      <img :src="flagUrls[currentLocaleCode]" alt="Current Language Flag" class="size-10 ml-2">
      <img :src="arrowDropdownImage" alt="drop-down" class="size-8 ml-2">
    </div>

    <div v-if="isDropdownOpen" class="dropdown" :class="{ 'right-2': !isMdOrSmaller }">
      <div
        v-for="locale in allLocales"
        :key="locale.code"
        class="menu-item"
        :class="{ 'ml-5': locale.code !== currentLocaleCode }"
        @click="changeLocale(locale.code)"
      >
        <img v-if="locale.code === currentLocaleCode" src="/common/tick.svg" alt="tick" class="tick-icon">
        <img :src="flagUrls[locale.code]" alt="Locale Flag" class="flag-icon">
        {{ languageNames[locale.code] }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.trigger {
  @apply flex items-center gap-2 cursor-pointer text-zinc-200/80 hover:text-zinc-200 transition-colors;
}

.dropdown {
  @apply absolute bg-white shadow-lg border rounded-xl mt-2 w-48 z-10 ;
}

.menu-item {
  @apply flex items-center p-2 cursor-pointer;
}

.flag-icon {
  @apply size-10 mx-2;
}

.tick-icon {
  @apply size-5;
}
</style>
