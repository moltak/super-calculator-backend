import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalcRecordsDto } from './dto/calc-records-dto';
import { CaclRequestDto } from './dto/calc-request-dto';
import { CalcResultDto } from './dto/calc-result-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/calc')
  calc(@Body() requestDto: CaclRequestDto): Promise<CalcResultDto> {
    return this.appService.calc(requestDto);
  }

  @Get('/records')
  records(): Promise<CalcRecordsDto[]> {
    return this.appService.records();
  }

  testFunction(){}
}
