export const processUtils = {
  getEnvVar(key: string, defaultValue?: string): string {
    const value = process.env[key];
    if (value === undefined) {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      throw new Error(`Environment variable ${key} is not defined`);
    }
    return value;
  },

  hasEnvVar(key: string): boolean {
    return process.env[key] !== undefined;
  },

  getBoolean(key: string, defaultValue: boolean = false): boolean {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }
    return value === 'true' || value === '1' || value === 'yes';
  },

  setEnvVar(key: string, value: string): void {
    process.env[key] = value;
  },
};
