export enum Environment {
  LOCAL = 'local',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export const environmentConfig = {
  [Environment.LOCAL]: {
    name: 'Local',
    url: 'http://localhost:3000',
  },
  [Environment.STAGING]: {
    name: 'Staging',
    url: 'https://staging.example.com',
  },
  [Environment.PRODUCTION]: {
    name: 'Production',
    url: 'https://example.com',
  },
};
