import { Pool } from 'pg';

export default new Pool ({
    max: 20,
    connectionString: 'postgres://postgres:password@localhost:5432/attendance',
    idleTimeoutMillis: 30000
});