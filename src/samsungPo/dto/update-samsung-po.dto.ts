import { PartialType } from '@nestjs/mapped-types';
import { CreateSamsungPoDto } from './create-samsung-po.dto';

export class UpdateSamsungPoDto extends PartialType(CreateSamsungPoDto) {}
