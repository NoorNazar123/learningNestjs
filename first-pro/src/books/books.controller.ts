import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Post("/add")
    addBook(): string {
        return this.booksService.addBook(); // Call service method
    }

    @Put("update")
    updateBook(): string {
        return this.booksService.updateBook(); // Call service method
    }

    @Delete("delete")
    deleteBook(): string {
        return this.booksService.adddelete(); // Call service method
    }

    @Get("all")
    findAllBooks(): string {
        return this.booksService.findAllBook(); // Call service method
    }
}
