import getConfig from 'next/config';

// WARNING:
//   Changes here affect next.config.js (and vice-versa)
//   TypeScript will NOT warn you
//   Check manually.

/** Server-side config, everything must be optional */
type ServerRuntimeConfig = Partial<{
  /** Internal K8S Service for SSR queries */
  apiBaseUrlOverride: string;
  /** Internal path, if different from the external path (e.g. due to proxying) */
  apiPathOverride: string;
}>;

/** Shared config, items can be required or optional */
interface PublicRuntimeConfig {
  apiBaseUrl: string;
  apiPath: string;
  playStoreUrl: string;
  appStoreUrl: string;
}

const config: {
  serverRuntimeConfig?: ServerRuntimeConfig,
  publicRuntimeConfig?: PublicRuntimeConfig,
} = getConfig();

export const server = config.serverRuntimeConfig!;
export const shared = config.publicRuntimeConfig!;
