import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'tripcard',
  webDir: '../../dist/apps/tripcard',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
