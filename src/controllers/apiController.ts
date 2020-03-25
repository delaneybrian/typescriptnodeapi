import { Router, Request, Response, NextFunction } from 'express';
import { MongooseUserRepository } from '../infastructure/mongooseUserRepository';
import { IUser } from '../definitions/IUser';

export class ApiController{

    constructor(private router: Router){
        this.routes();
    }

    public routes(){
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            console.log('this is the api subdomain')
            res.status(200);
            res.json({
                "hello": "world",
                "jogn": "james",
                "Billy": ["elliot", "is", "cool"]
            });
        });
    
        this.router.post('/user', async (req: Request, res: Response, next: NextFunction) => {
            
            let repo = new MongooseUserRepository();
    
            console.log(req.body);
    
            let user: IUser = {
                firstName: req.body.firstName,
                lastName: req.body.firstName,
                age: req.body.age,
                id: req.body.id
            }
    
            console.log(user);
    
            await repo.addUser(user);
        })
    
        this.router.get('/user', async (req: Request, res: Response, next: NextFunction) => {
    
            let repo = new MongooseUserRepository();
    
            let userId: string = req.query.id;
    
            let user = await repo.getUserById(userId);
    
            if(user === null)
                res.status(400);
    
            res.json(user);
            res.status(200);
        })
    }
}