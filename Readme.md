# Lighthouse Performance Testing Automation

This project automates performance testing using Lighthouse and Playwright. It allows running audits for performance, accessibility, and best practices on specific web pages after automating the login process.

## Key Features

- **Login Automation**: Uses Playwright to navigate and authenticate in the application before running audits.
- **Lighthouse Audits**: Runs performance, accessibility, and best practices tests on configured URLs.
- **Flexible Configuration**: Configuration files for Lighthouse and Playwright.
- **HTML Reports**: Generates detailed reports in HTML format in the `reports/lighthouse/` folder.
- **CI/CD Integration**: Configured for continuous integration environments.

## Prerequisites

- Node.js (version 18 or higher)
- pnpm (package manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pw-lighthouse
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure environment variables: Create a `.env` file in the project root with the necessary credentials (see `src/config/app.config.ts` for more details).

## Usage

### Run Performance Tests

```bash
pnpm run test:lighthouse
```

This command:
- Launches a Chrome browser.
- Navigates to the base URL and performs automatic login.
- Runs Lighthouse audits on the configured URLs (`baseUrl` and `timePage`).
- Generates HTML reports in `reports/lighthouse/`.

### Other Commands

- `pnpm run build`: Compiles the TypeScript project.
- `pnpm run test:playwright`: Runs Playwright tests (if configured).

## Configuration

### Lighthouse (`lighthouserc.json`)

Configure audit options:
- Categories: performance, accessibility, best-practices.
- Minimum score threshold: 0.80 for performance.
- Output: HTML files in `reports/lighthouse/`.

### Playwright (`playwright.config.ts`)

Configure browser and web server:
- Uses Chromium with specific options.
- Sets base URL and development server.

### URLs to Audit (`src/config/urls.ts`)

Define URLs for audits:
- `baseUrl`: Main URL.
- `timePage`: Specific page for audit.

## Project Structure

```
src/
├── config/          # App, Lighthouse, and URL configurations
├── lighthouse/      # Lighthouse launcher and runner
├── playwright/      # Browser factory and pages (e.g., login)
├── runners/         # Main performance test runner
└── utils/           # Utilities like logger and processor
reports/lighthouse/  # Lighthouse-generated reports
```

## Dependencies

- **Lighthouse**: For performance audits.
- **Playwright**: For browser automation.
- **Chrome Launcher**: For launching Chrome.
- **TypeScript**: For typed development.

## Contributing

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

ISC