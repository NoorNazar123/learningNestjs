import { Controller, Get, Post, Param, ParseIntPipe, Body, UseGuards } from "@nestjs/common";
import { BookPipe } from "./validation.pipe";
import { BookData } from "./book.dto";
import { BookGuard } from "./book.guard";

@Controller("book")
export class BookController {
    @UseGuards(new BookGuard())
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
