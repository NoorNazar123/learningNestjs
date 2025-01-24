import { Module } from '@nestjs/common';
import { Feature1 } from './Fetaure1.module';

@Module({
    imports: [Feature1],
    controllers: [],
    providers: [],
    exports: [],
})
export class OrderModule {
    constructor() {
        console.log("order module");

    }
}
