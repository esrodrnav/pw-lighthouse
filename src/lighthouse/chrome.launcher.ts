import chromeLauncher from 'chrome-launcher';

export class ChromeFactory {
  static async launch() {
    return chromeLauncher.launch({ port: 9222, userDataDir: '.user_data',
      chromeFlags: [
          '--no-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--mute-audio' ]
    });
  }
}
