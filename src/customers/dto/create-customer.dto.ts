import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsNumber()
  id: number;

  @IsString(
    {
			message: "O campo name deve ser uma string."
		}
  )
  name: string;

  @IsString(
    {
			message: "O campo email deve ser uma string."
		}
  )
  email: string;

  @IsString(
    {
			message: "O campo passaword deve ser uma string."
		}
  )
  password: string;

  @IsBoolean(
    {
			message: "O campo active deve ser um valor boolean."
		}
  )
  active: boolean;
}
