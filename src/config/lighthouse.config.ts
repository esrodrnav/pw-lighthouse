import path from 'path';
import { appConfig } from './app.config';

export const lighthouseOptions = {
  runner: {
    output: 'html',
    formFactor: 'desktop',
    throttlingMethod: 'provided'
  },

  categories: ['performance', 'accessibility', 'best-practices'],

  screenEmulation: {
    mobile: false,
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    disabled: false
  },

  paths: {
    configPath: '/lighthouserc.json',
    reportsDir: path.resolve(process.cwd(), 'reports/lighthouse')
  }
};