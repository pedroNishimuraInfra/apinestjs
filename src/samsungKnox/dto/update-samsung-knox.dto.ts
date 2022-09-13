import { PartialType } from '@nestjs/mapped-types';
import { CreateSamsungKnoxDto } from './create-samsung-knox.dto';

export class UpdateSamsungKnoxDto extends PartialType(CreateSamsungKnoxDto) {}
