<script lang="ts" setup>
</script>

<template>
  <div class="relative bg-[url('/banner/banner.png')] min-h-[700px] bg-cover bg-no-repeat bg-center aspect-[2/1] w-full bg-white">
    <div class="fairy-image">
      <img src="/banner/fairy.png" alt="fairy">
    </div>
    <BannerMainContent />
  </div>
  <div class="lg:hidden block mx-auto -mt-16 z-10">
    <img src="/banner/fairy.png" alt="fairy" class="size-[384px]">
  </div>
</template>

<style scoped>
.fairy-image {
  @apply absolute bottom-0 left-0 w-2/5 h-auto;
}

@media (max-width: 1024px) {
  .fairy-image {
    @apply hidden;
  }
}
</style>
