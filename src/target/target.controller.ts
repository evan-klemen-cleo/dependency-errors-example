import { Controller, Get } from '@nestjs/common';
// import { S3FileMonitorService } from '../s3-file-monitor/s3-file-monitor.service';

@Controller('target')
export class TargetController {
  // constructor(private readonly s3FileMonitorService: S3FileMonitorService) {}

  @Get()
  async getAll() {
    return 'Hello';
  }
}
