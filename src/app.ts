import express, { Application, Router } from 'express';
import vhost from 'vhost-ts';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { Bootstrapper } from './Bootstrapper';
import { InversifyExpressServer } from 'inversify-express-utils';
import './controllers/usersController';

export class App {

    public application: Application;

    private app: Application;

    private apiRouter: Router = express.Router();

    private server: InversifyExpressServer;

    constructor() {
        let container = Bootstrapper.Bootstrap();

        this.app = express();
        this.setConfig();
        this.setMongoConfig();

        this.server = new InversifyExpressServer(container, null, null, this.app);

        this.application = this.server.build();
    }

    private setConfig() {
        this.app.use(bodyParser.json())
        this.app.use(vhost('api.*', this.apiRouter));
        this.apiRouter.use(cors());
    }

    private setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost:27017/Users", {
            useNewUrlParser: true
        });
    }
}

export default new App().application;