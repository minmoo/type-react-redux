// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log(process.cwd());

const env_found = require("dotenv").config({
    path: require('path').resolve(
        process.cwd(),
        process.env.NODE_ENV == 'development' ? "src/config/.env.dev" : "src/config/.env"
    )
    
});

if (env_found.error){
    throw new Error("Couldn't find .env file");
}

export default {
    port: process.env.PORT || 7009,

    db_conf: {
        db_host: process.env.DB_HOST,

        db_user: process.env.DB_USER,
    
        db_nm: process.env.DB_NM,
    
        db_pwd: process.env.DB_PWD,
    
        db_port: process.env.DB_PORT || 5475
    },

    api_prefix: process.env.API_PREFIX
}