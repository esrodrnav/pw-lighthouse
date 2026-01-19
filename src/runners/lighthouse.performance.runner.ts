import { ChromeFactory } from '../playwright/browser/chrome.factory.js';
import { LoginPage } from '../playwright/Pages/login_page.js';
import { urlsToAudit } from '../config/urls.js';
import { LighthouseRunner } from '../lighthouse/lighthouse.runner';
import { Logger } from '../utils/logger.js';
import { appConfig } from '../config/app.config.js';

const logger = new Logger();

async function runPerformanceTests(): Promise<void> {
  const chromeFactory = new ChromeFactory();

  try {
    logger.info('Initializing performance tests...');

    const context = await chromeFactory.createContext();
    const page = context.pages()[0] ?? await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.navigate(urlsToAudit.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password);
    await loginPage.isLoggedIn();

    await context.storageState({ path: 'storageState.json' });

    logger.success('Login successful, starting Lighthouse audits...');

    for (const [name, url] of Object.entries(urlsToAudit)) {
      await LighthouseRunner.run(url, name);
    }

    logger.success('Performance tests completed');
  } catch (error) {
    logger.error(`Performance tests failed: ${error}`);
    throw error;
  } finally {
    await chromeFactory.closeBrowser();
  }
}

try {
  await runPerformanceTests();
} catch (error) {
  console.error('An error occurred during performance tests:');
  console.error(error);
  process.exit(1);
}
