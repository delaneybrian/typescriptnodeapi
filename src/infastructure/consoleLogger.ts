import { ILogger } from '../interfaces/ILogger';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class ConsoleLogger implements ILogger{

    Exception(message: string): void {
        console.log(message);
    }

    Info(message: string): void {
        console.log(message);
    }
    
    Debug(message: string): void {
        console.log(message);
    }

    Performance(timeMiliseconds: number): void {
        console.log("Performance {}");
    }

}