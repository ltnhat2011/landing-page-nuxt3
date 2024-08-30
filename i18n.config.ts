import type { NuxtI18nOptions } from '@nuxtjs/i18n'

export default {
  locales: [
    { code: 'en', iso: 'en', file: 'en.ts', name: 'EN' },
    { code: 'vi', iso: 'vi', file: 'vi.ts', name: 'VI' },
  ],
  langDir: 'locales',
  lazy: true,
  detectBrowserLanguage: false,
  defaultLocale: 'en',
  localeDetection: false,
  strategy: 'prefix_except_default',
} as NuxtI18nOptions
