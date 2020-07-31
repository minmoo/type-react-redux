import expressLoader from './express';
import postgreSQLLoader from './postgreSQL';

export default ({expressApp}) => {
    const dbClient = postgreSQLLoader();
    console.log("DB loaded and connected!");

    expressLoader({app: expressApp});
    console.log("Expresse loaded!");

    return {db: dbClient};
};