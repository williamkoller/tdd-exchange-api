import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 3)
  currency: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}
