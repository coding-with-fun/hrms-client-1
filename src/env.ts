import { getOsEnv, getOsEnvOptional } from './libs/env';

/**
 * Environment variables
 */
const env = {
    node: getOsEnvOptional('MODE') || 'dev', // dev, production

    app: {
        backend_url: getOsEnv('VITE_BACKEND_URL'),
        api_prefix: getOsEnv('VITE_API_PREFIX'),
    },
};

export default env;
