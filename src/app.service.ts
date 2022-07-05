import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calculated } from './calculated.entity';
import { CalcRecordsDto } from './dto/calc-records-dto';
import { CaclRequestDto } from './dto/calc-request-dto';
import { CalcResultDto } from './dto/calc-result-dto';

@Injectable()
export class AppService {
  constructor(
    /**
     * Repository Pattern
     */
    @InjectRepository(Calculated)
    private readonly repository: Repository<Calculated>,
  ) {}

  async calc(dto: CaclRequestDto): Promise<CalcResultDto> {
    await this.repository.save({
      ...dto,
    });

    switch (dto.sign) {
      case '+':
        return { result: `${parseInt(dto.a) + parseInt(dto.b)}` };
      case '-':
        return { result: `${parseInt(dto.a) - parseInt(dto.b)}` };
      case '*':
        return { result: `${parseInt(dto.a) * parseInt(dto.b)}` };
      case '/':
        return { result: `${parseInt(dto.a) / parseInt(dto.b)}` };
      default:
        throw new Error(`${dto.sign}은 지원되지 않는 연산입니다.`);
    }
  }

  async records(): Promise<CalcRecordsDto[]> {
    return this.repository.find({});
  }
}
