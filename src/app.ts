import express, {Application, Request, Response, NextFunction, Router} from 'express';
import vhost from "vhost-ts";
import { ApiController } from "./controllers/apiController";


const app: Application = express();

const apiRouter: Router = express.Router();

app.use(vhost('api.*', apiRouter));

ApiController(apiRouter);

// app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {

// })

app.listen(5000, () => console.log('Server Running'));