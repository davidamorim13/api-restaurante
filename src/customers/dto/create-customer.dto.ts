import { IsString, IsBoolean } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  active: boolean;
}
