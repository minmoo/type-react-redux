import * as socketIO from 'socket.io';

class WebSocketIO{
    private io:socketIO.Server;
    private clients: Array<socketIO.Socket> = [];

    constructor(server){
        this.io = socketIO.listen(server);

        this.io.sockets.on('connection', async (socket) => {
            console.log("Socket Connected");
            console.log("연결된 socketID : ", socket.id);
        
            this.clients.push(socket);
            this.io.to(socket.id).emit('my socket id',{socketId: socket.id});

            socket.on('receive', async(data) => {
                console.log('receive');
                socket.emit('currency', "안녕");
            })
        })

        console.log("websocket created!");
    }
    
    public getSocket(id:string){
        return this.clients.filter((s) => s.id == id);
    }

    //broadcast 
    public notifyClients(msg, data){
        this.clients.forEach(socket => socket.emit(msg, data))
    }
}

export default WebSocketIO;


