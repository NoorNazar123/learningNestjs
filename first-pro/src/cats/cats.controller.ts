import { Controller, Get, Req, Res, HttpCode } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    @HttpCode(200) // You can also explicitly set the status here
    findAll(@Req() request: Request, @Res() response: Response): void {
        console.log(request.body); // Logs the request URL
        response.send('This action returns all cats'); // Sends the response to the client
    }
}
