import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Calculated } from './calculated.entity';

describe('AppController', () => {
  let appController: AppController;
  let repository = {};

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: getRepositoryToken(Calculated),
          useValue: repository,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialized', () => {
    expect(appController).not.toBeNull();
  });

  describe('calc', () => {
    it('더하기', () => {});

    it('빼기', () => {});

    it('곱하기', () => {});

    it('나누기', () => {});
  });

  describe('records', () => {
    it('records가 없을 때, []빈배열 반환', () => {});
    it('records가 있을 때', () => {});
  });
});
