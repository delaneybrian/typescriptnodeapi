import express, { Router, Request, Response, NextFunction } from 'express';

export const ApiController = ( router: Router) => {

    router.get('/', (req: Request, res: Response, next: NextFunction) => {
        console.log('this is the api subdomain')
        res.status(200);
        res.send('Finished');
    });
}