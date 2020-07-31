import {Router, Request, Response} from 'express';
const route = Router();


export default (app:Router) => {
    app.use('/table', route);

    route.get('/data', (req:Request, res:Response) => {
        // client.query("select * from cbot_fil_dtl where 1 = 1 and cbot_fil_id in ('9000007')"
        // , (err, res) => {
        //     console.log(err, res);
        //     client.end();
        // });
        console.log("server data");
        const data = [
            { date: "2020.01.02", type: '1', big_category: "패션", mid_category: "바지", ord_num: "123", seq:1, item_id:"123",item_nm:"바지1" },
            { date: "2020.01.03", type: '2', big_category: "신선", mid_category: "고기", ord_num: "456", seq:2, item_id:"456",item_nm:"고기2" },
            { date: "2020.01.04", type: '3', big_category: "가구", mid_category: "침대", ord_num: "789", seq:3, item_id:"789",item_nm:"침대3" }
        ];
        res.json(data);
    });

    route.get('/sendData', (req, res) => {
        console.log("server data");
        const data = [
            { date: "2020.01.02", type: '1', big_category: "패션", mid_category: "바지", ord_num: "123", seq:1, item_id:"123",item_nm:"바지1" },
            { date: "2020.01.03", type: '2', big_category: "신선", mid_category: "고기", ord_num: "456", seq:2, item_id:"456",item_nm:"고기2" },
            { date: "2020.01.04", type: '3', big_category: "가구", mid_category: "침대", ord_num: "789", seq:3, item_id:"789",item_nm:"침대3" },
            { date: "2020.01.04", type: '4', big_category: "가전", mid_category: "가전", ord_num: "789", seq:4, item_id:"789",item_nm:"가전" }
        ];
        req.ws.notifyClients('table data', data);
        res.json(data);
    });
};

