import lighthouse from 'lighthouse';
import fs from 'fs';
import { ChromeFactory } from './chrome.launcher';
import { Logger } from '../utils/logger';

const logger = new Logger();

export class LighthouseRunner {
  static async run(url: string, name: string) {
    const chrome = await ChromeFactory.launch();
    const timestamp = new Date().toISOString();

    logger.info(`Running Lighthouse for ${url}`);

    const result = await lighthouse(url, {
      port: chrome.port,
      output: 'html',
      onlyCategories: ['performance', 'accessibility', 'best-practices'],
      configPath: '/lighthouserc.json',
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
        disabled: false,
      },
      throttlingMethod: 'provided'
    });

    logger.info(`Performance score for ${name}: ${result?.lhr.categories.performance.score}`);

    fs.mkdirSync('reports/lighthouse', { recursive: true });

    fs.writeFileSync(
      `reports/lighthouse/${name} - ${timestamp}.html`,
      result!.report as string
    );

    chrome.kill();

    return result!.lhr;
  }
}
