import express, { Application } from 'express';
import userRouter from './routes/UserRoutes';
import pool from './dbconfig/dbconnector';

class Server {
    private app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(express.json())
    }

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) console.error(err);
            else console.log('Database is ready');
          }); 
    }

    private routerConfig() {
        this.app.use(userRouter);
    }

    public run = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;