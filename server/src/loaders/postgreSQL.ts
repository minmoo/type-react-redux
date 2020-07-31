import {Client} from 'pg';
import config from '../config';

export default () => {
    const dbClient = new Client({
        user: config.db_conf.db_user,
        host: config.db_conf.db_host,
        database: config.db_conf.db_nm,
        password: config.db_conf.db_pwd,
        port: config.db_conf.db_port
    })
    dbClient.connect();

    return dbClient;
}