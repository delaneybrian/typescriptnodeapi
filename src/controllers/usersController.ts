import { Request, Response, NextFunction } from 'express';
import { IUser } from '../definitions/IUser';
import { inject } from 'inversify';
import { IUserRepository } from '../interfaces/IUserRepository';
import { ILogger } from '../interfaces/ILogger';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";

@controller('/users')
export class UsersController implements interfaces.Controller {

    constructor( 
        @inject('logger') private _logger: ILogger,
        @inject('userRepository') private _userRepository: IUserRepository
    ) { }

    // @httpGet('/')
    // private async test(req: Request, res: Response, next: NextFunction){
    //     this._logger.Debug('this is the api subdomain')
    //     res.status(200);
    //     res.json({
    //         "hello": "world",
    //         "jogn": "james",
    //         "Billy": ["elliot", "is", "cool"]
    //     });
    // }

    @httpPost('/')
    private async postr(req: Request, res: Response, next: NextFunction){
        this._logger.Debug(req.body);

        let user: IUser = {
            firstName: req.body.firstName,
            lastName: req.body.firstName,
            age: req.body.age,
            id: req.body.id
        }

        console.log(user);

        await this._userRepository.addUser(user);

        res.status(201);

        res.end();
    }

    @httpGet('/')
    private async getr(req: Request, res: Response, next: NextFunction) {
        let userId: string = req.query.id;

        let user = await this._userRepository.getUserById(userId);

        if (user === null)
             res.status(400);

        res.json(user);
        res.status(200);
    }
}