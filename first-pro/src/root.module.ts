import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';
import { BooksController } from './books/books.controller';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { BooksService } from './books/books.service';



@Module({
  imports: [UsersModule, OrderModule, ChatModule],
  controllers: [BooksController, CatsController],
  providers: [CatsService, BooksService],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log("Hello Hammad");

  }
}
