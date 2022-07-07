import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Calculated } from './calculated.entity';

describe('AppController', () => {
  let appController: AppController;
  const repository = {};

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
    it('service에서 지원되지 않는 연산일때', () => {});

    it('service에서 정상값이 반환됐을 때', () => {});
  });

  describe('records', () => {
    it('records가 없을 때, []빈배열 반환', () => {});
    it('records가 있을 때', () => {});
  });
});
