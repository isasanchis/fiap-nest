import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    price: number;
}