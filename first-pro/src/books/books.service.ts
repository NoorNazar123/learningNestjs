import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    addBook(): string {
        return "create book"; // In a real scenario, you would interact with a database or data source here
    }

    updateBook(): string {
        return "update book"; // Similarly, update the book in the database
    }

    adddelete(): string {
        return "delete book"; // In reality, you would delete the book from the database
    }

    findAllBook(): string {
        return "find All books"; // In a real-world app, this would return all books from a database
    }
}
