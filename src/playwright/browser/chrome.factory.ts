import { chromium, Browser, BrowserContext } from '@playwright/test';
import path from 'path';

export class ChromeFactory {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private userDataDir = path.resolve(process.cwd(), '.user_data');

  async createContext(): Promise<BrowserContext> {
    this.context = await chromium.launchPersistentContext(this.userDataDir, {
      headless: true,
      args: ['--remote-debugging-port=9222', '--disable-setuid-sandbox', '--no-sandbox'],
      ignoreDefaultArgs: ['--incognito']
    });
    
    return this.context;
  }

  async closeBrowser(): Promise<void> {
    if (this.context) {
      await this.context.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }
}
