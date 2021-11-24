import { Test, TestingModule } from '@nestjs/testing';
import { S3FileMonitorService } from './s3-file-monitor.service';

describe('S3FileMonitorService', () => {
  let service: S3FileMonitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3FileMonitorService],
    }).compile();

    service = module.get<S3FileMonitorService>(S3FileMonitorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
