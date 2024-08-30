<script setup>
// Add any necessary imports or JavaScript here
</script>

<template>
  <footer id="contact" class="footer-bg">
    <div class="container">
      <div class="logo-social">
        <img src="/common/White_logo.png" alt="Logo" class="logo-img">
        <div class="social-icons">
          <a href="#" class="social-icon">
            <img src="/common/twitter.svg" alt="Twitter" class="icon-img">
          </a>
          <a href="#" class="social-icon">
            <img src="/common/facebook.svg" alt="Facebook" class="icon-img">
          </a>
          <a href="#" class="social-icon">
            <img src="/common/linkedin.svg" alt="LinkedIn" class="icon-img">
          </a>
        </div>
      </div>
      <div class="address-subscribe">
        <div class="address-section">
          <p class="title">
            {{ $t('footer.address.title') }}
          </p>
          <div class="address-content">
            <img src="/common/location.svg" alt="location">
            <div class="address-text">
              <p class="text">
                {{ $t('footer.address.Addr') }}
              </p>
              <p class="text">
                {{ $t('footer.address.AddrVn') }}
              </p>
            </div>
          </div>
          <p class="phone-info">
            <img src="/common/mobile.svg" alt="mobile"> {{ $t('footer.phone') }}
          </p>
        </div>
        <div class="subscribe-section">
          <p class="title">
            {{ $t('footer.subscribe.title') }}
          </p>
          <p class="description">
            {{ $t('footer.inputlable') }}
          </p>
          <div class="input-container">
            <input
              id="input-field"
              type="text"
              :placeholder="$t('banner.placeholder')"
              class="input-field"
            >
            <button class="input-button">
              <img src="/footer/arrow-right-white.svg" alt="arrow-right" class="arrow-icon">
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="footer-bottom">
    2017 Copyright. Policy.
  </div>
</template>

<style scoped>
.footer-bg {
  @apply relative bg-[url('/footer/BG.png')] bg-cover bg-no-repeat bg-center aspect-[5/1] bg-[#f6f6f6] w-full;
}

.container {
  @apply max-w-[1460px] mx-auto px-5 flex flex-col md:flex-row justify-between pt-[5%] space-y-6 md:space-y-0;
}

.logo-social {
  @apply flex flex-col items-center md:items-start md:basis-3/5 basis-0;
}

.logo-img {
  @apply h-24 mb-4;
}

.social-icons {
  @apply flex space-x-4;
}

.icon-img {
  @apply size-10 mb-4;
}

.address-subscribe {
  @apply flex flex-col  md:flex-row gap-x-10;
}

.address-section {
  @apply flex flex-col gap-y-4 md:gap-y-10 text-start mx-auto;
}

.title {
  @apply text-2xl text-white font-bold;
}

.address-content {
  @apply flex items-start gap-y-10 gap-x-2;
}

.address-text {
  @apply flex flex-col gap-y-3;
}

.text {
  @apply text-white text-sm;
}

.phone-info {
  @apply text-white items-center text-sm flex gap-x-2;
}

.subscribe-section {
  @apply text-start mx-auto mt-16 md:mt-0;
}

.description {
  @apply text-white text-sm mb-3 mt-9;
}

.input-container {
  @apply relative w-full max-w-[560px] mb-16 md:mb-0;
}

.input-field {
  @apply w-full h-14 pl-4 pr-16 text-sm text-[#545454] bg-transparent border-2 border-white rounded-lg shadow-lg;
}

.input-button {
  @apply absolute inset-y-0 right-1 flex items-center justify-center w-12 h-full bg-transparent text-gray-900;
}

.arrow-icon {
  @apply w-6 h-6;
}

.footer-bottom {
  @apply flex h-20 bg-black bottom-0 text-white text-center items-center justify-center;
}
</style>
