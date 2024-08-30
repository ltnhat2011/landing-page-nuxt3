<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const calculateTimeLeft = () => {
  const now = new Date();
  const diff = targetDate - now;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
};

const updateTimeLeft = () => {
  timeLeft.value = calculateTimeLeft();
};

let interval = null;

onMounted(() => {
  updateTimeLeft();
  interval = setInterval(() => {
    updateTimeLeft();
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

const days = computed(() => String(timeLeft.value.days).padStart(2, "0"));
const hours = computed(() => String(timeLeft.value.hours).padStart(2, "0"));
const minutes = computed(() => String(timeLeft.value.minutes).padStart(2, "0"));
const seconds = computed(() => String(timeLeft.value.seconds).padStart(2, "0"));
</script>

<template>
  <div
    class="flex justify-center items-center py-[26px] gap-4 md:gap-[52.14px] bg-white md:max-w-[756px] w-full rounded-[21px]"
  >
    <div class="flex flex-col gap-8 w-20">
      <h2
        class="mx-auto text-4xl leading-[45px] md:text-[60px] md:leading-[64px] md:tracking-[4.8px] font-black"
      >
        {{ days }}
      </h2>
      <span
        class="mx-auto text-[15.64px] leading-[19.07px] tracking-[-0.65px] font-bold"
        >{{ $t("days") }}</span
      >
    </div>
    <span class="text-[65.17px] leading-[79.45px] tracking-[-0.65px] pb-8"
      >:</span
    >
    <div class="flex flex-col gap-8 w-20">
      <h2
        class="mx-auto text-4xl leading-[45px] md:text-[60px] md:leading-[64px] md:tracking-[4.8px] font-black"
      >
        {{ hours }}
      </h2>
      <span
        class="mx-auto text-[15.64px] leading-[19.07px] tracking-[-0.65px] font-bold"
        >{{ $t("hour") }}</span
      >
    </div>
    <span class="text-[65.17px] leading-[79.45px] tracking-[-0.65px] pb-8"
      >:</span
    >
    <div class="flex flex-col gap-8 w-20">
      <h2
        class="mx-auto text-4xl leading-[45px] md:text-[60px] md:leading-[64px] md:tracking-[4.8px] font-black"
      >
        {{ minutes }}
      </h2>
      <span
        class="mx-auto text-[15.64px] leading-[19.07px] tracking-[-0.65px] font-bold"
        >{{ $t("minutes") }}</span
      >
    </div>
    <span class="text-[65.17px] leading-[79.45px] tracking-[-0.65px] pb-8"
      >:</span
    >
    <div class="flex flex-col gap-8 w-20">
      <h2
        class="mx-auto text-4xl leading-[45px] md:text-[60px] md:leading-[64px] md:tracking-[4.8px] font-black"
      >
        {{ seconds }}
      </h2>
      <span
        class="mx-auto text-[15.64px] leading-[19.07px] tracking-[-0.65px] font-bold"
        >{{ $t("second") }}</span
      >
    </div>
  </div>
</template>

<style scoped>
/* Add your scoped styles here */
</style>
