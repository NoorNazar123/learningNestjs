import { Controller, Get, Post } from "@nestjs/common";


@Controller("user")
export class UserController {
    @Get("/alluser")
    alluser(): string {
        return "all user"
    }
    @Post("/adduser")
    addUser(): string {
        return "add user"
    }
}