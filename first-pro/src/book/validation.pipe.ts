import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class BookPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.id == 1) {
            return value;
        } else {
            throw new BadRequestException('Validation failed');
        }
    }
}
