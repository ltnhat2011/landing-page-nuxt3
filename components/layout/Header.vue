<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { links } from '../../data/links'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMdOrSmaller = breakpoints.smaller('md')

const { tm, rt } = useI18n()
const { scrollToBlock } = useNavigation()

const localeLinks = computed(() => {
  const localeArr = tm('header.links') as string[]
  return links.map((link, index) => ({
    ...link,
    name: rt(localeArr[index]),
  }))
})

const isPopupOpen = ref(false)
const isHeaderVisible = ref(true)
const isHeaderScrolled = ref(false)
const lastScrollTop = ref(0)

function togglePopup() {
  isPopupOpen.value = !isPopupOpen.value
}

function closePopup() {
  isPopupOpen.value = false
}

function handleScroll() {
  const currentScrollTop = window.scrollY
  isHeaderVisible.value = currentScrollTop < lastScrollTop.value || currentScrollTop < 50
  isHeaderScrolled.value = currentScrollTop > 0
  lastScrollTop.value = currentScrollTop
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header v-if="isMdOrSmaller" class="fixed w-full select-none top-0 z-50 transition-colors" :class="[{ 'bg-[#4A6FF2] bg-opacity-80': isHeaderScrolled, 'hidden': !isHeaderVisible }]">
    <div class="container px-5 pb-5 flex h-14 items-center justify-between mt-5">
      <div class="flex items-center">
        <img src="/common/White_logo.png" alt="small logo" class="w-20 h-auto">
      </div>
      <button class="text-white">
        <img src="/common/menu.svg" alt="menu" @click="togglePopup">
      </button>
    </div>
    <div v-if="isPopupOpen" class="fixed inset-0 bg-opacity-50 z-999">
      <div class="bg-white h-dvh p-5">
        <div class="flex justify-between">
          <I18nLanguageSwitcher :is-md-or-smaller="isMdOrSmaller" class="bg-[#F6F6F6] border-[#AFAFAF] border border-solid rounded-lg h-10" />
          <button class="mb-4" @click="closePopup">
            <img src="/common/close.svg" alt="menu">
          </button>
        </div>
        <nav>
          <ul class="flex flex-col gap-10 mt-10">
            <li v-for="link in localeLinks" :key="link.id" class="border-b w-full text-center pb-10">
              <span
                class="cursor-pointer transition-colors text-sm font-bold hover:text-blue-600"
                @click="scrollToBlock(link.section); closePopup()"
              >
                {{ link.name }}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <header v-else class="fixed w-full select-none top-0 z-50 transition-colors" :class="[{ 'bg-[#4A6FF2] bg-opacity-80': isHeaderScrolled, 'hidden': !isHeaderVisible }]">
    <div class="container pl-3 pr-3 pb-5 flex h-14 max-w-screen-3xl items-center justify-between mt-5">
      <div class="flex items-center">
        <img src="/common/White_logo.png" alt="logo" class="w-28 h-auto">
      </div>
      <div class="flex items-center space-x-3 md:space-x-6 lg:space-x-24">
        <span
          v-for="link in localeLinks"
          :key="link.id"
          class="cursor-pointer text-base font-medium transition-colors text-white hover:text-zinc-200"
          @click="scrollToBlock(link.section)"
        >
          {{ link.name }}
        </span>
        <I18nLanguageSwitcher />
      </div>
    </div>
  </header>
</template>
