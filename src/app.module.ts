import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3FileMonitorModule } from './s3-file-monitor/s3-file-monitor.module';
import { S3Module } from './aws-s3/aws-s3.module';
import { TargetModule } from './target/target.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    S3FileMonitorModule,
    TargetModule,
    S3Module.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        endpoint: configService.get<string>(
          'AWS_S3_URL',
          'https://s3.us-east-1.amazonaws.com',
        ),
        region: configService.get<string>('AWS_S3_REGION', 'us-east-1'),
        accessKeyId: configService.get<string>('AWS_ACCESS_KEY_ID', 'fakekey'),
        secretAccessKey: configService.get<string>(
          'AWS_SECRET_ACCESS_KEY',
          'fakesecret',
        ),
        isGlobal: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
