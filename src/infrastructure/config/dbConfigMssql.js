const config = require('config');
const os = require('os');
const localHost = os.hostname();
/**
 * Configuração de conexão do banco de dados SQL Server
*/
const cfg = config.DB.MSSQL;

const MSSQL_CONFIG = {
    server: cfg.HOST.includes('local') ? localHost : cfg.HOST,
    database: cfg.DATABASE,
    port: cfg.PORT,
    user: cfg.USER,
    password: cfg.PASSWORD,
    connectionTimeout: 25000,
    pool: {
        max: 20,
        min: 0,
        idleTimeoutMillis: 25000
    },
    options: {
        enableArithAbort: true,
        // cryptoCredentialsDetails: {
        //     minVersion: 'TLSv1'
        // }
    }
}


 module.exports = MSSQL_CONFIG;