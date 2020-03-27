import { Container } from 'inversify';
import { ILogger } from './interfaces/ILogger';
import { ConsoleLogger } from './infastructure/consoleLogger';
import { IUserRepository } from './interfaces/IUserRepository';
import { MongooseUserRepository } from './infastructure/mongooseUserRepository';

export class Bootstrapper{

    public static Bootstrap(): Container {

        let container = new Container();

        container.bind<ILogger>('logger').to(ConsoleLogger);
        container.bind<IUserRepository>('userRepository').to(MongooseUserRepository);

        return container;
    }
}