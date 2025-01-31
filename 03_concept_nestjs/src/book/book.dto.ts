import { IsInt, IsString } from "class-validator";

export class BookData {
    @IsInt()
    id: number;
    @IsString()
    name: string;
}