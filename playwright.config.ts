import { defineConfig, devices } from '@playwright/test';
import { appConfig } from './src/config/app.config.ts';


export default defineConfig({
  testDir: '',
  //fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: appConfig.baseUrl,
    trace: 'on-first-retry',
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--remote-debugging-port=9222'],
        }, 
       },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: appConfig.baseUrl,
    reuseExistingServer: !process.env.CI,
  },
});
