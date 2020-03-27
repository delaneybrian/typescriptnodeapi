import { Request, Response, NextFunction } from 'express';
import { IUser } from '../definitions/IUser';
import { inject } from 'inversify';
import { TYPES } from '../types';
import { IUserRepository } from '../interfaces/IUserRepository';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";

@controller('/')
export class ApiController implements interfaces.Controller {

    //constructor( @inject(TYPES.Logger) private userRepository: IUserRepository) {}

    @httpGet('/')
    private async test(req: Request, res: Response, next: NextFunction){
        console.log('this is the api subdomain')
        res.status(200);
        res.json({
            "hello": "world",
            "jogn": "james",
            "Billy": ["elliot", "is", "cool"]
        });
    }

    @httpPost('/user')
    private async post(req: Request, res: Response, next: NextFunction){
        console.log(req.body);

        let user: IUser = {
            firstName: req.body.firstName,
            lastName: req.body.firstName,
            age: req.body.age,
            id: req.body.id
        }

        console.log(user);

        //await this.userRepository.addUser(user);

        res.status(201);

        res.end();
    }

    @httpGet('/user')
    private async get(req: Request, res: Response, next: NextFunction) {
        let userId: string = req.query.id;

        //let user = await this.userRepository.getUserById(userId);

        // if (user === null)
        //     res.status(400);

        // res.json(user);
        res.status(200);
    }
}