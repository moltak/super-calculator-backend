import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calculated } from './calculated.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Calculated)
    private readonly repository: Repository<Calculated>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
