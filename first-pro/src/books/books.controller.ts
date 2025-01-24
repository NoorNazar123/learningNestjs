import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from '@nestjs/common';

@Controller('books')
export class BooksController {
    constructor() {
        console.log("Books Controller");

    }
    @Post("/add")
    addBook(): string {
        return "create book"
    }
    @Put("update")
    updateBook(): string {
        return "update book"
    }
    @Delete("delete")
    adddelete(): string {
        return "delete book"
    }
    @Get("all")
    findAllBook(@Req() request): string {
        console.log(request.url);
        console.log(request.query);
        return "find All book"
    }
}
