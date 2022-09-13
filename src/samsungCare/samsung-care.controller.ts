import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SamsungCareService } from './samsung-care.service';
import { CreateSamsungCareDto } from './dto/create-samsung-care.dto';
import { UpdateSamsungCareDto } from './dto/update-samsung-care.dto';

@Controller('samsung-care')
export class SamsungCareController {
  constructor(private readonly samsungCareService: SamsungCareService) {}

  @Post()
  create(@Body() createSamsungCareDto: CreateSamsungCareDto) {
    return this.samsungCareService.create(createSamsungCareDto);
  }

  @Get()
  findAll() {
    return this.samsungCareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.samsungCareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSamsungCareDto: UpdateSamsungCareDto) {
    return this.samsungCareService.update(+id, updateSamsungCareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.samsungCareService.remove(+id);
  }
}
