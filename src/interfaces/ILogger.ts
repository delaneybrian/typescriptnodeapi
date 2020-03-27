export interface ILogger{
    Exception(message: string) : void;
    Info(message: string) : void;
    Debug(message: string) : void;
    Performance(timeMiliseconds: number) : void;
}