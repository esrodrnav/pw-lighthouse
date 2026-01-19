import 'dotenv/config';

// Aquí se obtienen las variables de entorno y se configuran los valores predeterminados
export const appConfig = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  baseUrl: process.env.APP_URL ?? 'http://localhost:3000',
  debug: process.env.DEBUG === 'true',
  username: process.env.USERNAME ?? 'Admin',
  password: process.env.PASSWORD ?? 'admin123',
  reportDir: process.env.REPORT_DIR ?? 'reports',
  lighthousercPath: process.env.LIGHTHOUSER_RC ?? './.lighthouserc.json',
};
