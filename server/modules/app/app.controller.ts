import { Controller, Get, Request, Response } from '@nestjs/common';

@Controller('*')
export class AppController {
    constructor() {}

    @Get()
    public async routesRender( @Request() req: any, @Response() res: any) {
        res.render('index', {
            req,
            res,
            providers: [{
              provide: 'serverUrl',
              useValue: `${req.protocol}://${req.get('host')}`
            }]
          });        
    }
}
