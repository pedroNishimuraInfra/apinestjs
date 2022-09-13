import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SamsungKnoxService } from './samsung-knox.service';
import { CreateSamsungKnoxDto } from './dto/create-samsung-knox.dto';
import { UpdateSamsungKnoxDto } from './dto/update-samsung-knox.dto';

@Controller('samsung-knox')
export class SamsungKnoxController {
  constructor(private readonly samsungKnoxService: SamsungKnoxService) {}

  @Post()
  create(@Body() createSamsungKnoxDto: CreateSamsungKnoxDto) {
    return this.samsungKnoxService.create(createSamsungKnoxDto);
  }

  @Get()
  findAll() {
    return this.samsungKnoxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.samsungKnoxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSamsungKnoxDto: UpdateSamsungKnoxDto) {
    return this.samsungKnoxService.update(+id, updateSamsungKnoxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.samsungKnoxService.remove(+id);
  }
}
