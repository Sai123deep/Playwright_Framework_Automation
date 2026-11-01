import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com',
    testIdAttribute: 'data-test',
    trace: 'on-first-retry',
  },
});