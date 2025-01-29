import { Controller, Get, Post, Param, ParseIntPipe, Body } from "@nestjs/common";
import { BookPipe } from "./validation.pipe";
import { BookData } from "./book.dto";

@Controller("book")
export class BookController {
    @Get("/allbook/:id")
    allBook(@Param("id", ParseIntPipe) id: number): string {
        console.log(id, typeof id);
        return `Fetching book with ID: ${id}`;
    }

    @Post("/adduser/:id")
    addBook(@Param("id", ParseIntPipe) id: number, @Body(new BookPipe()) book: BookData): string {
        return `Book added with ID: ${id}, Name: ${book.name}`;
    }
}
