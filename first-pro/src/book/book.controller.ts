import { Controller, Get, Post } from "@nestjs/common";

@Controller("book")

export class BookController {
    @Get("/allbook")
    allBook(): String {
        return "add book"
    }
    @Post("/adduser")
    addbook(): String {
        return "add book"
    }
} 