import { appConfig } from './app.config.js';

export const urlsToAudit = {
  baseUrl: appConfig.baseUrl,
  timePage: `${appConfig.baseUrl}/web/index.php/time/viewEmployeeTimesheet`
};
