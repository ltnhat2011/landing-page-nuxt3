<template>
  <div class="background-container">
    <img
      src="/about/Illustrator.png"
      alt="Illustrator"
      class="witch-animation"
    />
  </div>
</template>

<style lang="scss" scoped>
.background-container {
  @apply relative container mx-auto bg-[url('/about/earth.png')] bg-contain bg-no-repeat bg-center aspect-[2/1] w-full mt-56 md:mt-96;
}

@keyframes elliptical-flight {
  0% {
    transform: translate(-400px, -200px);
  }
  25% {
    transform: translate(0px, -300px);
  }
  50% {
    transform: translate(400px, -200px);
  }
  75% {
    transform: translate(0px, -100px);
  }
  100% {
    transform: translate(-400px, -200px);
  }
}

@media (max-width: 768px) {
  @keyframes elliptical-flight {
    0% {
      transform: translate(-100px, -50px);
    }
    25% {
      transform: translate(0px, -75px);
    }
    50% {
      transform: translate(100px, -50px);
    }
    75% {
      transform: translate(0px, -25px);
    }
    100% {
      transform: translate(-100px, -50px);
    }
  }
}

.witch-animation {
  @apply absolute;
  top: -100px;
  left: 20%;
  width: 50%;
  animation: elliptical-flight 8s linear infinite;
  transform-origin: center;
}
</style>
