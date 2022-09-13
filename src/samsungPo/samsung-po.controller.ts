import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SamsungPoService } from './samsung-po.service';
import { CreateSamsungPoDto } from './dto/create-samsung-po.dto';
import { UpdateSamsungPoDto } from './dto/update-samsung-po.dto';

@Controller('samsung-po')
export class SamsungPoController {
  constructor(private readonly samsungPoService: SamsungPoService) {}

  @Post()
  create(@Body() createSamsungPoDto: CreateSamsungPoDto) {
    return this.samsungPoService.create(createSamsungPoDto);
  }

  @Get()
  findAll() {
    return this.samsungPoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.samsungPoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSamsungPoDto: UpdateSamsungPoDto) {
    return this.samsungPoService.update(+id, updateSamsungPoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.samsungPoService.remove(+id);
  }
}
