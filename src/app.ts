import express, { Application, Router } from 'express';
import vhost from 'vhost-ts';
import { ApiController } from './controllers/apiController';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

class App {

    public app: Application;

    public apiController: ApiController;

    private apiRouter: Router = express.Router();

    constructor() {
        this.app = express();
        this.setConfig();
        this.setMongoConfig();

        this.apiController = new ApiController(this.apiRouter);
    }

    private setConfig() {
        this.app.use(bodyParser.json())
        this.app.use(vhost('api.*', this.apiRouter));
        this.apiRouter.use(cors());
    }

    private setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost:27017/Pokemon", {
             useNewUrlParser: true
         });
         
     }
}

export default new App().app;