import WebSocketIO from '../ws';

declare global{
    namespace Express{
        interface Request{
            ws?: WebSocketIO;
        }
    }
}