import pool from '../dbconfig/dbconnector';
import {Request, Response} from 'express';

class UserController {

    public async get(req: Request, res: Response) {
        // try {
        //     const client = await pool.connect();

        //     const sql = "SELECT * FROM todos";
        //     const { rows } = await client.query(sql);
        //     const todos = rows;

        //     client.release();

        //     res.send(todos);
        // } catch (error) {
        //     res.status(400).send(error);
        // }
        res.send("Hola")
    }
}

export default UserController;