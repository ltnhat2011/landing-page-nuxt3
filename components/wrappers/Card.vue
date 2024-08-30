<script>
export default {
  props: {
    game: Object,
  },
}
</script>

<template>
  <div id="game" class="card-container">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${game?.img})` }"
    >
      <div class="card-content">
        <div class="card-text">
          <h2>
            {{ game?.title }}
          </h2>
          <p>
            {{ game?.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  @apply relative bg-white rounded-lg overflow-hidden;
  @apply transform transition-transform duration-300;
}

.card-image {
  @apply w-auto aspect-[2/3] bg-cover bg-center bg-no-repeat;
  @apply transform transition-transform duration-300;
}

.card-image:hover {
  @apply scale-110;
}

.card-content {
  @apply absolute inset-0 bg-black bg-opacity-0 flex items-end justify-center p-4;
  @apply transition-all duration-300;
}

.card-content:hover {
  @apply bg-opacity-60;
}

.card-text {
  @apply text-start px-[35px] pb-10 ;
  @apply transform transition-transform duration-300;
}

.card-text h2 {
  @apply text-5xl leading-[60px] tracking-[-1] font-bold text-white mb-2;
}

.card-text p {
  @apply text-sm text-gray-300;
}
</style>
