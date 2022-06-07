import express, { Application } from 'express';
import cors from 'cors';
import { dbConnection } from '../database';
import { eventRoutes, registrationRoutes, userRoutes, authRoutes } from '../routes';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        auth: '/api/auth',
        events: '/api/events',
        registration: '/api/registration',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnect();

        this.middlewares();

        this.routes();
    }

    async dbConnect() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // body reading
        this.app.use(express.json());

        // Public
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.events, eventRoutes);
        this.app.use(this.apiPaths.registration, registrationRoutes);

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port', this.port);
        })
    }
}

export default Server;