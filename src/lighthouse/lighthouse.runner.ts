import lighthouse from 'lighthouse';
import fs from 'fs';
import { ChromeLaunch } from '../lighthouse/chrome.launcher.js';
import { Logger } from '../utils/logger';
import { lighthouseOptions } from '../config/lighthouse.config';

const logger = new Logger();

export class LighthouseRunner {
  static async run(url: string, name: string) {
    const chrome = await ChromeLaunch.launch();
    const timestamp = new Date().toISOString();

    logger.info(`Running Lighthouse for ${url}`);

    const result = await lighthouse(url, {
      port: chrome.port,
      output: 'html',
      onlyCategories: lighthouseOptions.categories,
      configPath: lighthouseOptions.paths.configPath,
      formFactor: 'desktop',
      screenEmulation: {
        mobile: lighthouseOptions.screenEmulation.mobile,
        width: lighthouseOptions.screenEmulation.width,
        height: lighthouseOptions.screenEmulation.height,
        deviceScaleFactor: lighthouseOptions.screenEmulation.deviceScaleFactor,
        disabled: lighthouseOptions.screenEmulation.disabled,
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
