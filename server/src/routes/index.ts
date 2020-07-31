import {Router} from 'express';
import chat from './chat';
import table from './table';

export default () => {
    const app = Router();
    chat(app);
    table(app);
    
    return app;
}