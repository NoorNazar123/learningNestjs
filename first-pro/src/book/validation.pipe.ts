import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookData } from './book.dto';
import { validate } from 'class-validator';

@Injectable() // Add the Injectable decorator
export class BookPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        // Transform the plain object into a class instance
        const Bookclass = plainToInstance(BookData, value);

        // Validate the class instance
        const errors = await validate(Bookclass);
        if (errors.length > 0) {
            // Throw a BadRequestException if validation fails
            throw new BadRequestException('Validation failed'); // Fixed typo
        }

        // Log the value and its type (optional, for debugging)
        console.log(value, typeof value);

        // Return the validated and transformed object
        return Bookclass; // Return the validated object instead of the original value
    }
}




// @Injectable()
// export class BookPipe implements PipeTransform {
//     transform(value: any, metadata: ArgumentMetadata) {
//         if (value.id == 1) {
//             console.log(value, typeof (value));

//             return value;
//         } else {
//             throw new BadRequestException('Validation failed');
//         }
//     }
// }
