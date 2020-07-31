import {Router, Request, Response} from 'express';

const route = Router();

export default (app:Router) => {
    app.use('/chat', route);

    route.get('/data', (req:Request, res:Response) => {
        console.log('data');
        const data = {
            test: "test"
        }
        res.json(data);
    });
};