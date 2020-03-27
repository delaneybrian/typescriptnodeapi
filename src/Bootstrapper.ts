import { Container } from 'inversify';
import { TYPES } from './types';
import { ILogger } from './interfaces/ILogger';
import { ConsoleLogger } from './infastructure/consoleLogger';
import { App } from './app';
import { IUserRepository } from './interfaces/IUserRepository';
import { MongooseUserRepository } from './infastructure/mongooseUserRepository';
import { ApiController } from './controllers/apiController';
import "reflect-metadata";

export class Bootstrapper{

    public static Bootstrap(): Container {

        let container = new Container();

        //container.bind<ILogger>(TYPES.Logger).to(ConsoleLogger);
        //container.bind<IUserRepository>(TYPES.UserRepository).to(MongooseUserRepository);

        return container;
    }
}