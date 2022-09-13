import { PartialType } from '@nestjs/mapped-types';
import { CreateSamsungCareDto } from './create-samsung-care.dto';

export class UpdateSamsungCareDto extends PartialType(CreateSamsungCareDto) {}
