<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
})

const numberOfImagesToShow = 5
const totalImages = props.images.length
const index = ref(numberOfImagesToShow)
const intervalTime = 2000

const displayImages = computed(() => {
  if (totalImages === 0)
    return []
  return [
    ...props.images.slice(-numberOfImagesToShow),
    ...props.images,
    ...props.images.slice(0, numberOfImagesToShow),
  ]
})

const slidesStyle = computed(() => ({
  transform: `translateX(-${index.value * (100 / numberOfImagesToShow)}%)`,
  transition: 'transform 0.5s ease-in-out',
}))

function showSlide(n) {
  if (n >= displayImages.value.length - numberOfImagesToShow) {
    index.value = numberOfImagesToShow
  }
  else if (n < 0) {
    index.value = displayImages.value.length - numberOfImagesToShow * 2
  }
  else {
    index.value = n
  }
}

function prevSlide() {
  showSlide(index.value - 1)
}

function nextSlide() {
  if (index.value < displayImages.value.length - numberOfImagesToShow) {
    showSlide(index.value + 1)
  }
  else {
    setTimeout(() => {
      index.value = numberOfImagesToShow
    }, 500)
  }
}

onMounted(() => {
  if (totalImages > numberOfImagesToShow) {
    const interval = setInterval(() => {
      nextSlide()
    }, intervalTime)

    watch(() => props.images, (newImages) => {
      if (newImages.length === 0) {
        clearInterval(interval)
      }
    })
  }
})
</script>

<template>
  <div class="flex max-w-[1460px] mx-auto items-center gap-4">
    <button class="prev" @click="prevSlide">
      ❮
    </button>
    <div class="slider">
      <div class="slides" :style="slidesStyle">
        <div v-for="(image, index) in displayImages" :key="index" class="slide">
          <img :src="image.src" :alt="image.alt" class="slide-img">
        </div>
      </div>
    </div>

    <button class="next" @click="nextSlide">
      ❯
    </button>
  </div>
</template>

<style scoped>
  .slider {
    @apply  w-full overflow-hidden max-w-[1400px] mx-auto flex;
  }

  .slides {
    @apply flex will-change-transform;
  }

  .slide {
    @apply flex-shrink-0 w-[40%] md:w-[20%];
  }

  .slide-img {
    @apply w-full h-auto object-cover;
  }

  button {
    @apply size-10 bg-white rounded-lg text-gray-400 shadow-md shadow-slate-400 border-none p-2 cursor-pointer z-10 ;
  }

  .prev {
    @apply left-2;
  }

  .next {
    @apply right-2;
  }
</style>
