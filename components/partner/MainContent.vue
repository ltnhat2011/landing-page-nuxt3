<script setup>
import { CustomSlider } from '../ui/Slider'
import { slidesData } from '~/data/slider'
</script>

<template>
  <div>
    <div id="partners" class="bg-[#F6F6F6] mt-32">
      <h2 class=" text-[40px] leading-[50px] tracking-[0.6px] md:text-5xl md:leading-[80px] md:tracking-[3.6px] font-black flex justify-center pt-28 pb-24">
        {{ $t('partner.title') }}
      </h2>
      <CustomSlider :images="slidesData" class="pb-28" />
    </div>
  </div>
</template>
