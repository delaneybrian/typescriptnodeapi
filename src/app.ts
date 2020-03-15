import express, {Application, Router} from 'express';
import vhost from "vhost-ts";
import { ApiController } from "./controllers/apiController";
import cors from 'cors';

const app: Application = express();

const apiRouter: Router = express.Router();

app.use(vhost('api.*', apiRouter));
apiRouter.use(cors());

//register API Routes
ApiController(apiRouter);

// app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {

// })

app.listen(5000, () => console.log('Server Running'));