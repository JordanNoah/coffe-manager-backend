import express, { Router } from 'express'
import http from 'http'
import { DbSequelize } from "../infrastructure/database/init";
import {SocketManager} from "../infrastructure/socket/io";

interface Options {
    port?: number
    routes: Router
}

export class Server {
    public readonly app = express()
    private readonly port: number
    private readonly routes: Router

    constructor(options: Options){
        const {port = 3030, routes} = options
        this.port = port
        this.routes = routes
    }

    start(){
        DbSequelize()
            .then(async ()=> {

                const server = http.createServer(this.app)

                new SocketManager(server)


                this.app.use(express.json())
                this.app.use(this.routes)

                server.listen(this.port,() => {
                    console.log(`Server running on PORT: ${this.port}`);
                })

            }).catch((err) => {
            console.error(err)
        })
    }
}