import { getEnvSafely } from './config';

/**
 * For server-used only
 */
const DATABASE_URL = getEnvSafely('DATABASE_URL');
const POSTGRES_URL = getEnvSafely('POSTGRES_URL');
const PRISMA_DATABASE_URL = getEnvSafely('PRISMA_DATABASE_URL');
const NODE_ENV = getEnvSafely('NODE_ENV'); // 'development' | 'production' | 'test'

const env = {
  DATABASE_URL,
  POSTGRES_URL,
  PRISMA_DATABASE_URL,
  NODE_ENV,
};

export default env;
