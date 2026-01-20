import chromeLauncher from 'chrome-launcher';

export class ChromeLaunch {
  static async launch() {
    return chromeLauncher.launch({ port: 9222,
      chromeFlags: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });
  }
}
