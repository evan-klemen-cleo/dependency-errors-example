import { Module } from '@nestjs/common';
import { S3FileMonitorService } from './s3-file-monitor.service';

@Module({
  // providers: [S3FileMonitorService],
  // exports: [S3FileMonitorService],
})
export class S3FileMonitorModule {}
