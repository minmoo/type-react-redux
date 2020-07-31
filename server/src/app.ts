import * as express from 'express';
import config from './config';
import WebSocketIO from './ws';

const app = express();
var server = require('http').Server(app);

const ws = new WebSocketIO(server);

app.use((req:express.Request, res:express.Response, next: express.NextFunction) => {
    req.ws = ws;
    return next();
});

export const {db} = require('./loaders').default({expressApp: app});

server.listen(config.port, () => {
    console.log(`
          ################################################
          🛡️  Server listening on port: ${config.port} 🛡️ 
          ################################################
        `);
});




