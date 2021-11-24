import { Module } from '@nestjs/common';
import { TargetService } from './target.service';
import { S3FileMonitorModule } from '../s3-file-monitor/s3-file-monitor.module';
import { TargetController } from './target.controller';

@Module({
  imports: [
    // S3FileMonitorModule
  ],
  providers: [TargetService],
  controllers: [TargetController],
})
export class TargetModule {}
